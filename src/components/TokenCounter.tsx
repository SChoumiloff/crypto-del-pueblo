import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TokenCounter: React.FC = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const tokenRef = useRef<HTMLSpanElement>(null);
  const holdersRef = useRef<HTMLSpanElement>(null);
  const targetTokens = 21;
  const targetHolders = 1300;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%",
          once: true
        }
      });

      // Animation pour le nombre de tokens
      tl.from(tokenRef.current, {
        textContent: 0,
        duration: 2,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        stagger: {
          each: 0.1,
          onUpdate: function(this: any) {
            this.targets()[0].innerHTML = Number(this.targets()[0].textContent).toLocaleString('fr-FR');
          },
        }
      });

      // Animation pour le nombre de holders
      tl.from(holdersRef.current, {
        textContent: 0,
        duration: 2,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        stagger: {
          each: 0.1,
          onUpdate: function(this: any) {
            this.targets()[0].innerHTML = Number(this.targets()[0].textContent).toLocaleString('fr-FR');
          },
        }
      }, "-=1.5"); // Commence un peu avant la fin de l'animation précédente
    }, counterRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={counterRef} id="tokenomics" className="py-20 bg-gradient-to-b from-[#2C3E50] to-[#2C3E50]/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-righteous text-center text-[#FFE66D] mb-12">
          Tokenomics
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Total Tokens */}
          <div className="token-counter text-center">
            <div className="flex items-center justify-center space-x-4">
              <span 
                ref={tokenRef} 
                className="text-6xl md:text-7xl font-bold text-[#FFE66D]"
              >
                {targetTokens}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-[#4ECDC4]">
                millions
              </span>
            </div>
            <span className="text-xl text-[#4ECDC4] mt-4 block">
              Nombre Total de Jetons
            </span>
          </div>
          {/* Total Holders */}
          <div className="holders-counter text-center">
            <div className="flex items-center justify-center space-x-4">
              <span 
                ref={holdersRef} 
                className="text-6xl md:text-7xl font-bold text-[#FFE66D]"
              >
                {targetHolders}
              </span>
              <span className="text-4xl md:text-5xl font-bold text-[#4ECDC4]">
                détenteurs
              </span>
            </div>
            <span className="text-xl text-[#4ECDC4] mt-4 block">
              Membres de la Communauté
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};