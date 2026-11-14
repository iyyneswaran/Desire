import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import fs from 'fs';
import path from 'path';

// Region to mesh name mapping
const REGION_MAP = {
  1: {
    id: 'prefrontal',
    isDeep: 0,
    meshes: [
      'left-superior-frontal-gyrus',
      'right-superior-frontal-gyrus',
      'left-middle-frontal-gyrus',
      'right-middle-frontal-gyrus',
      'left-inferior-frontal-gyrus',
      'right-inferior-frontal-gyrus',
    ],
  },
  2: {
    id: 'acc',
    isDeep: 1,
    meshes: ['left-cingulate-gyrus', 'right-cingulate-gyrus'],
  },
  3: {
    id: 'striatum',
    isDeep: 1,
    meshes: [
      'left-internal-capsule',
      'right-internal-capsule',
      'white-matter-of-left-cerebral-hemisphere',
      'white-matter-of-right-cerebral-hemisphere',
    ],
  },
  4: {
    id: 'nac',
    isDeep: 1,
    meshes: ['hypothalamus', 'hypothalamus2', 'third-ventricle'],
  },
  5: {
    id: 'thalamus',
    isDeep: 1,
    meshes: ['thalamus', 'thalamus-1'],
  },
  6: {
    id: 'amygdala',
    isDeep: 1,
    meshes: ['habenula', 'left-parahippocampal-gyrus', 'right-parahippocampal-gyrus'],
  },
  7: {
    id: 'hippocampus',
    isDeep: 1,
    meshes: ['left-hippocampus', 'right-hippocampus'],
  },
  8: {
    id: 'visual',
    isDeep: 0,
    meshes: [
      'left-occipital-lobe',
      'right-occipital-lobe',
      'left-fusiform-gyrus',
      'right-fusiform-gyrus',
    ],
  },
  9: {
    id: 'vta',
    isDeep: 1,
    meshes: [
      'midbrain',
      'midbrain2',
      'pineal-body',
      'left-superior-colliculus',
      'right-superior-colliculus',
      'left-inferior-colliculus',
      'right-inferior-colliculus',
    ],
  },
  10: {
    id: 'cerebellum',
    isDeep: 0,
    meshes: ['cerebellum', 'cerebellum2'],
  },
};

