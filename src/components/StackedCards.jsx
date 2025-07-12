import React, { useEffect, useRef, useState } from "react";
import { cards } from "../data/cards";
import Card from "./Card";

const StackingCards = () => {
  const cardsRef = useRef([]);
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    if (cardsRef.current[0]) {
      setCardHeight(cardsRef.current[0].getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="flex justify-center text-white">
        <header className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-6">
            What can you do with your Onesheet?
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Create a dynamic, all-in-one showcase for your music, updates, and
            promotions
          </p>
        </header>
      </section>

      {/* Stacking section */}
      <section className="relative">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="sticky flex items-center justify-center"
            style={{ top: `${i * 60}px`, zIndex: i + 1, height: "70vh" }}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <Card {...card} />
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default StackingCards;
