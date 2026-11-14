# LUST. — The Science of Desire & Self-Mastery

An interactive, research-grounded educational web experience exploring the biology, neurochemistry, and behavioral psychology of human desire, reward circuits, digital hyper-stimulation, and evidence-based self-mastery.

> *"You don't have to eliminate desire. You have to learn to govern it."*  
> — Central Educational Premise

---

## Table of Contents

- [Overview](#overview)
- [Key Features & Interactive Exhibits](#key-features--interactive-exhibits)
- [Architecture & Project Structure](#architecture--project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [3D Brain Particle Pipeline](#3d-brain-particle-pipeline)
- [Scientific Foundations](#scientific-foundations)
- [Design System & Accessibility](#design-system--accessibility)
- [Academic References](#academic-references)

---

## Overview

**LUST.** is an editorial educational platform designed to bridge cutting-edge neuroscience with actionable behavioral psychology. It deconstructs the neural circuits of craving, dopamine-driven anticipation, reward prediction errors, and the impact of modern digital supernormal stimuli—equipping users with practical frameworks for executive self-regulation.

Rather than viewing desire as an adversary to suppress, the project illustrates how desire is a fundamental evolutionary survival mechanism, and demonstrates how cognitive awareness and top-down prefrontal governance can transform impulsive reactions into deliberate choices.

---

## Key Features & Interactive Exhibits

### 1. Interactive 3D WebGL Particle Brain
- **Hardware-Accelerated Point Cloud:** Built with Three.js and custom GLSL vertex/fragment shaders rendering thousands of responsive neural particles with subtle breathing pulses and neural spark waves.
- **10 Anatomical Brain Regions:** Precise mapping and interactive inspection of key cortical and subcortical nodes:
  - **Prefrontal Cortex (dlPFC, vmPFC, OFC):** Executive governance, top-down inhibition, and future simulation.
  - **Anterior Cingulate Cortex (ACC):** Conflict monitoring, error detection, and cognitive resource allocation.
  - **Striatum (Dorsal Striatum / Caudate & Putamen):** Habit automation and stimulus-response encoding.
  - **Nucleus Accumbens (NAc):** Incentive salience hub ("wanting" vs. "liking").
  - **Thalamus:** Sensory relay gateway and attentional gating.
  - **Amygdala:** Emotional valence appraisal and rapid threat/opportunity salience.
  - **Hippocampus:** Contextual memory retrieval and associative conditioning.
  - **Visual Cortex:** Sensory input processing and appetitive cue detection.
  - **Ventral Tegmental Area (VTA):** Dopaminergic origin transmitting reward prediction signals.
  - **Cerebellum:** Sensorimotor coordination and behavioral routine automation.
- **Inspection Modes:** Orbital rotation, smooth camera framing per region, deep cutaway view mode for subcortical structures, and accessible 2D SVG diagram fallbacks.

### 2. Atmospheric WebGL Aurora Canvas
- Fullscreen ambient background driven by custom GLSL shaders (`AuroraShader.ts`) rendering dynamic, fluid chromatic waves with zero DOM overhead.

### 3. Neurochemistry & Hormonal Explorer
- Interactive breakdown of key biochemical drivers of motivation, reward, and stress:
  - **Dopamine:** Anticipatory wanting, drive, and prediction error signaling.
  - **Serotonin:** Satiety, impulse inhibition, and mood stabilization.
  - **Oxytocin:** Social affiliation, bonding, and emotional connection.
  - **Endorphins:** Pain alleviation and post-effort euphoria.
  - **Cortisol:** Chronic stress exacerbating impulsive craving.
  - **Testosterone:** Appetitive vigor and status-seeking drive.

### 4. Impulse vs. Governed Pathway Simulator
- Side-by-side comparative visualization contrasting the rapid subcortical reflex arc (VTA $\rightarrow$ NAc $\rightarrow$ Motor Execution) against the deliberative top-down pathway (Sensory Cue $\rightarrow$ ACC conflict detection $\rightarrow$ dlPFC evaluation $\rightarrow$ Conscious Choice).

### 5. Urge-to-Action Pause Mechanism
- Interactive module translating Viktor Frankl's timeless principle:  
  > *"Between stimulus and response there is a space. In that space is our power to choose our response."*
- Visualizes how a 90-second mindful pause decouples visceral cravings from automated motor execution.

### 6. Behavioral Reinforcement Cycle
- Interactive analysis of the five-stage habit loop:  
  **Cue / Trigger $\rightarrow$ Visceral Urge $\rightarrow$ Behavioral Action $\rightarrow$ Neurological Reward $\rightarrow$ Neural Reinforcement**.
- Highlights specific intervention nodes where cognitive reframing interrupts compulsive repetition.

### 7. Modern Digital Age & Supernormal Stimuli
- Examination of infinite scroll algorithms, variable reward schedules, and hyper-palatable digital stimuli that hijack ancestral reward pathways.

### 8. Jensen Case Study & Interactive Scenarios
- **In-Depth Case Study:** Analyzes realistic student scenarios involving late-night triggers, moral dissonance, and structured behavioral recovery.
- **Scenario Explorer:** Interactive decision tree allowing users to evaluate situational triggers, inspect active brain regions, and understand immediate vs. delayed consequences.

### 9. Self-Mastery Toolkits & Myth vs. Fact Matrix
- Evidence-based behavioral strategies:
  - **HALT Protocol:** Assessing vulnerability states (Hungry, Angry, Lonely, Tired).
  - **Implementation Intentions:** *"If [trigger X occurs], then I will [perform constructive action Y]."*
  - **Delay Discounting Countermeasures:** Visualizing tomorrow's morning state to counteract temporal myopia.
- Myth-busting matrix clarifying common misconceptions regarding willpower depletion, dopamine fasting, and urge suppression.

### 10. Peer-Reviewed Academic Bibliography
- Searchable citation library with DOIs, journal references, and PubMed links spanning neuroscience, psychiatry, and cognitive behavioral therapy.

---

## Architecture & Project Structure

```text
desire/
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Custom utility styles, color tokens, and animations
│   ├── layout.tsx               # Root layout with Geist font configuration and metadata
│   └── page.tsx                 # Core page stitching sections, background, and navigation
├── components/
│   ├── background/
│   │   ├── AuroraBackground.tsx # Three.js canvas mounting procedural background
│   │   └── AuroraShader.ts      # Custom GLSL vertex and fragment shader uniforms
│   ├── interactive/
│   │   ├── BrainDiagram.tsx     # 2D SVG fallback brain visualization
│   │   ├── BrainLegend.tsx      # Legend overlay with region categorization and controls
│   │   ├── ParticleBrain.tsx    # Interactive 3D WebGL particle point cloud
│   │   ├── ProcessFlow.tsx      # Step-by-step interactive process visualizer
│   │   └── ScenarioExplorer.tsx # Decision-tree scenario simulation component
│   ├── layout/
│   │   ├── Footer.tsx           # Footer with links, copyright, and educational notices
│   │   ├── Navbar.tsx           # Sticky navigation with active-section tracking
│   │   └── SectionHeader.tsx    # Standardized section header with badge and typography
│   ├── sections/                # Full-width educational narrative sections
│   │   ├── HeroSection.tsx
│   │   ├── OpeningReflection.tsx
│   │   ├── UnderstandingDesire.tsx
│   │   ├── NeurochemistrySection.tsx
│   │   ├── BrainMechanismSection.tsx
│   │   ├── UrgeActionSection.tsx
│   │   ├── ConsequencesSection.tsx
│   │   ├── JensenCaseStudy.tsx
│   │   ├── DigitalAgeSection.tsx
│   │   ├── SelfRegulationSection.tsx
│   │   ├── ReinforcementCycle.tsx
│   │   ├── SelfMasterySection.tsx
│   │   ├── MythFactSection.tsx
│   │   ├── ScenarioSection.tsx
│   │   ├── FinalReflection.tsx
│   │   └── ReferencesSection.tsx
│   └── shared/
│       ├── Divider.tsx          # Subtle editorial section divider
│       └── QuoteBlock.tsx       # Highlighted editorial quote container
├── data/                        # Structured scientific datasets
│   ├── brainRegions.ts          # Detailed anatomical regions, coordinates, and mechanisms
│   ├── brainStages.ts           # Cognitive stages of desire and regulation
│   ├── caseStudy.ts             # Narrative case study data
│   ├── hormones.ts              # Endocrine and hormonal profiles
│   ├── interventions.ts         # Practical self-regulation interventions
│   ├── myths.ts                 # Myth vs. fact dataset
│   ├── neurotransmitters.ts     # Neurotransmitter mechanisms and roles
│   ├── principles.ts            # Core psychological principles
│   ├── references.ts            # Academic papers, journals, and DOIs
│   └── scenarios.ts             # Interactive decision scenarios
├── hooks/
│   ├── useActiveSection.ts      # IntersectionObserver-based active section tracker
│   ├── useBrainSelection.ts     # Brain region selection state and camera focus
│   └── useReducedMotion.ts      # prefers-reduced-motion media query listener
├── lib/
│   └── utils.ts                 # Helper utilities and class merging functions
├── public/
│   └── models/
│       └── brain/
│           ├── brain.glb        # Anatomical 3D brain mesh
│           ├── brainParticles.bin   # Optimized binary particle coordinates and attributes
│           └── brainParticles.json  # Particle metadata, region indices, and counts
├── scripts/
│   └── generateBrainParticles.js # Node.js script to extract particles from GLB to binary
├── types/
│   └── brain.ts                 # TypeScript interfaces for brain regions and mechanics
├── AGENTS.md                    # Agent rules and development conventions
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and build scripts
└── tsconfig.json                # TypeScript configuration
```

---

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, Turbopack) | Server-side rendering, routing, and high-performance asset optimization |
| **UI Library** | [React 19](https://react.dev) | Declarative component architecture |
| **Language** | [TypeScript 5](https://www.typescriptlang.org) | End-to-end static typing and interface contracts |
| **3D Graphics** | [Three.js](https://threejs.org), [@react-three/fiber](https://r3f.docs.pmnd.rs), [@react-three/drei](https://github.com/pmndrs/drei) | WebGL point clouds, orbital cameras, and custom GLSL shaders |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/turbopack`) | Modern utility-first CSS styling and dark theme tokens |
| **Typography** | [Geist](https://vercel.com/font) (`next/font`) | Premium sans-serif and monospace typography |
| **Icons** | [Lucide React](https://lucide.dev) | Consistent, lightweight line iconography |

---

## Getting Started

### Prerequisites

- **Node.js**: v18.18.0 or later (v20+ recommended)
- **Package Manager**: `npm`, `pnpm`, `yarn`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/desire.git
   cd desire
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

In the project directory, you can run:

- `npm run dev` — Starts the Next.js development server with Turbopack on `http://localhost:3000`.
- `npm run build` — Compiles and builds the production bundle.
- `npm run start` — Runs the production server after building.
- `npm run lint` — Runs ESLint to check for code quality and syntax issues.

---

## 3D Brain Particle Pipeline

The 3D interactive brain relies on an optimized point cloud generated directly from a high-resolution 3D anatomical GLB model (`public/models/brain/brain.glb`).

To regenerate or adjust the particle density:

```bash
node scripts/generateBrainParticles.js
```

### What this script does:
1. Loads `public/models/brain/brain.glb` using Three.js's `GLTFLoader`.
2. Corrects medical coordinate orientation ($-\pi/2$ on X-axis: Superior $= +Y$, Anterior $= +Z$).
3. Traverses sub-meshes and associates them with anatomical IDs (`prefrontal`, `acc`, `striatum`, `nac`, `thalamus`, `amygdala`, `hippocampus`, `visual`, `vta`, `cerebellum`).
4. Generates surface positions, normals, region indices, and deep-structure flags.
5. Emits `brainParticles.bin` (compact Float32 binary buffer) and `brainParticles.json` (metadata header) for instant browser loading without runtime mesh parsing overhead.

---

## Scientific Foundations

The concepts presented across this project are synthesized from foundational neuroscience and behavioral economics literature:

1. **Incentive Salience Theory (Berridge & Robinson):** Distinguishing the neurochemical systems of *"wanting"* (mesolimbic dopamine) from *"liking"* (opioid and cannabinoid hedonic hotspots).
2. **Predictive Processing & Reward Prediction Error (Schultz):** Dopamine neurons signal differences between expected and received outcomes, driving appetitive habit reinforcement.
3. **Dual-Process Cognitive Theory:** The interplay between reflexive, subcortical System 1 (limbic) reactivity and deliberate, reflective System 2 (dorsolateral prefrontal) governance.
4. **Temporal Discounting & Delayed Gratification:** Overcoming hyperbolic discounting curves by training prospective memory and value-grounded goal visualization.

---

## Design System & Accessibility

- **Quiet Chrome Palette:**
  - Base Background: Deep Obsidian (`#050705`)
  - Elevated Surfaces: Dark Emerald Slate (`#101810`, `#172019`)
  - Accent Color: Electric Lime (`#B9FF43`) used with strict economy for interactive states and focus moments
  - Text Hierarchy: Primary (`#F2F5EF`), Secondary (`#A0AAA0`), Muted (`#687368`)
- **Spatial Consistency:** 4px grid rhythm throughout all component padding, gaps, and margins.
- **Accessibility & Motion:**
  - Automatic motion reduction via `useReducedMotion` hook.
  - Interactive WebGL views offer clean 2D SVG fallback diagrams (`BrainDiagram.tsx`) for users who prefer minimal movement.
  - Tabular numerals (`tabular-nums`) for aligned data comparison.

---

## Academic References

For full citations, DOIs, and PubMed links, visit the in-app [References Section](#references) or inspect [`data/references.ts`](./data/references.ts). Key primary literature includes:

- **Berridge, K. C., & Robinson, T. E. (2016).** *Liking, wanting, and the incentive-sensitization theory of addiction.* American Psychologist.
- **World Health Organization (2022).** *Compulsive Sexual Behaviour Disorder (6C72).* ICD-11.
- **Frankl, V. E. (1946).** *Man's Search for Meaning.*
- **Baumeister, R. F., et al. (2007).** *The Strength Model of Self-Control.* Current Directions in Psychological Science.
- **National Institute on Drug Abuse (2020).** *Drugs, Brains, and Behavior: The Science of Addiction.*

---

## License

This educational project is created for research, academic, and instructional purposes.
