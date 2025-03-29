
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

export interface ServicioProps {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

interface ServicioCardProps {
  servicio: ServicioProps;
  variants: any;
}

const ServicioCard = ({ servicio, variants }: ServicioCardProps) => {
  return (
    <motion.div variants={variants}>
      <Card className="h-full overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={servicio.image} 
            alt={servicio.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 bg-white/90 rounded-full p-2">
            <servicio.icon className="h-6 w-6 text-rigano-700" />
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-medium mb-3">{servicio.title}</h3>
          <p className="text-gray-600">{servicio.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServicioCard;
