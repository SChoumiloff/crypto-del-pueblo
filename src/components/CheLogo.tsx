import React from 'react';

export const CheLogo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative group ${className}`}>
    <img 
      src="/Che-Guevara-PNG-Picture.png" 
      alt="Che Guevara" 
      className="w-full h-full object-contain che-color-shift hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#2C3E50]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);