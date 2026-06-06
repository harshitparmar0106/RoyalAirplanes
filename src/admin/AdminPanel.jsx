import { useState } from 'react';
import { Package, Image, SlidersHorizontal, LogOut, Plane, LayoutDashboard, ExternalLink } from 'lucide-react';
import ProductsTab from './ProductsTab';
import GalleryTab from './GalleryTab';
import SliderTab from './SliderTab';

const TABS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'slider', label: 'Slider', icon: SlidersHorizontal },
];

function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-1">Welcome back 👋</h2>
        <p className="text-slate-400">Manage your Royal Airplanes content from here.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { label: 'Products', desc: 'Add, edit, delete RC products', icon: Package, tab: 'products', color: 'from-cyan-500 to-blue-600' },
          { label: 'Gallery', desc: 'Manage aviation gallery items', icon: Image, tab: 'gallery', color: 'from-purple-500 to-blue-600' },
          { label: 'Slider', desc: 'Control homepage hero images', icon: SlidersHorizontal, tab: 'slider', color: 'from-orange-500 to-red-600' },
        ].map(card => (
          <div key={card.tab} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/70 transition-all">
            <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg`}>
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg">{card.label}</h3>
            <p className="text-slate-400 text-sm mt-1">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Setup Guide */}
      <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl p-6">
        <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
          🚀 Setup Guide
        </h3>
        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
            <div>
              <p className="text-white font-medium">Create a Supabase project</p>
              <p className="text-slate-400 mt-0.5">Go to <a href="https://supabase.com" target="_blank" className="text-cyan-400 underline">supabase.com</a> and create a free project.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
            <div>
              <p className="text-white font-medium">Run the SQL setup script</p>
              <p className="text-slate-400 mt-0.5">In your Supabase SQL Editor, run the script from <code className="bg-slate-700 px-1.5 py-0.5 rounded text-cyan-300">SUPABASE_SETUP.sql</code> in the project root.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
            <div>
              <p className="text-white font-medium">Add environment variables to Vercel</p>
              <p className="text-slate-400 mt-0.5">In your Vercel project settings → Environment Variables, add:</p>
              <div className="mt-2 space-y-1 font-mono text-xs">
                <div className="bg-slate-900 rounded-lg px-3 py-2 text-cyan-300">VITE_SUPABASE_URL = https://your-project.supabase.co</div>
                <div className="bg-slate-900 rounded-lg px-3 py-2 text-cyan-300">VITE_SUPABASE_ANON_KEY = your-anon-key</div>
                <div className="bg-slate-900 rounded-lg px-3 py-2 text-cyan-300">VITE_ADMIN_PASSWORD = your-secret-password</div>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</div>
            <div>
              <p className="text-white font-medium">Done! Start adding products</p>
              <p className="text-slate-400 mt-0.5">Go to the Products tab and add your first product. The frontend will automatically use the database data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminPanel({ onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Top Bar */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Plane className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white">Royal Airplanes</span>
            <span className="text-slate-500 text-sm hidden sm:block">Admin Panel</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:block">View Site</span>
            </a>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 text-slate-400 hover:text-red-400 text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:block">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex gap-6">
        {/* Sidebar */}
        <aside className="w-52 shrink-0 hidden sm:block">
          <nav className="space-y-1 sticky top-24">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-linear-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile Tab Bar */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 z-40 flex">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs transition-all ${
                activeTab === tab.id ? 'text-cyan-400' : 'text-slate-500'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 pb-24 sm:pb-0">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'products' && <ProductsTab />}
          {activeTab === 'gallery' && <GalleryTab />}
          {activeTab === 'slider' && <SliderTab />}
        </main>
      </div>
    </div>
  );
}
