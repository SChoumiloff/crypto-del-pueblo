import React, { useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CheLogo } from './CheLogo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnResize);
    return () => window.removeEventListener('resize', closeMenuOnResize);
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full bg-[#2C3E50]/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <CheLogo className="w-8 h-8 text-[#FFE66D]" />
            <span className="text-[#FFE66D] text-2xl font-righteous">
              Crypto del Pueblo
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLinks onNavigate={handleScroll} />
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <NavLinks mobile onNavigate={handleScroll} />
          </div>
        )}
      </nav>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile, onNavigate }) => {
  const baseClasses = mobile
    ? "flex flex-col space-y-4"
    : "flex space-x-8";

  const links = [
    { href: "about", label: "À Propos" },
    { href: "tokenomics", label: "Tokenomics" },
    { href: "how-to-buy", label: "Comment Acheter" },
    { href: "community", label: "Communauté" }
  ];

  return (
    <div className={baseClasses}>
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={`#${href}`}
          className="text-white hover:text-[#4ECDC4] transition-colors"
          onClick={(e) => onNavigate(e, href)}
        >
          {label}
        </a>
      ))}
    </div>
  );
};