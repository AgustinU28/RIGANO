
import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Tag, Book, FileText, Briefcase, PenSquare, Map, FileImage } from 'lucide-react';
import ServicioCard, { ServicioProps } from './ServicioCard';

const servicios: ServicioProps[] = [
  {
    id: 1,
    title: 'Impresiones en fotocromía',
    description: 'Impresiones a todo color con la más alta calidad y definición. Perfectas para catálogos, revistas y material promocional que requiera imágenes nítidas y colores vibrantes.',
    icon: Printer,
    image: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?q=80&w=1000'
  },
  {
    id: 2,
    title: 'Etiquetas',
    description: 'Etiquetas personalizadas de alta calidad para productos, paquetes y envíos. Disponibles en diferentes materiales y acabados para satisfacer sus necesidades específicas.',
    icon: Tag,
    image: 'https://www.avery.com.ar/wp-content/uploads/2018/07/13448-Etiquetas-Adhesivas-Disen%CC%83o-Tropical-Avery-Argentina.jpg'
  },
  {
    id: 3,
    title: 'Talonarios',
    description: 'Talonarios para facturas, recibos, órdenes de compra y más. Disponibles en formato autocopiativo con numeración personalizada y diferentes tamaños.',
    icon: Book,
    image: 'https://http2.mlstatic.com/D_NQ_NP_792087-MLA79582146992_102024-O.webp'
  },
  {
    id: 4,
    title: 'Folletos a color',
    description: 'Folletos y brochures a todo color para promocionar su negocio. Diseñados para captar la atención y comunicar su mensaje de manera efectiva.',
    icon: FileText,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8N0T8_2XVJOd8p9iggKTeiXyjjJ1fy8Raw&s'
  },
  {
    id: 5,
    title: 'Papelería comercial',
    description: 'Tarjetas de presentación, hojas membretadas, sobres y más. Toda la papelería necesaria para dar una imagen profesional a su empresa.',
    icon: Briefcase,
    image: 'https://kfunepublicidad.com/wp-content/uploads/2023/11/Servicio4.jpg'
  },
  {
    id: 6,
    title: 'Venta de papel',
    description: 'Amplia variedad de papeles en diferentes gramajes, texturas y tamaños para todo tipo de proyectos de impresión.',
    icon: PenSquare,
    image: 'https://cdn.dataprint.com.ar/wp-content/uploads/2024/11/kit-10-resmas-caja-papel-obra-A4-Boreal-75-gramos-500-hojas-blanco.jpg'
  },
  {
    id: 7,
    title: 'Impresión de planos',
    description: 'Impresión de planos arquitectónicos, mapas y diagramas en diferentes tamaños y formatos, con la mayor precisión y calidad.',
    icon: Map,
    image: 'https://dical.es/modules/ph_simpleblog/covers/41.jpg'
  },
];

const ServiciosGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicios.map((servicio) => (
            <ServicioCard 
              key={servicio.id} 
              servicio={servicio} 
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiciosGrid;
