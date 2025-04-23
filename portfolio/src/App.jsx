import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PlusAnimation from "./components/PlusAnimation";
import ImageReveal from "./components/ImageReveal";
import Tesserat from "./components/models/Tesserat";
import Footer from "./components/Footer";
import SplineComponent from "./components/SplineComponent";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Tesserat />
      {/* <SplineComponent /> */}
      {/* <PlusAnimation /> */}
      <section className="z-0 min-h-screen bg-blue-100" />
      <About />
      {/* <ImageReveal /> */}
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

