import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SplineComponent from "./components/SplineComponent";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
      <Navbar />
      <Hero />
      {/* <SplineComponent /> */}
      <section className="z-0 min-h-screen bg-blue-500" />
    </main>
  );
}

