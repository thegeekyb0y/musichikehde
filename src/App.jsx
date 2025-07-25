import "./App.css";
import { Demo } from "./components/Demo";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import HeroSec from "./components/HeroSec";
import { HowtoSec } from "./components/HowtoSec";
import StackingCards from "./components/StackedCards";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div
      className="min-h-screen bg-black relative m-0 p-0 pt-20 md:pt-12 font-[poppins]"
      style={{
        backgroundImage: `linear-gradient(#19191c 2.2px, transparent 2.2px), linear-gradient(90deg, #19191c 2.2px, transparent 2.2px), linear-gradient(#19191c 1.1px, transparent 1.1px), linear-gradient(90deg, #19191c 1.1px, #000 1.1px)`,
        backgroundSize: "55px 55px, 55px 55px, 11px 11px, 11px 11px",
        backgroundPosition:
          "-2.2px -2.2px, -2.2px -2.2px, -1.1px -1.1px, -1.1px -1.1px",
      }}
    >
      <Header />
      <HeroSec />
      <StackingCards />
      <HowtoSec />
      <Testimonials />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