async function run() {
  const glbPath = path.resolve('public/models/brain/brain.glb');
  const buf = fs.readFileSync(glbPath);
  const arrayBuffer = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);

  const loader = new GLTFLoader();
  loader.parse(
    arrayBuffer,
    '',
    (gltf) => {
      // Rotation: -PI/2 on X to align medical orientation with Three.js (Superior = +Y, Anterior = +Z)
      gltf.scene.rotation.x = -Math.PI / 2;
      gltf.scene.updateMatrixWorld(true);

      const positions = [];
      const normals = [];
      const regionIndices = [];
      const isDeeps = [];

      // Collect all meshes and assign regions
      gltf.scene.traverse((child) => {
        if (!child.isMesh || !child.geometry) return;

        let regionIndex = 0;
        let isDeep = 0;

        for (const [rIdx, config] of Object.entries(REGION_MAP)) {
          if (config.meshes.includes(child.name)) {
            regionIndex = parseInt(rIdx);
            isDeep = config.isDeep;
            break;
          }
        }

        const geo = child.geometry;
        const posAttr = geo.attributes.position;
        const normAttr = geo.attributes.normal;
        const vertexCount = posAttr.count;

        // Sampling stride: for smaller deep structures, sample every vertex;
        // for massive general meshes, sample with stride to balance total density around 30,000 points
        let stride = 1;
        if (regionIndex === 0) {
          stride = 3; // General context: sample 1 out of 3
        } else if (regionIndex === 3) {
          stride = 2; // Striatum is very large: sample 1 out of 2
        } else if (regionIndex === 10) {
          stride = 2; // Cerebellum: sample 1 out of 2
        } else {
          stride = 1; // Sample 100% of vertices for targeted structures like NAc, Amygdala, Hippocampus, Thalamus, VTA, Prefrontal
        }

        const v = new THREE.Vector3();
        const n = new THREE.Vector3();

        for (let i = 0; i < vertexCount; i += stride) {
          v.fromBufferAttribute(posAttr, i);
          v.applyMatrix4(child.matrixWorld);

          if (normAttr) {
            n.fromBufferAttribute(normAttr, i);
            const normalMatrix = new THREE.Matrix3().getNormalMatrix(child.matrixWorld);
            n.applyMatrix3(normalMatrix).normalize();
          } else {
            n.set(0, 1, 0);
          }

          positions.push(v.x, v.y, v.z);
          normals.push(n.x, n.y, n.z);
          regionIndices.push(regionIndex);
          isDeeps.push(isDeep);
        }

        // Densify small deep structures with volumetric jitter points
        if (regionIndex === 7 || regionIndex === 4 || regionIndex === 6 || regionIndex === 9) {
          // Hippocampus, NAc, Amygdala, VTA: add volumetric interior particles
          const extraSamples = regionIndex === 7 ? 600 : 300;
          for (let k = 0; k < extraSamples; k++) {
            const idxA = Math.floor(Math.random() * vertexCount);
            const idxB = Math.floor(Math.random() * vertexCount);
            const vA = new THREE.Vector3().fromBufferAttribute(posAttr, idxA).applyMatrix4(child.matrixWorld);
            const vB = new THREE.Vector3().fromBufferAttribute(posAttr, idxB).applyMatrix4(child.matrixWorld);
            const lerpFactor = Math.random();
            const jitter = new THREE.Vector3().lerpVectors(vA, vB, lerpFactor);
            // subtle internal dispersion
            jitter.x += (Math.random() - 0.5) * 0.04;
            jitter.y += (Math.random() - 0.5) * 0.04;
            jitter.z += (Math.random() - 0.5) * 0.04;

            positions.push(jitter.x, jitter.y, jitter.z);
            normals.push(0, 1, 0);
            regionIndices.push(regionIndex);
            isDeeps.push(1);
          }
        }
      });

      const particleCount = positions.length / 3;
      console.log('Successfully sampled total particles:', particleCount);

      // Save as JSON metadata & packed binary
      const binaryData = Buffer.alloc(particleCount * (3 * 4 + 3 * 4 + 1 + 1));
      let offset = 0;
      for (let i = 0; i < particleCount; i++) {
        binaryData.writeFloatLE(positions[i * 3 + 0], offset);
        binaryData.writeFloatLE(positions[i * 3 + 1], offset + 4);
        binaryData.writeFloatLE(positions[i * 3 + 2], offset + 8);
        binaryData.writeFloatLE(normals[i * 3 + 0], offset + 12);
        binaryData.writeFloatLE(normals[i * 3 + 1], offset + 16);
        binaryData.writeFloatLE(normals[i * 3 + 2], offset + 20);
        binaryData.writeUInt8(regionIndices[i], offset + 24);
        binaryData.writeUInt8(isDeeps[i], offset + 25);
        offset += 26;
      }

      const outBinPath = path.resolve('public/models/brain/brainParticles.bin');
      fs.writeFileSync(outBinPath, binaryData);
      console.log('Wrote binary particle file to:', outBinPath, 'Size:', binaryData.length, 'bytes');

      // Also write a lightweight JSON descriptor
      const jsonMeta = {
        particleCount,
        strideBytes: 26,
        format: {
          position: [0, 12, 'float32'],
          normal: [12, 24, 'float32'],
          regionIndex: [24, 25, 'uint8'],
          isDeep: [25, 26, 'uint8'],
        },
        boundingBox: {
          min: [-1.41, -1.8, -1.66],
          max: [1.41, 1.8, 1.66],
        },
      };
      fs.writeFileSync(path.resolve('public/models/brain/brainParticles.json'), JSON.stringify(jsonMeta, null, 2));
      console.log('Finished particle asset pipeline successfully!');
    },
    (err) => console.error('Error generating particles:', err)
  );
}

run();
