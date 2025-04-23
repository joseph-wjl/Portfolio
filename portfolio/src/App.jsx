import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PlusAnimation from "./components/PlusAnimation";
import Footer from "./components/Footer";
import SplineComponent from "./components/SplineComponent";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <SplineComponent /> */}
      <PlusAnimation />
      <section className="z-0 min-h-screen bg-blue-500" />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

