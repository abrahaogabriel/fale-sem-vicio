import { Hero } from "./components/sections/Hero";
import { ProblematicMoments } from "./components/sections/ProblematicMoments";
import { VicesImpact } from "./components/sections/VicesImpact";
import { LearningSection } from "./components/sections/LearningSection";
import { TestimonialsSection } from './components/sections/TestimonialsSection'; // Dobra 07
import { PriceSection } from './components/sections/PriceSection'; // Dobra 08
import { AboutSection } from './components/sections/AboutSection'; // Dobra 09
import { FAQSection } from './components/sections/FAQSection'; // Dobra 10
import { Footer } from './components/sections/Footer'; // Rodapé
import { WhatsAppButton } from "./components/ui/WhatsAppButton";

function App() {
  return (
    <main className="bg-brand-dark min-h-screen">
      <Hero />
      <ProblematicMoments />
      <VicesImpact />
      <LearningSection />
      <TestimonialsSection />
      <PriceSection />
      <AboutSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App
