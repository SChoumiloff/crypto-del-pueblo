import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wallet, Search, CreditCard } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Wallet,
    title: "Connectez votre portefeuille",
    description: "Visitez Unisat.io et connectez votre portefeuille Bitcoin compatible."
  },
  {
    icon: Search,
    title: "Trouvez Crypto del Pueblo",
    description: "Recherchez 'Crypto del Pueblo' dans la section RUNE."
  },
  {
    icon: CreditCard,
    title: "Effectuez l'achat",
    description: "Choisissez le montant et confirmez la transaction."
  }
];

export const HowToBuy: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="how-to-buy" className="py-20 bg-[#2C3E50]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-righteous text-center text-[#FFE66D] mb-12">
          Comment Acheter
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="step-card bg-[#2C3E50]/50 p-8 rounded-xl border border-[#4ECDC4]/20">
              <step.icon className="w-12 h-12 text-[#4ECDC4] mb-4 mx-auto" />
              <h3 className="text-xl font-righteous text-[#FFE66D] mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-white text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};