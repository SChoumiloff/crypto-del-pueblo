import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CheLogo } from './CheLogo';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen bg-gradient-to-br from-[#2C3E50] to-[#2C3E50]/80 pt-10">
      <div className="container mx-auto px-4 py-20">
        <div className="hero-content text-center">
          <CheLogo className="mx-auto w-96 h-96 mb-12" />
          <h1 className="text-5xl md:text-7xl font-righteous text-white mb-6">
            Crypto del Pueblo
          </h1>
          <p className="text-xl md:text-2xl text-[#4ECDC4] mb-12 max-w-2xl mx-auto">
            Le Token Communautaire pour S'Amuser Ensemble
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white font-bold py-4 px-8 rounded-full transform transition-all hover:scale-105 pulse-animation">
              <a href='https://unisat.io/runes/market?tick=CRYPTODELPUEBLO' target='_blank'>Acheter sur Unisat</a>
            </button>
            <button className="bg-transparent border-2 border-[#4ECDC4] text-[#4ECDC4] font-bold py-4 px-8 rounded-full hover:bg-[#4ECDC4]/10 transition-colors">
              Découvrir Notre Histoire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};