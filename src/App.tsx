import { Hero } from "./components/sections/Hero";
import { ProblematicMoments } from "./components/sections/ProblematicMoments";
import { ProblemContext } from "./components/sections/ProblemContext";

function App() {
  return (
    <main className="bg-brand-dark min-h-screen">
      <Hero />
      <ProblematicMoments />
      <ProblemContext />
    </main>
  );
}

export default App
