
import React from 'react';

const ProcessStep = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="text-center">
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-rigano-100 text-rigano-700 mx-auto mb-6">
      <span className="text-xl font-bold">{number}</span>
    </div>
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-gray-600">
      {description}
    </p>
  </div>
);

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Consulta",
      description: "Discutimos sus necesidades y requisitos específicos para entender completamente su proyecto."
    },
    {
      number: "2",
      title: "Producción",
      description: "Utilizamos tecnología de vanguardia y materiales de alta calidad para producir su proyecto."
    },
    {
      number: "3",
      title: "Entrega",
      description: "Entregamos el producto final, asegurándonos de que cumpla con sus expectativas y estándares de calidad."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-rigano-100 text-rigano-800 text-xs font-medium mb-6">
            Nuestro proceso
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Cómo trabajamos
          </h2>
          <p className="text-gray-600">
            Nuestro proceso de trabajo está diseñado para garantizar resultados excepcionales y una experiencia sin complicaciones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
