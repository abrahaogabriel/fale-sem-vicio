import { Hero } from "./components/sections/Hero";
import { ProblematicMoments } from "./components/sections/ProblematicMoments";
import { ProblemContext } from "./components/sections/ProblemContext";
import { VicesImpact } from "./components/sections/VicesImpact";
import { LearningSection } from "./components/sections/LearningSection";

function App() {
  return (
    <main className="bg-brand-dark min-h-screen">
      <Hero />
      <ProblematicMoments />
      <ProblemContext />
      <VicesImpact />
      <LearningSection />
    </main>
  );
}

export default App
