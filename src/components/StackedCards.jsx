import React, { useEffect, useRef, useState } from "react";
import { cards } from "../data/cards";
import Card from "./Card";
import useScrollReveal from "../hooks/useScrollReveal";

const StackingCards = () => {
  const cardsRef = useRef([]);
  const [cardHeight, setCardHeight] = useState(0);
  useScrollReveal(".img");

  useEffect(() => {
    if (cardsRef.current[0]) {
      setCardHeight(cardsRef.current[0].getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="flex justify-center text-white scroll-reveal fade-in-up-delayed">
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
      <section className="relative img  scroll-reveal fade-in-up-delayed">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="sticky flex items-center justify-center scroll-reveal fade-in-up-delayed"
            style={{ top: `${i * 60}px`, zIndex: i + 1, height: "70vh" }}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <Card {...card} />
          </div>
        ))}
      </section>
    </>
  );
};

export default StackingCards;
