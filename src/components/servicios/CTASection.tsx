
import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-rigano-700 text-white">
      <div className="container max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
          ¿Listo para comenzar su proyecto?
        </h2>
        <p className="text-rigano-100 max-w-2xl mx-auto mb-8">
          Contáctenos hoy mismo para discutir sus necesidades específicas y obtener un presupuesto personalizado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/2915053502" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full bg-white text-rigano-700 hover:bg-gray-100"
          >
            WhatsApp: 291-5053502
          </a>
          <a 
            href="mailto:grafica@rigano.com.ar"
            className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-base font-medium rounded-full text-white hover:bg-rigano-600"
          >
            Email: grafica@rigano.com.ar
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
