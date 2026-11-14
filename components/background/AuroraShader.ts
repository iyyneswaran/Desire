export const VERTEX_SHADER = `
attribute vec2 position;
varying vec2 vUv;

void main() {
  vUv = (position + 1.0) * 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

export const FRAGMENT_SHADER = `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_intensity;

varying vec2 vUv;

// Simplex-inspired light noise for organic wave variation
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Compute flowing ribbon intensity at point uv
vec3 getRibbon(
  vec2 uv, 
  float time, 
  float baseY, 
  float speed, 
  float freq, 
  float amp, 
  vec3 coreColor, 
  vec3 edgeColor,
  vec2 mouse
) {
  // Mouse proximity influence (soft gravitational pull)
  float mouseDist = length(uv - mouse);
  float mousePull = exp(-mouseDist * 3.5) * 0.12;

  // Multi-frequency wave calculation for organic ribbon curvature
  float wave = sin(uv.x * freq + time * speed) * amp;
  wave += cos(uv.x * (freq * 1.7) - time * (speed * 0.8)) * (amp * 0.45);
  wave += sin(uv.x * (freq * 3.1) + time * (speed * 1.3)) * (amp * 0.22);
  
  // Add subtle continuous organic noise
  float noiseVal = snoise(vec2(uv.x * 2.2 + time * 0.15, time * 0.1)) * 0.08;
  
  // Calculate target curve height
  float targetY = baseY + wave + noiseVal + (mouse.y - uv.y) * mousePull;
  
  // Vertical distance to the ribbon centerline
  float dist = abs(uv.y - targetY);
  
  // Dynamic ribbon thickness that naturally pinches and swells
  float thickness = 0.0035 + 0.0025 * sin(uv.x * 4.0 + time * 0.5);
  
  // Core intense beam
  float coreGlow = thickness / (pow(dist * 95.0, 1.8) + 0.035);
  
  // Luminous outer bloom
  float outerGlow = (thickness * 2.4) / (dist * 18.0 + 0.08);
  outerGlow = clamp(outerGlow, 0.0, 1.8);
  
  // Deep ambient haze
  float ambientHaze = exp(-dist * 8.5) * 0.28;
  
  // Color blending: white-hot core transitioning into neon-lime and emerald
  vec3 whiteHot = vec3(0.96, 1.0, 0.94);
  vec3 ribbonColor = mix(edgeColor, coreColor, clamp(coreGlow * 1.4, 0.0, 1.0));
  ribbonColor = mix(ribbonColor, whiteHot, clamp(coreGlow * coreGlow * 1.1 - 0.2, 0.0, 1.0));
  
  float totalIntensity = coreGlow * 1.5 + outerGlow * 0.75 + ambientHaze * 0.35;
  return ribbonColor * totalIntensity;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  
  // Base dark background: #050705 with subtle deep-green undertone
  vec3 baseColor = vec3(0.0196, 0.0275, 0.0196);
  
  // Add subtle gradient from top-center to create atmospheric volume
  float radialAtmosphere = 1.0 - length((uv - vec2(0.5, 0.75)) * vec2(1.0, 0.7));
  radialAtmosphere = clamp(radialAtmosphere, 0.0, 1.0);
  baseColor += vec3(0.012, 0.035, 0.015) * pow(radialAtmosphere, 2.5);

  // Time scaling for smooth, deliberate, elegant motion
  float t = u_time * 0.35;
  vec2 m = u_mouse;

  // Color palette tokens
  vec3 neonLime = vec3(0.725, 1.0, 0.263);    // #B9FF43
  vec3 emerald = vec3(0.471, 0.851, 0.341);    // #78D957
  vec3 deepGreen = vec3(0.141, 0.294, 0.176);  // #244B2D
  vec3 forestMuted = vec3(0.08, 0.18, 0.10);

  vec3 scene = vec3(0.0);

  // Ribbon 1 — Upper expansive sweeping emerald aurora
  scene += getRibbon(uv, t, 0.72, 0.45, 2.8, 0.14, neonLime, emerald, m) * 0.85;

  // Ribbon 2 — Main dominant neon-lime ribbon cutting through upper-mid
  scene += getRibbon(uv, t * 1.15 + 1.4, 0.58, -0.38, 3.4, 0.18, neonLime, emerald, m) * 1.1;

  // Ribbon 3 — Mid-deep ribbon with rich emerald and deep green layering
  scene += getRibbon(uv, t * 0.85 + 2.8, 0.44, 0.52, 2.2, 0.22, emerald, deepGreen, m) * 0.95;

  // Ribbon 4 — Lower organic stream weaving through lower third
  scene += getRibbon(uv, t * 1.25 + 4.2, 0.28, -0.42, 3.8, 0.15, neonLime, deepGreen, m) * 0.75;

  // Ribbon 5 — Subtle deep background trail providing atmospheric depth
  scene += getRibbon(uv, t * 0.6 + 5.5, 0.82, 0.25, 1.9, 0.11, emerald, forestMuted, m) * 0.5;

  // Apply overall intensity control
  scene *= u_intensity;

  // Natural dark vignette on edges to frame content
  float vignette = uv.x * (1.0 - uv.x) * uv.y * (1.0 - uv.y) * 16.0;
  vignette = clamp(pow(vignette, 0.35), 0.0, 1.0);
  
  // Tone-mapping / soft saturation curve to prevent blowout
  vec3 finalColor = baseColor + scene;
  finalColor = finalColor / (1.0 + finalColor * 0.25);
  finalColor *= mix(0.75, 1.0, vignette);

  gl_FragColor = vec4(finalColor, 1.0);
}
`;
