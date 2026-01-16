import { Hero } from "./components/sections/Hero";
import { ProblematicMoments } from "./components/sections/ProblematicMoments";
import { ProblemContext } from "./components/sections/ProblemContext";
import { VicesImpact } from "./components/sections/VicesImpact";
import { LearningSection } from "./components/sections/LearningSection";
import { TestimonialsSection } from './components/sections/TestimonialsSection'; // Dobra 07
import { PriceSection } from './components/sections/PriceSection'; // Dobra 08

function App() {
  return (
    <main className="bg-brand-dark min-h-screen">
      <Hero />
      <ProblematicMoments />
      <ProblemContext />
      <VicesImpact />
      <LearningSection />
      <TestimonialsSection />
      <PriceSection />
    </main>
  );
}

export default App
