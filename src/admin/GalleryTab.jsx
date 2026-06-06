import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Plus, Pencil, Trash2, X, Check, Loader2, Image } from 'lucide-react';

const emptyItem = { title: '', description: '', image: '', sort_order: 0 };

function GalleryForm({ item, onSave, onCancel, saving }) {
  const [form, setForm] = useState(item);
  const set = (f, v) => setForm(x => ({ ...x, [f]: v }));

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSave(form); }} className="space-y-4">
      <div>
        <label className="text-slate-300 text-sm mb-1 block">Title *</label>
        <input
          value={form.title}
          onChange={e => set('title', e.target.value)}
          required
          className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
          placeholder="e.g. Spitfire Mk IX"
        />
      </div>
      <div>
        <label className="text-slate-300 text-sm mb-1 block">Description</label>
        <textarea
          value={form.description}
          onChange={e => set('description', e.target.value)}
          rows={2}
          className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 resize-none"
          placeholder="Short description..."
        />
      </div>
      <div>
        <label className="text-slate-300 text-sm mb-1 block">Image URL *</label>
        <input
          value={form.image}
          onChange={e => set('image', e.target.value)}
          required
          className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
          placeholder="https://..."
        />
        {form.image && (
          <img src={form.image} alt="preview" className="mt-2 w-full h-32 object-cover rounded-xl" onError={e => e.target.style.display='none'} />
        )}
      </div>
      <div>
        <label className="text-slate-300 text-sm mb-1 block">Sort Order</label>
        <input
          type="number"
          value={form.sort_order}
          onChange={e => set('sort_order', Number(e.target.value))}
          className="w-32 bg-slate-800 border border-slate-600 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>
      <div className="flex gap-3 pt-1">
        <button type="submit" disabled={saving} className="flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold disabled:opacity-60">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
          {saving ? 'Saving...' : 'Save'}
        </button>
        <button type="button" onClick={onCancel} className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold">Cancel</button>
      </div>
    </form>
  );
}

export default function GalleryTab() {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from('gallery').select('*').order('sort_order');
    setItems(data || []);
    setLoading(false);
    setLoaded(true);
  };

  const handleSave = async (form) => {
    setSaving(true);
    try {
      if (editing === 'new') {
        const { error } = await supabase.from('gallery').insert([form]);
        if (error) throw error;
        showToast('Gallery item added!');
      } else {
        const { error } = await supabase.from('gallery').update(form).eq('id', editing);
        if (error) throw error;
        showToast('Gallery item updated!');
      }
      setEditing(null);
      load();
    } catch (err) { showToast(err.message, 'error'); }
    setSaving(false);
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Delete "${title}"?`)) return;
    await supabase.from('gallery').delete().eq('id', id);
    showToast('Deleted.');
    load();
  };

  if (!loaded) return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <Image className="w-12 h-12 text-slate-500" />
      <p className="text-slate-400">Click to load gallery from database</p>
      <button onClick={load} className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold">Load Gallery</button>
    </div>
  );

  const editItem = editing === 'new' ? { ...emptyItem } : items.find(i => i.id === editing);

  return (
    <div className="space-y-6">
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl text-sm font-medium ${toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white`}>
          {toast.msg}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Gallery</h2>
          <p className="text-slate-400 text-sm">{items.length} items</p>
        </div>
        <button onClick={() => setEditing('new')} className="flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold">
          <Plus className="w-4 h-4" /> Add Item
        </button>
      </div>

      {editing && editItem && (
        <div className="bg-slate-800/60 border border-cyan-500/30 rounded-2xl p-6">
          <h3 className="text-white font-semibold text-lg mb-5">{editing === 'new' ? '➕ New Gallery Item' : '✏️ Edit Item'}</h3>
          <GalleryForm item={editItem} onSave={handleSave} onCancel={() => setEditing(null)} saving={saving} />
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 text-cyan-400 animate-spin" /></div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(item => (
            <div key={item.id} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden group">
              <div className="h-40 overflow-hidden bg-slate-900">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onError={e => { e.target.style.display='none'; }} />
              </div>
              <div className="p-4">
                <p className="text-white font-medium text-sm">{item.title}</p>
                <p className="text-slate-400 text-xs mt-1 line-clamp-2">{item.description}</p>
                <div className="flex gap-2 mt-3">
                  <button onClick={() => setEditing(item.id)} className="flex-1 text-xs bg-slate-700 hover:bg-slate-600 text-cyan-300 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all">
                    <Pencil className="w-3 h-3" /> Edit
                  </button>
                  <button onClick={() => handleDelete(item.id, item.title)} className="flex-1 text-xs bg-slate-700 hover:bg-red-900/40 text-red-400 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all">
                    <Trash2 className="w-3 h-3" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="col-span-3 text-center py-16 text-slate-500">
              <Image className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p>No gallery items yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
