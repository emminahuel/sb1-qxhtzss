import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, ArrowDown, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Logo from '@/components/Logo';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex-shrink-0">
            <Logo />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#servicios">
                    Servicios
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#nosotros">
                    Nosotros
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button asChild>
                    <NavigationMenuLink href="#contacto">
                      Contacto
                    </NavigationMenuLink>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute w-full left-0 bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="#servicios">Servicios</a>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="#nosotros">Nosotros</a>
              </Button>
              <Button className="w-full justify-start" asChild>
                <a href="#contacto">Contacto</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-orange-100/50 to-white">
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-in slide-in-from-left duration-500">
            Marketing Digital con{' '}
            <span className="text-orange-500">Resultados Medibles</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-in slide-in-from-left duration-500 delay-150">
            Transformamos ideas en resultados. Estrategias personalizadas para hacer crecer tu negocio en el mundo digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left duration-500 delay-300">
            <Button size="lg" asChild>
              <a href="#servicios" className="gap-2">
                Nuestros Servicios
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contacto" className="gap-2">
                Hablemos
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <Button variant="ghost" size="icon" asChild>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
};

// Services Section Component
const Services = () => {
  const services = [
    {
      title: "Social Media Ads",
      description: "Llevamos tus productos a las personas correctas en el momento adecuado.",
      platforms: ["Facebook", "Instagram", "TikTok", "Pinterest", "Bing"],
      icon: "📱"
    },
    {
      title: "Google Ads",
      description: "Aparece cuando tus clientes te buscan y genera ventas inmediatas.",
      platforms: ["Search", "Display", "Shopping", "Performance MAX"],
      icon: "🎯"
    },
    {
      title: "Email Marketing",
      description: "Mantén el contacto con tus clientes y genera ventas recurrentes.",
      platforms: ["Automatizaciones", "Newsletters", "Fidelización"],
      icon: "📧"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones efectivas para hacer crecer tu presencia digital y aumentar tus ventas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.platforms.map((platform, pIndex) => (
                  <div key={pIndex} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                    {platform}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section Component
const Stats = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Clientes Satisfechos" },
            { number: "95%", label: "Tasa de Retención" },
            { number: "50M+", label: "Inversión Gestionada" },
            { number: "3x", label: "ROI Promedio" },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
    </div>
  );
};

export default App;