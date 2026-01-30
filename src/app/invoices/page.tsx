'use client';

import { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';

interface ServiceItem {
  id: string;
  name: string;
  price: number;
}

interface InvoiceData {
  clientName: string;
  clientPhone: string;
  clientAddress: string;
  services: ServiceItem[];
  notes: string;
}

// Pre-loaded services with default prices (editable)
const DEFAULT_SERVICES = [
  { name: 'Limpieza de Oficina', nameEn: 'Office Cleaning', defaultPrice: 150 },
  { name: 'Limpieza de Casa', nameEn: 'House Cleaning', defaultPrice: 120 },
  { name: 'Limpieza Profunda', nameEn: 'Deep Cleaning', defaultPrice: 200 },
  { name: 'Airbnb / Alquiler', nameEn: 'Airbnb / Vacation Rental', defaultPrice: 100 },
  { name: 'Limpieza de Restaurante', nameEn: 'Restaurant Cleaning', defaultPrice: 250 },
  { name: 'Pisos (Pulir/Encerar)', nameEn: 'Floor Care (Buff/Wax)', defaultPrice: 175 },
  { name: 'Limpieza de Evento', nameEn: 'Event Cleanup', defaultPrice: 200 },
  { name: 'Pressure Washing', nameEn: 'Pressure Washing', defaultPrice: 150 },
  { name: 'Mudanza (Move-in/out)', nameEn: 'Move-in/Move-out', defaultPrice: 180 },
  { name: 'Escuela / Guarderia', nameEn: 'School / Daycare', defaultPrice: 200 },
];

export default function InvoicesPage() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    clientName: '',
    clientPhone: '',
    clientAddress: '',
    services: [],
    notes: '',
  });

  const [customServiceName, setCustomServiceName] = useState('');
  const [customServicePrice, setCustomServicePrice] = useState('');
  const [showToast, setShowToast] = useState(false);

  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const res = await fetch('/api/invoices');
      const data = await res.json();
      if (data.error) {
        setErrorMessage(data.error);
      } else if (Array.isArray(data)) {
        setHistory(data);
      }
    } catch (err: any) {
      console.error('Failed to fetch history', err);
      setErrorMessage('Error de conexión con el servidor');
    } finally {
      setLoading(false);
    }
  };

  const saveToDatabase = async () => {
    setSaving(true);
    try {
      await fetch('/api/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...invoiceData,
          total: calculateTotal()
        }),
      });
      fetchHistory(); // Refresh list
    } catch (err) {
      console.error('Failed to save invoice', err);
    } finally {
      setSaving(false);
    }
  };

  // Add a pre-defined service
  const addService = (serviceName: string, serviceNameEn: string, defaultPrice: number) => {
    const newService: ServiceItem = {
      id: Date.now().toString(),
      name: serviceNameEn, // Use English name for the invoice
      price: defaultPrice,
    };
    setInvoiceData(prev => ({
      ...prev,
      services: [...prev.services, newService],
    }));
    
    // Show toast for feedback
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Add custom service
  const addCustomService = () => {
    if (!customServiceName.trim()) return;
    const newService: ServiceItem = {
      id: Date.now().toString(),
      name: customServiceName,
      price: parseFloat(customServicePrice) || 0,
    };
    setInvoiceData(prev => ({
      ...prev,
      services: [...prev.services, newService],
    }));
    setCustomServiceName('');
    setCustomServicePrice('');
  };

  // Update service price
  const updateServicePrice = (id: string, price: number) => {
    setInvoiceData(prev => ({
      ...prev,
      services: prev.services.map(s =>
        s.id === id ? { ...s, price } : s
      ),
    }));
  };

  // Remove service
  const removeService = (id: string) => {
    setInvoiceData(prev => ({
      ...prev,
      services: prev.services.filter(s => s.id !== id),
    }));
  };

  // Calculate total
  const calculateTotal = () => {
    return invoiceData.services.reduce((sum, s) => sum + s.price, 0);
  };

  // Generate PDF (English)
  const generatePDF = () => {
    if (!invoiceData.clientName.trim()) {
      alert('Por favor escribe el nombre del cliente');
      return;
    }
    if (invoiceData.services.length === 0) {
      alert('Por favor agrega al menos un servicio');
      return;
    }

    const doc = new jsPDF();
    const invoiceNumber = `INV-${Date.now()}`;
    const today = new Date().toLocaleDateString('en-US');

    // Load Logo
    const logoImg = new window.Image();
    logoImg.src = '/logo-new.png';

    logoImg.onload = () => {
      // Company Header - Logo
      doc.addImage(logoImg, 'PNG', 20, 15, 50, 20);

      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text('Maintenance Services LLC', 20, 42);
      doc.text('8731 NW 16 Ave, Miami, FL 33147', 20, 48);
      doc.text('Phone: (305) 282-2499', 20, 54);
      doc.text('Email: ncjmlandscapeandcleaning@gmail.com', 20, 60);

      // Invoice Title
      doc.setFontSize(32);
      doc.setTextColor(30, 41, 59);
      doc.text('INVOICE', 140, 30);

      // Invoice Details
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Invoice #: ${invoiceNumber}`, 140, 42);
      doc.text(`Date: ${today}`, 140, 49);

      // Divider line
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.5);
      doc.line(20, 65, 190, 65);

      // Bill To
      doc.setFontSize(11);
      doc.setTextColor(100, 100, 100);
      doc.text('BILL TO:', 20, 75);

      doc.setFontSize(14);
      doc.setTextColor(30, 41, 59);
      doc.text(invoiceData.clientName, 20, 84);

      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      if (invoiceData.clientPhone) {
        doc.text(`Phone: ${invoiceData.clientPhone}`, 20, 92);
      }
      if (invoiceData.clientAddress) {
        doc.text(invoiceData.clientAddress, 20, 100);
      }

      // Services Table
      let yPos = 120;

      // Table Header
      doc.setFillColor(13, 148, 136);
      doc.rect(20, yPos - 6, 170, 10, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(11);
      doc.text('Service', 25, yPos);
      doc.text('Amount', 165, yPos);

      yPos += 12;

      // Table Rows
      doc.setTextColor(50, 50, 50);
      doc.setFontSize(11);
      invoiceData.services.forEach(service => {
        // Alternate row background
        doc.setFillColor(248, 250, 252);
        doc.rect(20, yPos - 5, 170, 10, 'F');

        doc.setTextColor(50, 50, 50);
        doc.text(service.name, 25, yPos);
        doc.text(`$${service.price.toFixed(2)}`, 165, yPos);
        yPos += 12;
      });

      // Total
      yPos += 8;
      doc.setDrawColor(13, 148, 136);
      doc.setLineWidth(1);
      doc.line(120, yPos - 5, 190, yPos - 5);

      doc.setFontSize(14);
      doc.setTextColor(13, 148, 136);
      doc.text('TOTAL:', 130, yPos + 5);
      doc.setFontSize(16);
      doc.text(`$${calculateTotal().toFixed(2)}`, 162, yPos + 5);

      // Notes
      if (invoiceData.notes) {
        yPos += 25;
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text('Notes:', 20, yPos);
        doc.setTextColor(70, 70, 70);
        const splitNotes = doc.splitTextToSize(invoiceData.notes, 170);
        doc.text(splitNotes, 20, yPos + 7);
      }

      // Footer
      doc.setFontSize(10);
      doc.setTextColor(150, 150, 150);
      doc.text('Thank you for your business!', 105, 275, { align: 'center' });
      doc.setFontSize(8);
      doc.text('Family-owned business serving Miami-Dade and Broward Counties', 105, 282, { align: 'center' });

      // Save
      const fileName = `Invoice-${invoiceData.clientName.replace(/\s+/g, '-')}-${invoiceNumber}.pdf`;
      doc.save(fileName);

      // Save to Database automatically
      saveToDatabase();
    };
  };

  // Clear form
  const clearForm = () => {
    if (confirm('¿Borrar todo y empezar de nuevo?')) {
      setInvoiceData({
        clientName: '',
        clientPhone: '',
        clientAddress: '',
        services: [],
        notes: '',
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 pt-20 pb-24 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Floating Feedback Toast */}
        {showToast && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-teal-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold animate-bounce flex items-center gap-2">
            <span>✅</span> ¡Servicio Agregado!
          </div>
        )}

        {/* Mobile Sticky Bar */}
        {invoiceData.services.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] flex justify-between items-center animate-slide-up">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase">Total Actual</div>
              <div className="text-2xl font-black text-teal-600">${calculateTotal().toFixed(2)}</div>
            </div>
            <button 
              onClick={() => {
                const element = document.getElementById('selected-services-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-teal-600 text-white font-bold rounded-xl active:scale-95 transition-transform"
            >
              Revisar 📋
            </button>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
            Crear Factura
          </h1>
          <p className="text-slate-500 text-lg">Toca los servicios para agregarlos</p>
        </div>

        {/* Client Info - Simple */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
            <span className="text-2xl">👤</span> Cliente
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-2">
                Nombre del Cliente *
              </label>
              <input
                type="text"
                value={invoiceData.clientName}
                onChange={(e) => setInvoiceData(prev => ({ ...prev, clientName: e.target.value }))}
                placeholder="Escribe el nombre..."
                className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                value={invoiceData.clientPhone}
                onChange={(e) => setInvoiceData(prev => ({ ...prev, clientPhone: e.target.value }))}
                placeholder="(305) 555-1234"
                className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-600 mb-2">
                Dirección (opcional)
              </label>
              <input
                type="text"
                value={invoiceData.clientAddress}
                onChange={(e) => setInvoiceData(prev => ({ ...prev, clientAddress: e.target.value }))}
                placeholder="123 Main St, Miami FL 33101"
                className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Quick Service Buttons */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
            <span className="text-2xl">🧹</span> Servicios - Toca para Agregar
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {DEFAULT_SERVICES.map((service, index) => (
              <button
                key={index}
                onClick={() => addService(service.name, service.nameEn, service.defaultPrice)}
                className="p-4 bg-slate-50 hover:bg-teal-50 border-2 border-slate-200 hover:border-teal-400 rounded-xl transition-all duration-200 text-left active:scale-95"
              >
                <div className="font-semibold text-slate-700 text-sm sm:text-base">
                  {service.name}
                </div>
                <div className="text-teal-600 font-bold text-lg">
                  ${service.defaultPrice}
                </div>
              </button>
            ))}
          </div>

          {/* Custom Service */}
          <div className="mt-6 pt-6 border-t-2 border-slate-100">
            <p className="text-sm font-semibold text-slate-600 mb-3">Agregar otro servicio:</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={customServiceName}
                onChange={(e) => setCustomServiceName(e.target.value)}
                placeholder="Nombre del servicio"
                className="flex-1 px-3 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none"
              />
              <input
                type="number"
                value={customServicePrice}
                onChange={(e) => setCustomServicePrice(e.target.value)}
                placeholder="$"
                className="w-24 px-3 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none"
              />
              <button
                onClick={addCustomService}
                className="px-4 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition-colors active:scale-95"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Selected Services */}
        {invoiceData.services.length > 0 && (
          <div id="selected-services-section" className="bg-white rounded-2xl shadow-lg p-6 mb-6 scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">📋</span> Servicios Agregados
            </h2>

            <div className="space-y-3">
              {invoiceData.services.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center gap-3 p-4 bg-teal-50 border-2 border-teal-200 rounded-xl"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-slate-700">{service.name}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">$</span>
                    <input
                      type="number"
                      value={service.price}
                      onChange={(e) => updateServicePrice(service.id, parseFloat(e.target.value) || 0)}
                      className="w-24 px-3 py-2 text-lg font-bold text-teal-700 border-2 border-teal-300 rounded-lg focus:border-teal-500 focus:outline-none text-center"
                    />
                  </div>
                  <button
                    onClick={() => removeService(service.id)}
                    className="w-10 h-10 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold transition-colors active:scale-95"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-6 pt-4 border-t-2 border-teal-200">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-slate-700">TOTAL:</span>
                <span className="text-3xl font-bold text-teal-600">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Notes */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
            <span className="text-2xl">📝</span> Notas (opcional)
          </h2>
          <textarea
            value={invoiceData.notes}
            onChange={(e) => setInvoiceData(prev => ({ ...prev, notes: e.target.value }))}
            placeholder="Notas adicionales para el cliente..."
            rows={3}
            className="w-full px-4 py-4 text-lg border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={clearForm}
            className="flex-1 py-5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-lg rounded-2xl transition-colors active:scale-98"
          >
            🗑️ Borrar Todo
          </button>
          <button
            onClick={generatePDF}
            className="flex-[2] py-5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-98"
          >
            📄 Descargar PDF
          </button>
        </div>

        {/* Help Text */}
        <p className="text-center text-slate-400 text-sm mt-6">
          La factura se descargará en inglés para tus clientes
        </p>

        {/* History Section */}
        <div className="mt-16 pt-10 border-t-2 border-slate-200">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Historial de Facturas</h2>
              <p className="text-slate-500">Últimas 50 facturas guardadas</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-slate-400 uppercase">Ganancia Total</div>
              <div className="text-2xl font-black text-teal-600">
                ${history.reduce((sum, inv) => sum + parseFloat(inv.total), 0).toFixed(2)}
              </div>
            </div>
          </div>

          {errorMessage ? (
            <div className="bg-red-50 text-red-600 rounded-2xl p-8 text-center border-2 border-red-100">
              <p className="font-bold mb-2">Hubo un problema:</p>
              <p className="text-sm mb-4">{errorMessage}</p>
              <button 
                onClick={fetchHistory}
                className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold text-sm"
              >
                Intentar de nuevo
              </button>
            </div>
          ) : loading ? (
            <div className="text-center py-10 text-slate-400">Cargando historial...</div>
          ) : history.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center text-slate-400 border-2 border-dashed border-slate-200">
              No hay facturas guardadas todavía.
            </div>
          ) : (
            <div className="space-y-4">
              {history.map((inv) => (
                <div key={inv.id} className="bg-white rounded-2xl shadow-md p-5 border border-slate-100 flex justify-between items-center group hover:border-teal-300 transition-all">
                  <div>
                    <div className="text-xs font-bold text-teal-600 uppercase mb-1">
                      {new Date(inv.created_at).toLocaleDateString('es-ES', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="text-lg font-bold text-slate-800">{inv.client_name}</div>
                    <div className="text-sm text-slate-500">{inv.client_phone || 'Sin teléfono'}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-slate-700">${parseFloat(inv.total).toFixed(2)}</div>
                    <button 
                      onClick={() => {
                        setInvoiceData({
                          clientName: inv.client_name,
                          clientPhone: inv.client_phone || '',
                          clientAddress: inv.client_address || '',
                          services: Array.isArray(inv.services) ? inv.services : [],
                          notes: inv.notes || '',
                        });
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-teal-600 hover:text-teal-700 underline mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Re-usar Datos
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
