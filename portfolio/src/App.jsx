import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PlusAnimation from "./components/PlusAnimation";
import ImageReveal from "./components/ImageReveal";
import Tesseract from "./components/models/Tesseract";
import Footer from "./components/Footer";
import SplineComponent from "./components/SplineComponent";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <section className="relative h-screen w-full bg-blue-200">
        <Tesseract />
      </section>
      {/* <SplineComponent /> */}
      {/* <section className="z-0 min-h-screen bg-blue-100" /> */}
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

