import { useState } from "react";
import { X, Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-3xl max-w-2xl w-full border border-slate-700 shadow-2xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          <button onClick={onClose} className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-slate-300 mb-2 font-medium">Name</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all"
              placeholder="Your name"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 mb-2 font-medium">Email</label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-2 font-medium">Phone</label>
              <input 
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>
          <div>
            <label className="block text-slate-300 mb-2 font-medium">Message</label>
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="4"
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 pt-8 border-t border-slate-700 grid grid-cols-3 gap-4">
          <div className="text-center">
            <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">+91 98765 43210</p>
          </div>
          <div className="text-center">
            <Mail className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">info@aerowings.com</p>
          </div>
          <div className="text-center">
            <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <p className="text-slate-400 text-sm">Jaipur, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;