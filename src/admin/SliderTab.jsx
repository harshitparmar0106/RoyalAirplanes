import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Plus, Trash2, Loader2, SlidersHorizontal, GripVertical } from 'lucide-react';

export default function SliderTab() {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newLabel, setNewLabel] = useState('');
  const [adding, setAdding] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from('slider_images').select('*').order('sort_order');
    setItems(data || []);
    setLoading(false);
    setLoaded(true);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newUrl.trim()) return;
    setAdding(true);
    const maxOrder = items.reduce((m, i) => Math.max(m, i.sort_order || 0), 0);
    const { error } = await supabase.from('slider_images').insert([{
      image_url: newUrl.trim(),
      label: newLabel.trim() || null,
      sort_order: maxOrder + 1,
    }]);
    if (error) { showToast(error.message, 'error'); }
    else { showToast('Slider image added!'); setNewUrl(''); setNewLabel(''); load(); }
    setAdding(false);
  };

  const handleDelete = async (id) => {
    if (!confirm('Remove this slider image?')) return;
    await supabase.from('slider_images').delete().eq('id', id);
    showToast('Removed.');
    load();
  };

  const moveUp = async (index) => {
    if (index === 0) return;
    const a = items[index - 1];
    const b = items[index];
    await supabase.from('slider_images').update({ sort_order: b.sort_order }).eq('id', a.id);
    await supabase.from('slider_images').update({ sort_order: a.sort_order }).eq('id', b.id);
    load();
  };

  if (!loaded) return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <SlidersHorizontal className="w-12 h-12 text-slate-500" />
      <p className="text-slate-400">Click to load slider images</p>
      <button onClick={load} className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold">Load Slider</button>
    </div>
  );

  return (
    <div className="space-y-6">
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl text-sm font-medium ${toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white`}>
          {toast.msg}
        </div>
      )}

      <div>
        <h2 className="text-xl font-bold text-white">Hero Slider Images</h2>
        <p className="text-slate-400 text-sm">These appear in the homepage hero carousel — {items.length} images</p>
      </div>

      {/* Add Form */}
      <form onSubmit={handleAdd} className="bg-slate-800/60 border border-cyan-500/30 rounded-2xl p-5 space-y-3">
        <h3 className="text-white font-semibold">➕ Add Slider Image</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="text-slate-300 text-sm mb-1 block">Image URL *</label>
            <input
              value={newUrl}
              onChange={e => setNewUrl(e.target.value)}
              required
              className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="text-slate-300 text-sm mb-1 block">Label (optional)</label>
            <input
              value={newLabel}
              onChange={e => setNewLabel(e.target.value)}
              className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
              placeholder="Slide label..."
            />
          </div>
        </div>
        {newUrl && (
          <img src={newUrl} alt="preview" className="w-full h-36 object-cover rounded-xl" onError={e => e.target.style.display='none'} />
        )}
        <button type="submit" disabled={adding} className="flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold disabled:opacity-60">
          {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
          {adding ? 'Adding...' : 'Add to Slider'}
        </button>
      </form>

      {/* Slider List */}
      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-8 h-8 text-cyan-400 animate-spin" /></div>
      ) : (
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={item.id} className="flex items-center gap-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-3">
              <div className="text-slate-500 cursor-grab shrink-0">
                <GripVertical className="w-5 h-5" />
              </div>
              <span className="text-slate-500 text-sm w-6 font-mono shrink-0">{i + 1}</span>
              <div className="w-20 h-14 rounded-xl overflow-hidden bg-slate-700 shrink-0">
                <img src={item.image_url} alt="" className="w-full h-full object-cover" onError={e => e.target.style.display='none'} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm truncate">{item.image_url}</p>
                {item.label && <p className="text-slate-400 text-xs">{item.label}</p>}
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => moveUp(i)}
                  disabled={i === 0}
                  className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-700 disabled:opacity-30 text-xs"
                  title="Move up"
                >↑</button>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-slate-700/50 shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          {items.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              <SlidersHorizontal className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p>No slider images yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
