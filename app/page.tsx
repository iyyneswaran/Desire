import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Divider from '@/components/shared/Divider'
import AuroraBackground from '@/components/background/AuroraBackground'
import HeroSection from '@/components/sections/HeroSection'
import OpeningReflection from '@/components/sections/OpeningReflection'
import UnderstandingDesire from '@/components/sections/UnderstandingDesire'
import NeurochemistrySection from '@/components/sections/NeurochemistrySection'
import BrainMechanismSection from '@/components/sections/BrainMechanismSection'
import UrgeActionSection from '@/components/sections/UrgeActionSection'
import ConsequencesSection from '@/components/sections/ConsequencesSection'
import JensenCaseStudy from '@/components/sections/JensenCaseStudy'
import DigitalAgeSection from '@/components/sections/DigitalAgeSection'
import SelfRegulationSection from '@/components/sections/SelfRegulationSection'
import ReinforcementCycle from '@/components/sections/ReinforcementCycle'
import SelfMasterySection from '@/components/sections/SelfMasterySection'
import MythFactSection from '@/components/sections/MythFactSection'
import ScenarioSection from '@/components/sections/ScenarioSection'
import FinalReflection from '@/components/sections/FinalReflection'
import ReferencesSection from '@/components/sections/ReferencesSection'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050705] text-[#F2F5EF] selection:bg-[#B9FF43] selection:text-[#050705]">
      {/* Reusable Atmospheric WebGL Aurora Background */}
      <AuroraBackground fixed={true} intensity={1.0} />

      {/* Main Website Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <Divider />
          <OpeningReflection />
          <Divider />
          <UnderstandingDesire />
          <Divider />
          <NeurochemistrySection />
          <Divider />
          <BrainMechanismSection />
          <Divider />
          <UrgeActionSection />
          <Divider />
          <ConsequencesSection />
          <Divider />
          <JensenCaseStudy />
          <Divider />
          <DigitalAgeSection />
          <Divider />
          <SelfRegulationSection />
          <Divider />
          <ReinforcementCycle />
          <Divider />
          <SelfMasterySection />
          <Divider />
          <MythFactSection />
          <Divider />
          <ScenarioSection />
          <Divider />
          <FinalReflection />
          <Divider />
          <ReferencesSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
