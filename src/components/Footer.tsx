import React from 'react';
import { Twitter, Youtube, Github } from 'lucide-react';
import { CheLogo } from './CheLogo';
import toast from 'react-hot-toast';

export const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('satsAddress') as HTMLInputElement).value;

    if (email) {
      toast.success('Adresse enregistrée avec succès!', {
        style: {
          background: '#2C3E50',
          color: '#FFE66D',
          border: '1px solid #4ECDC4',
        },
        iconTheme: {
          primary: '#4ECDC4',
          secondary: '#2C3E50',
        },
      });
      form.reset();
    } else {
      toast.error('Veuillez entrer une adresse valide', {
        style: {
          background: '#2C3E50',
          color: '#FFE66D',
          border: '1px solid #4ECDC4',
        },
        iconTheme: {
          primary: '#FF6B6B',
          secondary: '#2C3E50',
        },
      });
    }
  };

  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <CheLogo className="w-16 h-16 text-[#FFE66D] mb-4" />
            <h3 className="text-xl font-righteous text-[#FFE66D]">
              Crypto del Pueblo
            </h3>
          </div>
          
          <div>
            <h4 className="text-lg font-righteous text-[#4ECDC4] mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-[#4ECDC4] transition-colors">À Propos</a></li>
              <li><a href="#tokenomics" className="hover:text-[#4ECDC4] transition-colors">Tokenomics</a></li>
              <li><a href="#how-to-buy" className="hover:text-[#4ECDC4] transition-colors">Comment Acheter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-righteous text-[#4ECDC4] mb-4">Communauté</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/Cryptodelpueblo" target='_blank' className="text-white hover:text-[#4ECDC4] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.youtube.com/@cryptopourtous75" target='_blank' className="text-white hover:text-[#4ECDC4] transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#4ECDC4] transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-righteous text-[#4ECDC4] mb-4">Airdrop</h4>
            <form className="flex" onSubmit={handleSubmit}>
              <input
                type="text"
                name="satsAddress"
                placeholder="Votre adresse Sats"
                className="bg-[#2C3E50] border border-[#4ECDC4] rounded-l px-4 py-2 focus:outline-none focus:border-[#FFE66D]"
              />
              <button 
                type="submit"
                className="bg-[#4ECDC4] text-[#2C3E50] px-4 py-2 rounded-r hover:bg-[#FFE66D] transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#4ECDC4]/20 text-center">
          <p className="text-sm mb-4 text-[#FF6B6B] max-w-2xl mx-auto">
            Avertissement : Crypto del Pueblo est un token expérimental créé dans un but communautaire et ludique. 
            Il n'a pas vocation à générer des profits financiers.
          </p>
          <p className="text-sm text-white">
            © 2024 Crypto del Pueblo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};