"use client";

import { useState } from "react";
import { 
  Hammer, 
  PaintBucket, 
  Wrench, 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Menu, 
  X,
  Clock,
  Shield,
  Award,
  Users
} from "lucide-react";

// Componente de Navegación
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-heading text-secondary">ConstructPro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="font-medium hover:text-primary transition-colors">Inicio</a>
            <a href="#servicios" className="font-medium hover:text-primary transition-colors">Servicios</a>
            <a href="#proyectos" className="font-medium hover:text-primary transition-colors">Proyectos</a>
            <a href="#contacto" className="font-medium hover:text-primary transition-colors">Contacto</a>
            <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">
              Cotización Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="font-medium hover:text-primary transition-colors">Inicio</a>
              <a href="#servicios" className="font-medium hover:text-primary transition-colors">Servicios</a>
              <a href="#proyectos" className="font-medium hover:text-primary transition-colors">Proyectos</a>
              <a href="#contacto" className="font-medium hover:text-primary transition-colors">Contacto</a>
              <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors w-full">
                Cotización Gratis
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Componente de Hero
const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-r from-secondary to-gray-900 text-white">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Construimos tus <span className="text-primary">sueños</span> en realidad
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Servicios profesionales de construcción, albañilería, pintura y remodelación. 
            Más de 15 años transformando espacios con calidad y compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors text-lg">
              Solicitar Presupuesto
            </button>
            <button className="bg-white text-secondary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg">
              Ver Proyectos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente de Servicios
const ServicesSection = () => {
  const services = [
    {
      icon: <Hammer className="h-12 w-12" />,
      title: "Albañilería",
      description: "Construcción, demolición, cimentación y trabajos de mampostería profesional.",
      features: ["Cimientos", "Muros", "Losas", "Reparaciones"]
    },
    {
      icon: <PaintBucket className="h-12 w-12" />,
      title: "Pintura",
      description: "Pintura interior y exterior, preparación de superficies y acabados especiales.",
      features: ["Interior", "Exterior", "Texturizados", "Impermeabilización"]
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Remodelación",
      description: "Transformación completa de espacios, baños, cocinas y áreas comerciales.",
      features: ["Cocinas", "Baños", "Oficinas", "Locales comerciales"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales en construcción con los más altos estándares de calidad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-primary mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold font-heading text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Ventajas
const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantía",
      description: "Todos nuestros trabajos incluyen garantía por escrito"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Entrega a Tiempo",
      description: "Cumplimos con los plazos establecidos"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Calidad Certificada",
      description: "Materiales de primera calidad y mano de obra especializada"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Equipo Profesional",
      description: "Personal capacitado y con experiencia"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary">{advantage.icon}</div>
              </div>
              <h3 className="text-xl font-bold font-heading text-secondary mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Contacto
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Contáctanos
            </h2>
            <p className="text-gray-300 mb-8">
              Solicita una cotización gratuita o agenda una visita de evaluación sin compromiso.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300">info@constructpro.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-gray-300">Av. Construcción 123, Ciudad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Servicio de interés</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="albanileria">Albañilería</option>
                  <option value="pintura">Pintura</option>
                  <option value="remodelacion">Remodelación</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Describe tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente de Footer
const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-heading">ConstructPro</span>
            </div>
            <p className="text-gray-400">
              Transformando espacios con calidad y profesionalismo desde 2008.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Albañilería</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pintura</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Remodelación</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Construcción</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Enlaces</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#proyectos" className="hover:text-primary transition-colors">Proyectos</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Horario</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes: 8:00 - 18:00</li>
              <li>Sábados: 9:00 - 14:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ConstructPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// Componente Principal
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}