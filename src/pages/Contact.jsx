import { useState } from "react";
import { Mail, MessageCircleMore} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can integrate your email API / backend call here
  };

  return (
    <section className="min-h-screen pt-34 md:pt-54 bg-linear-to-br from-white via-blue-50 to-blue-200 text-white py-20 px-6 flex justify-center items-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* Left - Info Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-800">
            Get In Touch with
          </h1>
          <span className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-800">
            The Royal Airplanes
          </span>
          <p className="text-slate-600 text-lg leading-relaxed">
            Whether you have a question about our fleet, pricing, or need
            support, our team is ready to help you take off!
          </p>
          <p className="text-white px-4 py-2 text-lg leading-relaxed bg-linear-to-r from-cyan-400 to-blue-400 rounded-lg">
            If you want to purchase any Models from our collection, please mail us on <span className="text-blue-800">royalairplanes@gmail.com </span>
            <br />
            Also you can whatsapp any query on <span className="text-blue-800">+91-9464394202</span>
          </p>

          <div className="grid grid-cols-1 gap-6 text-slate-800 mt-8">
            {/* <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-cyan-400" />
              <p>+91 94643 94202</p>
            </div> */}
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-cyan-400" />
              <p>royalairplanes@gmail.com</p>
              <MessageCircleMore className="w-6 h-6 text-cyan-400"/>
              <p>+91-9464394202</p>
            </div>
            {/* <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <p>
                Royal Airplanes Pvt. Ltd. ,
                <br /> C-24 Sethi Colony Vikas Marg <br /> Jaipur,
                Rajasthan,India, 302004
              </p>
            </div> */}
          </div>
        </div>

        {/* Right - Form Section */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-slate-700 p-8 shadow-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-500 mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white border border-slate-700 placeholder:text-slate-400 rounded-xl px-4 py-3 text-black focus:border-cyan-500 focus:outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-500 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white border border-slate-700 placeholder:text-slate-400 rounded-xl px-4 py-3 text-black focus:border-cyan-500 focus:outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-slate-500 mb-2 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-white border border-slate-700 placeholder:text-slate-400 rounded-xl px-4 py-3 text-black focus:border-cyan-500 focus:outline-none transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-500 mb-2 font-medium">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows="4"
                className="w-full bg-white border border-slate-700 rounded-xl px-4 py-3 text-black focus:border-cyan-500 focus:outline-none transition-all resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/40"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
