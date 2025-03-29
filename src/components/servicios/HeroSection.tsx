
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-rigano-100 text-rigano-800 text-xs font-medium mb-6">
            Nuestros servicios
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Servicios de impresión <span className="text-gradient">profesionales</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra nuestra amplia gama de servicios de impresión diseñados para satisfacer todas sus necesidades, desde impresiones en pequeño formato hasta grandes proyectos.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
