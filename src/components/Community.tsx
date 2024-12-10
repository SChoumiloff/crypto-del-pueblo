import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, BookOpen, Rocket, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Users,
    title: "Diversité des membres",
    description: "Une communauté inclusive accueillant experts et novices en cryptomonnaies"
  },
  {
    icon: BookOpen,
    title: "Apprentissage mutuel",
    description: "Partage de connaissances et ressources éducatives entre membres"
  },
  {
    icon: Rocket,
    title: "Innovation collective",
    description: "Exploration de nouvelles idées et projets cryptos ensemble"
  },
  {
    icon: Heart,
    title: "Esprit solidaire",
    description: "Entraide et soutien mutuel au sein de la communauté"
  }
];

export const Community: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cards = gsap.utils.toArray('.community-card');
    
    const ctx = gsap.context(() => {
      // Animate title and description
      gsap.from('.community-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animate cards
      cards.forEach((card, index) => {
        gsap.from(card as Element, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Animate community image section
      gsap.from(imageRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="community" className="py-20 bg-gradient-to-b from-[#2C3E50] to-[#2C3E50]/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 community-title">
          <h2 className="text-4xl font-righteous text-[#FFE66D] mb-6">
            Notre Communauté
          </h2>
          <p className="text-[#4ECDC4] text-xl max-w-2xl mx-auto">
            Rejoignez une communauté dynamique et inclusive de passionnés de cryptomonnaies
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="community-card bg-[#2C3E50]/50 p-8 rounded-xl border border-[#4ECDC4]/20 hover:border-[#4ECDC4] transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-[#4ECDC4] mb-4 mx-auto" />
              <h3 className="text-xl font-righteous text-[#FFE66D] mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-white text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div ref={imageRef} className="bg-[#2C3E50]/30 p-8 w-full rounded-xl border border-[#4ECDC4]/20">
          <div className="flex justify-between items-center w-full">
            <div className="w-2/3 pr-8">
              <h3 className="text-2xl font-righteous text-[#FFE66D] mb-6">
                Rejoignez le mouvement
              </h3>
              <p className="text-white mb-6">
                Initiée par "Crypto pour Tous", notre communauté valorise l'accessibilité, 
                l'éducation et le partage d'expériences dans l'univers des actifs numériques.
              </p>
              <button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white font-bold py-3 px-6 rounded-full transform transition-all hover:scale-105">
                <a href="https://www.youtube.com/@cryptopourtous75" target='_blank'>Rejoindre la communauté</a>
              </button>
            </div>
            <div className="w-1/3 flex justify-end">
              <img
                src="https://yt3.googleusercontent.com/-HSotrMLiI_RgVDrmWah86StuKDiYKfrHkj26rX2CpXrZ9ef8Gl5HHuz6UkHmQm696FkHqaJ3Q=s160-c-k-c0x00ffffff-no-rj"
                alt="Community gathering"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};