
import React from 'react';
import HeroSection from '@/components/servicios/HeroSection';
import ServiciosGrid from '@/components/servicios/ServiciosGrid';
import ProcessSection from '@/components/servicios/ProcessSection';
import CTASection from '@/components/servicios/CTASection';

const ServiciosPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiciosGrid />
      <ProcessSection />
      <CTASection />
    </div>
  );
};

export default ServiciosPage;
