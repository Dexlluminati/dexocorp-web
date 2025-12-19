import React, { useState, useEffect } from 'react';
import { Printer, Download, Home, FileText, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PdfViewer() {
  const navigate = useNavigate();
  const [showMobileAlert, setShowMobileAlert] = useState(false);
  
  // Cambia esta ruta por la ruta de tu PDF
  const pdfUrl = "/Lot1828.pdf";

  // Detectar si es móvil
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      setShowMobileAlert(true);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'documento.pdf';
    link.click();
  };

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mensaje flotante para móviles */}
      {showMobileAlert && (
        <div className="fixed bottom-4 left-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-2xl z-50 animate-slide-up md:hidden">
          <button
            onClick={() => setShowMobileAlert(false)}
            className="absolute top-2 right-2 text-white hover:text-gray-200"
          >
            <X size={20} />
          </button>
          <div className="pr-6">
            <p className="font-semibold mb-2 flex items-center gap-2">
              <FileText size={20} />
              💡 Tip para visualización completa
            </p>
            <p className="text-sm">
            Para leer el PDF completo, <strong>descargue el documento</strong> o haga clic en <strong>"Abrir"</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Header con botones - Responsive */}
      <div className="bg-white shadow-md p-3 md:p-4 print:hidden sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-3 md:hidden">
            <button
              onClick={() => navigate('/')}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full"
            >
              <Home size={20} />
              <span className="font-medium">Volver al Inicio</span>
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleOpenInNewTab}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm"
              >
                <FileText size={18} />
                <span>Abrir</span>
              </button>
              
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm"
              >
                <Download size={18} />
                <span>Descargar</span>
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Home size={20} />
              Volver al Inicio
            </button>
            
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                <Printer size={20} />
                Imprimir
              </button>
              
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                <Download size={20} />
                Descargar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Visor de PDF - Optimizado para móvil */}
      <div className="w-full p-2 md:p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="block">
            <iframe
              src={`${pdfUrl}#view=FitH`}
              className="w-full border-0"
              style={{ 
                height: 'calc(100vh - 140px)',
                minHeight: '500px'
              }}
              title="Visualizador de PDF"
              allow="fullscreen"
            />
          </div>
        </div>
      </div>

      {/* Agregar CSS para la animación */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}