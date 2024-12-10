import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheLogo } from './CheLogo';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-b from-[#2C3E50] to-[#2C3E50]/90">
      <div className="container mx-auto px-4">
        <div className="about-content grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-righteous text-[#FFE66D] mb-6">
              À Propos de Crypto del Pueblo
            </h2>
            <p className="text-[#4ECDC4] text-lg mb-6">
              Crypto del Pueblo est un token créé pour le plaisir et la camaraderie. 
              Sans prétention, il unit une communauté désireuse de partager des moments 
              légers et amusants dans l'univers des cryptomonnaies.
            </p>
            <p className="text-white text-lg">
              Initié par "Crypto pour Tous", ce projet RUNE sur Bitcoin vise à rassembler 
              une communauté autour d'un concept ludique, sans prétention technique.
            </p>
          </div>
          <div className="relative group">
            <CheLogo className="w-[500px] h-[500px] mx-auto che-animation" />
          </div>
        </div>
      </div>
    </section>
  );
};