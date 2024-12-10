import React from 'react';

export const YouTubePlayer: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#2C3E50] to-[#2C3E50]/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-righteous text-center text-[#FFE66D] mb-12">
          Découvrez Notre Projet
        </h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            className="w-full h-[500px] rounded-xl shadow-2xl"
            src="https://www.youtube.com/embed/S3HwaXkPuaY"
            title="Présentation Crypto del Pueblo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};