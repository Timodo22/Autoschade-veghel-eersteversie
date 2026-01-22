import React, { useState } from 'react';
import { Camera, Send, UploadCloud, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const DamageForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    licensePlate: '',
    description: '',
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted', formData, files);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', licensePlate: '', description: '' });
      setFiles(null);
    }, 1500);
  };

  return (
    <motion.div 
      id="schadeformulier"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 w-full"
    >
      <div className="bg-[#ff0d00] p-4 text-white text-center">
        <h3 className="text-xl font-bold">Direct Schade Melden</h3>
        <p className="text-sm opacity-90">Vul in voor een snelle prijsopgave</p>
      </div>

      {status === 'success' ? (
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ontvangen!</h3>
          <p className="text-gray-600 text-sm mb-6">Wij nemen zo spoedig mogelijk contact met u op.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-[#ff0d00] font-semibold hover:underline text-sm"
          >
            Nieuwe melding
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#ff0d00] focus:border-transparent outline-none transition-all"
                placeholder="Naam *"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#ff0d00] focus:border-transparent outline-none transition-all"
                placeholder="Tel. nr *"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#ff0d00] focus:border-transparent outline-none transition-all"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                name="licensePlate"
                required
                value={formData.licensePlate}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-yellow-100 text-gray-900 font-bold uppercase tracking-widest text-sm focus:ring-2 focus:ring-[#ff0d00] focus:border-transparent outline-none transition-all placeholder-gray-500"
                placeholder="Kenteken *"
              />
            </div>
          </div>

          <div>
            <textarea
              name="description"
              required
              rows={3}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#ff0d00] focus:border-transparent outline-none transition-all"
              placeholder="Omschrijving van de schade..."
            ></textarea>
          </div>

          <div>
            <div className="relative group">
               <input 
                type="file" 
                multiple 
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="flex items-center justify-center px-4 py-3 border-2 border-gray-300 border-dashed rounded-lg group-hover:bg-gray-50 transition-colors">
                {files && files.length > 0 ? (
                  <div className="flex items-center text-[#ff0d00] text-sm font-medium">
                    <Camera className="w-5 h-5 mr-2" />
                    <span>{files.length} foto's</span>
                  </div>
                ) : (
                  <div className="flex items-center text-gray-500 text-sm">
                    <UploadCloud className="w-5 h-5 mr-2 text-gray-400" />
                    <span>Klik om foto's te uploaden</span>
                  </div>
                )}
              </div>
            </div>
            <p className="mt-1 text-[10px] text-gray-500 flex items-center gap-1">
              <AlertCircle size={10} /> Upload duidelijk beeldmateriaal.
            </p>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`w-full py-3 px-6 rounded-lg text-white font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 ${
              status === 'submitting' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#ff0d00] hover:bg-red-700'
            }`}
          >
            {status === 'submitting' ? 'Verzenden...' : 'Gratis Offerte Aanvragen'}
            {!status && <Send size={18} />}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default DamageForm;