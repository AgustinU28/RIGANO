
import { useState } from 'react';
import { 
  Phone, Mail, MapPin, Copy, Check 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactoPage = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
      toast({
        title: "Copiado al portapapeles",
        description: `${text} ha sido copiado al portapapeles.`,
      });
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-rigano-100 text-rigano-800 text-xs font-medium mb-6">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Estamos aquí para <span className="text-gradient">ayudarle</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contáctenos para obtener más información sobre nuestros servicios o para solicitar un presupuesto personalizado.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-gray-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rigano-100 text-rigano-700 mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">291-5053502</p>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="rounded-full"
                    asChild
                  >
                    <a href="https://wa.me/2915053502" target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4 mr-2" />
                      Chatear
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="rounded-full"
                    onClick={() => copyToClipboard('291-5053502', 'phone')}
                  >
                    {copied === 'phone' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rigano-100 text-rigano-700 mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Email</h3>
                <p className="text-gray-600 mb-4">grafica@rigano.com.ar</p>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="rounded-full"
                    asChild
                  >
                    <a href="mailto:grafica@rigano.com.ar">
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar email
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="rounded-full"
                    onClick={() => copyToClipboard('grafica@rigano.com.ar', 'email')}
                  >
                    {copied === 'email' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rigano-100 text-rigano-700 mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Dirección</h3>
                <p className="text-gray-600 mb-4">Don Bosco 186, Bahía Blanca, Buenos Aires, Argentina</p>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="rounded-full"
                    asChild
                  >
                    <a href="https://maps.google.com/?q=Don+Bosco+186+Bahia+Blanca+Argentina" target="_blank" rel="noopener noreferrer">
                      <MapPin className="h-4 w-4 mr-2" />
                      Ver en mapa
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="rounded-full"
                    onClick={() => copyToClipboard('Don Bosco 186, Bahía Blanca, Argentina', 'address')}
                  >
                    {copied === 'address' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section - Now taking full width since we removed the form */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="text-3xl font-serif font-semibold mb-6">Nuestra ubicación</h2>
            <p className="text-gray-600 mb-8">
              Estamos ubicados en el centro de Bahía Blanca, en Don Bosco 186.
            </p>
          </div>
          
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.7698341814256!2d-62.27201687341247!3d-38.717833599493856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcb228749071%3A0x78c0ce498d85d2c6!2sDon%20Bosco%2C%20B8000%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1718221994157!5m2!1ses!2sar"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Ubicación de Rigano Imprenta"
            ></iframe>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium mb-4">Horario de atención</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Lunes a Viernes</span>
                  <span>9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados</span>
                  <span>9:00 - 13:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingos y Feriados</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium mb-4">Medios de pago</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Efectivo</li>
                <li>Transferencia bancaria</li>
                <li>Tarjetas de crédito y débito</li>
                <li>Mercado Pago</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-medium mb-4">Envíos</h3>
              <p className="text-gray-600">
                Realizamos envíos a todo el país. Consulte costos y tiempos de entrega según su ubicación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rigano-700 text-white">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6">
            ¿Necesita una respuesta inmediata?
          </h2>
          <p className="text-white max-w-2xl mx-auto mb-8">
            Contáctenos directamente por WhatsApp para una respuesta más rápida.
          </p>
          <Button 
            size="lg" 
            className="rounded-full border-white/30 hover:bg-rigano-600"
            asChild
          >
            <a 
              href="https://wa.me/2915053502" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              WhatsApp: 291-5053502
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactoPage;
