
import { ArrowRight, Printer, Tag, Book, FileText, Briefcase, PenSquare, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const servicios = [
  {
    id: 1,
    title: 'Impresiones en fotocromía',
    description: 'Impresiones a todo color con calidad fotográfica.',
    icon: Printer,
  },
  {
    id: 2,
    title: 'Etiquetas',
    description: 'Etiquetas personalizadas para productos y paquetes.',
    icon: Tag,
  },
  {
    id: 3,
    title: 'Talonarios',
    description: 'Talonarios para facturas, recibos y más.',
    icon: Book,
  },
  {
    id: 4,
    title: 'Folletos a color',
    description: 'Folletos atractivos para promocionar su negocio.',
    icon: FileText,
  },
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-rigano-100 text-rigano-800 text-xs font-medium mb-8 animate-fade-in">
              Impresión profesional
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-balance mb-6 animate-fade-up">
              Soluciones de impresión <span className="text-gradient">profesionales</span> para cada necesidad
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mb-10 text-balance animate-fade-up" style={{ animationDelay: '0.1s' }}>
              En Rigano Servicios Gráficos combinamos la más alta calidad con tecnología de vanguardia para 
              ofrecerle el servicio de impresión que su negocio merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" className="rounded-full bg-rigano-700 hover:bg-rigano-800" asChild>
                <Link to="/servicios">
                  Ver nuestros servicios <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-rigano-200 hover:bg-rigano-50" asChild>
                <Link to="/contacto">Contáctenos</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Services Preview Section */}
      <section className="section-container bg-white">
        <div className="text-center max-w-screen-lg mx-auto">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos una amplia gama de servicios de impresión para satisfacer todas sus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {servicios.map((servicio, index) => (
            <Card 
              key={servicio.id}
              className="card-hover border border-gray-100 overflow-hidden"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rigano-100 text-rigano-700 mb-4">
                  <servicio.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">{servicio.title}</h3>
                <p className="text-gray-600 mb-4">{servicio.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="rounded-full border-rigano-200 hover:bg-rigano-50" asChild>
            <Link to="/servicios">
              Ver todos los servicios <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block py-1 px-3 rounded-full bg-rigano-100 text-rigano-800 text-xs font-medium mb-6">
                Nuestra experiencia
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6 text-balance">
                Tradición e innovación en cada impresión
              </h2>
              <p className="text-gray-600 mb-6">
                Desde 1985, Rigano Servicios Gráficos ha sido sinónimo de calidad y compromiso en Bahía Blanca. Combinamos nuestra experiencia con las últimas tecnologías para ofrecer resultados excepcionales.
              </p>
              <p className="text-gray-600 mb-8">
                Cada proyecto es tratado con el máximo cuidado y dedicación, asegurando que el resultado final cumpla y supere sus expectativas.
              </p>
              <Button size="lg" className="rounded-full bg-rigano-700 hover:bg-rigano-800" asChild>
                <Link to="/contacto">
                  Contáctenos hoy <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/1a93a19e-2107-45c4-8f56-f0235d5da0a3.png"
                  alt="Imprenta Rigano"
                  className="w-full h-full object-contain bg-white p-4"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-rigano-600 rounded-full opacity-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-rigano-400 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rigano-700 text-white">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6 text-balance">
            Háganos saber cómo podemos ayudarle
          </h2>
          <p className="text-white max-w-2xl mx-auto mb-8 text-balance">
            Estamos listos para colaborar en su próximo proyecto. Contáctenos para conocer más sobre nuestros servicios y obtener un presupuesto personalizado.
          </p>
          <Button size="lg"  className="rounded-full border-white/30 text-white hover:bg-rigano-600" asChild>
            <Link to="/contacto">
              Solicitar presupuesto <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
