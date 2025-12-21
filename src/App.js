
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import PdfViewer from './PdfViewer';


function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const whatsappNumber = '59177956456';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // imagenes y slider del producto
  const productImages = [
    '/producto1.jpg',
    '/producto2.jpg',
    '/producto3.jpg'
  ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };
  // acaba aqui los productos

  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen bg-white">
          {/* Header/Navbar */}
          <nav className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <div className="w-40 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                    
                    {/* <span className="text-white font-bold text-2xl">Dexocorp</span>  */}
                    
                    <button 
                      onClick={() => scrollToSection('inicio')}
                      className="w-40 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center hover:from-blue-700 hover:to-blue-900 transition cursor-pointer"
                    > 
                    <img 
                      src="DexocorpLogo-white2.svg" 
                    />
                  </button>

                  </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                  <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 font-medium transition">
                    Inicio
                  </button>
                  <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-blue-600 font-medium transition">
                    Nosotros
                  </button>
                  <button onClick={() => scrollToSection('producto')} className="text-gray-700 hover:text-blue-600 font-medium transition">
                    Producto
                  </button>
                  <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-600 font-medium transition">
                    Contacto
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-white border-t">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <button onClick={() => scrollToSection('inicio')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Inicio
                  </button>
                  <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Nosotros
                  </button>
                  <button onClick={() => scrollToSection('producto')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Producto
                  </button>
                  <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                    Contacto
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* Hero Section */}
          <section id="inicio" className="pt-20 bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
              <div className="text-center">
                <p className="text-blue-600 font-semibold mb-4 text-sm md:text-base uppercase tracking-wide">
                  Bienvenidos a Dexocorp
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Innovación y Precisión en<br />Tecnologia Médica
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Innovación tecnológica con sello Boliviano para laboratorios que buscan excelencia
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
                >
                  Realizar Pedido
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="nosotros" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className="text-blue-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                  Pioneros absolutos: Somos los primeros en fabricarlo en Bolivia.
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Compromiso con la Excelencia
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Calidad Garantizada</h3>
                  <p className="text-gray-600">
                    Productos certificados con los más altos estándares internacionales de calidad y precisión.
                  </p>
                </div>

                <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tecnología Avanzada</h3>
                  <p className="text-gray-600">
                    Equipos de última generación para el control de calidad más preciso y confiable.
                  </p>
                </div>

                <div className="text-center p-6 rounded-lg hover:shadow-lg transition">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Soporte Profesional</h3>
                  <p className="text-gray-600">
                    Asesoramiento experto y atención personalizada para todas tus necesidades.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Product Section */}
          <section id="producto" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <p className="text-blue-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                  Nuestro Producto Destacado
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Precise-Ion QC
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  La solución definitiva para el control de calidad en análisis de electrolitos
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-0">
            {/* Product Image - Carousel */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 md:p-12 flex items-center justify-center relative">
                <div className="w-full h-80 md:h-[500px] bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden relative">
                  {/* Imagen actual */}
                  <img 
                    src={productImages[currentImageIndex]} 
                    alt={`Precise-Ion QC - Imagen ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain p-4"
                  />
                  
                  {/* Botón anterior */}
                  <button
                    onClick={previousImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition z-10"
                    aria-label="Imagen anterior"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Botón siguiente */}
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition z-10"
                    aria-label="Imagen siguiente"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Indicadores (puntitos) */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition ${
                          index === currentImageIndex ? 'bg-blue-600 w-8' : 'bg-gray-400'
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

                  {/* Product Info */}
                  <div className="p-8 md:p-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      Precise-Ion QC
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Sistema avanzado de control de calidad para el análisis de electrolitos. Diseñado específicamente para laboratorios clínicos que buscan precisión, confiabilidad y trazabilidad en sus resultados.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Resultados precisos y confiables</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Trazabilidad estandarizada</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Compatible con múltiples equipos y tecnologias</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Basado en certificaciones internacionales</span>
                      </div>
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-500 text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition shadow-lg"
                    >
                      <div className="flex items-center justify-center">
                        <Phone className="mr-2" size={20} />
                        Solicitar por WhatsApp
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <p className="text-blue-600 font-semibold mb-2 text-sm uppercase tracking-wide">
                  Ingeniería con sello boliviano
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  La mente detrás de la tecnología
                </h2>
              </div>
              <div className="flex justify-center">
                <div className="max-w-sm">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-48 flex items-center justify-center">
                      <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center overflow-hidden">
                         <img 
                            src="/gato-corbata.jpg" 
                            alt="André Arevalo" 
                            className="w-full h-full object-contain"
                          />
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">André Arevalo</h3>
                      <p className="text-blue-600 font-semibold mb-4">Fundador y Desarrollador Principal</p>
                      <p className="text-gray-600">
                        La mente detrás de la tecnología Dexocorp. Ingeniero Biomédico dedicado al desarrollo de tecnología nacional especializada en laboratorios clínicos, creando herramientas de alta precisión diseñadas para optimizar el diagnóstico y fortalecer los estándares de calidad en la salud Boliviana.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contacto" className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
                <p className="text-xl text-blue-100">Estamos aquí para ayudarte</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-opacity-20 transition"
                >
                  <Phone className="mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                  <p className="text-blue-100">Consultas y Pedidos</p>
                
                </a>

                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
                  <MapPin className="mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2">Ubicación</h3>
                  <p className="text-blue-100">Cochabamba, Bolivia</p>
                  <p className="text-blue-100">Envios a nivel nacional</p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
                  <Clock className="mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2">Horarios</h3>
                  <p className="text-blue-100">Lunes a Viernes</p>
                  <p className="text-blue-100">9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="w-40 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center mb-1 px-0.2 py-0.2">
                    <img 
                      src="DexocorpLogo-white2.svg" 
                    />
                  </div>
                  <p className="text-gray-400">
                    Innovación y calidad en soluciones para laboratorios clínicos.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
                  <ul className="space-y-2">
                    <li>
                      <button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-white transition">
                        Inicio
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection('nosotros')} className="text-gray-400 hover:text-white transition">
                        Nosotros
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection('producto')} className="text-gray-400 hover:text-white transition">
                        Producto
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollToSection('contacto')} className="text-gray-400 hover:text-white transition">
                        Contacto
                      </button>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-4">Información de Contacto</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <MapPin className="mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Cochabamba, Bolivia</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Lunes a Viernes: 9:00 AM - 1:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; 2026 Dexocorp. Todos los derechos reservados.</p>
              </div>
            </div>
          </footer>

          {/* WhatsApp Floating Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition z-50 hover:scale-110"
            aria-label="Contactar por WhatsApp"
          >
            <Phone size={28} />
            
          </a>
        </div>
      </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Lote" element={<PdfViewer />} />
      </Routes>
    </Router>
  );
}


//Acceder a la página privada:
//La URL será:
//  http://localhost:3000/Lote

//desde el celular: http://192.168.100.17:3000    pdf: http://192.168.100.17:3000/Lote
//cd dexocorp-v2
//npm start