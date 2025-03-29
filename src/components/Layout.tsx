
import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import WhatsAppButton from './WhatsAppButton';

export const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'py-3 blur-backdrop' : 'py-5 bg-transparent'
        )}
      >
        <div className="container flex items-center justify-between px-4 mx-auto">
          <Link to="/" className="flex items-center z-10">
            <img 
              src="/lovable-uploads/1a93a19e-2107-45c4-8f56-f0235d5da0a3.png" 
              alt="Rigano Servicios Gráficos" 
              className="h-12 sm:h-14"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'navbar-item',
                  location.pathname === item.path && 'active text-rigano-700'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="ml-4 flex items-center gap-2 rounded-full bg-rigano-700 hover:bg-rigano-800"
              asChild
            >
              <a href="https://wa.me/2915053502" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                <span>291-5053502</span>
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-10 p-2 text-rigano-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={cn(
              'fixed inset-0 z-0 flex flex-col items-center justify-center bg-white bg-opacity-95 transition-all duration-300 md:hidden',
              mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            )}
          >
            <nav className="flex flex-col items-center space-y-6 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'text-xl font-medium',
                    location.pathname === item.path
                      ? 'text-rigano-700'
                      : 'text-gray-800 hover:text-rigano-700'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                size="lg" 
                className="mt-4 flex items-center gap-2 rounded-full bg-rigano-700 hover:bg-rigano-800"
                asChild
              >
                <a href="https://wa.me/2915053502" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  <span>291-5053502</span>
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img 
                src="/lovable-uploads/1a93a19e-2107-45c4-8f56-f0235d5da0a3.png" 
                alt="Rigano Servicios Gráficos" 
                className="h-12 mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
              <p className="text-gray-600 mt-4">
                Soluciones de impresión profesionales para todas sus necesidades.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className="text-gray-600 hover:text-rigano-700 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Contacto</h3>
              <address className="not-italic text-gray-600 space-y-2">
                <p>Don Bosco 186</p>
                <p>Bahía Blanca, Buenos Aires</p>
                <p>Argentina</p>
                <a 
                  href="mailto:grafica@rigano.com.ar" 
                  className="block mt-2 hover:text-rigano-700 transition-colors"
                >
                  grafica@rigano.com.ar
                </a>
                <a 
                  href="https://wa.me/2915053502" 
                  className="block mt-2 hover:text-rigano-700 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  291-5053502
                </a>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Rigano Servicios Gráficos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};
