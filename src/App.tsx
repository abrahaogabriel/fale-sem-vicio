import { Hero } from "./components/sections/Hero";
import { ProblematicMoments } from "./components/sections/ProblematicMoments";
import { ProblemContext } from "./components/sections/ProblemContext";
import { VicesImpact } from "./components/sections/VicesImpact";

function App() {
  return (
    <main className="bg-brand-dark min-h-screen">
      <Hero />
      <ProblematicMoments />
      <ProblemContext />
      <VicesImpact />
    </main>
  );
}

export default App
