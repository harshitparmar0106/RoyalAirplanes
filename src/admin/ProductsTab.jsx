import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Plus, Pencil, Trash2, X, Check, Loader2, Package, ChevronDown, ChevronUp } from 'lucide-react';

const CATEGORIES = ['airplane', 'helicopter', 'jet', 'glider', 'accessories'];

const emptyProduct = {
  name: '',
  category: 'airplane',
  price: '',
  images: [''],
  description: '',
  specs: {},
};

function SpecsEditor({ specs, onChange }) {
  const [newKey, setNewKey] = useState('');
  const [newVal, setNewVal] = useState('');

  const addSpec = () => {
    if (!newKey.trim()) return;
    onChange({ ...specs, [newKey.trim()]: newVal });
    setNewKey('');
    setNewVal('');
  };

  const removeSpec = (key) => {
    const updated = { ...specs };
    delete updated[key];
    onChange(updated);
  };

  const updateSpec = (key, val) => {
    onChange({ ...specs, [key]: val });
  };

  return (
    <div className="space-y-2">
      <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
        {Object.entries(specs).map(([key, val]) => (
          <div key={key} className="flex gap-2 items-center">
            <input
              value={key}
              disabled
              className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-1.5 text-sm text-slate-300"
            />
            <input
              value={val}
              onChange={(e) => updateSpec(key, e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={() => removeSpec(key)}
              className="text-red-400 hover:text-red-300 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <input
          value={newKey}
          onChange={(e) => setNewKey(e.target.value)}
          placeholder="Spec name"
          className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-cyan-500"
        />
        <input
          value={newVal}
          onChange={(e) => setNewVal(e.target.value)}
          placeholder="Value"
          className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-cyan-500"
        />
        <button
          onClick={addSpec}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded-lg text-sm"
        >
          Add
        </button>
      </div>
    </div>
  );
}

function ProductForm({ product, onSave, onCancel, saving }) {
  const [form, setForm] = useState(product);

  const setField = (field, val) => setForm(f => ({ ...f, [field]: val }));
  const setImage = (i, val) => {
    const imgs = [...form.images];
    imgs[i] = val;
    setField('images', imgs);
  };
  const addImageField = () => setField('images', [...form.images, '']);
  const removeImage = (i) => setField('images', form.images.filter((_, idx) => idx !== i));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...form,
      price: Number(form.price),
      images: form.images.filter(Boolean),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="text-slate-300 text-sm mb-1 block">Product Name *</label>
          <input
            value={form.name}
            onChange={(e) => setField('name', e.target.value)}
            required
            className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
            placeholder="e.g. FMS 1220mm Ranger V3"
          />
        </div>

        <div>
          <label className="text-slate-300 text-sm mb-1 block">Category *</label>
          <select
            value={form.category}
            onChange={(e) => setField('category', e.target.value)}
            className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
          >
            {CATEGORIES.map(c => (
              <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-slate-300 text-sm mb-1 block">Price (₹) *</label>
          <input
            type="number"
            value={form.price}
            onChange={(e) => setField('price', e.target.value)}
            required
            min="0"
            className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
            placeholder="e.g. 21999"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-slate-300 text-sm mb-1 block">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setField('description', e.target.value)}
            rows={2}
            className="w-full bg-slate-800 border border-slate-600 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 resize-none"
            placeholder="Optional product description..."
          />
        </div>
      </div>

      {/* Image URLs */}
      <div>
        <label className="text-slate-300 text-sm mb-2 block">Product Images (URLs)</label>
        <div className="space-y-2">
          {form.images.map((img, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={img}
                onChange={(e) => setImage(i, e.target.value)}
                className="flex-1 bg-slate-800 border border-slate-600 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-cyan-500"
                placeholder="https://..."
              />
              {form.images.length > 1 && (
                <button type="button" onClick={() => removeImage(i)} className="text-red-400 hover:text-red-300 px-2">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addImageField}
            className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1"
          >
            <Plus className="w-3 h-3" /> Add another image
          </button>
        </div>
      </div>

      {/* Specs */}
      <div>
        <label className="text-slate-300 text-sm mb-2 block">Technical Specifications</label>
        <SpecsEditor specs={form.specs} onChange={(s) => setField('specs', s)} />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all disabled:opacity-60"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
          {saving ? 'Saving...' : 'Save Product'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-all"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default function ProductsTab() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(null); // product id or 'new'
  const [expandedId, setExpandedId] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const loadProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (!error) setProducts(data || []);
    setLoading(false);
    setLoaded(true);
  };

  if (!loaded) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Package className="w-12 h-12 text-slate-500" />
        <p className="text-slate-400">Click below to load products from database</p>
        <button
          onClick={loadProducts}
          className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold"
        >
          Load Products
        </button>
      </div>
    );
  }

  const handleSave = async (form) => {
    setSaving(true);
    try {
      const payload = {
        name: form.name,
        category: form.category,
        price: form.price,
        images: form.images,
        description: form.description,
        specs: form.specs,
      };

      if (editing === 'new') {
        const { error } = await supabase.from('products').insert([payload]);
        if (error) throw error;
        showToast('Product added successfully!');
      } else {
        const { error } = await supabase.from('products').update(payload).eq('id', editing);
        if (error) throw error;
        showToast('Product updated successfully!');
      }
      setEditing(null);
      loadProducts();
    } catch (err) {
      showToast(err.message, 'error');
    }
    setSaving(false);
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) {
      showToast(error.message, 'error');
    } else {
      showToast('Product deleted.');
      loadProducts();
    }
  };

  const productBeingEdited = editing === 'new'
    ? { ...emptyProduct }
    : products.find(p => p.id === editing)
      ? { ...products.find(p => p.id === editing), images: products.find(p => p.id === editing).images || [''] }
      : null;

  return (
    <div className="space-y-6">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl text-sm font-medium transition-all ${
          toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
        }`}>
          {toast.msg}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Products</h2>
          <p className="text-slate-400 text-sm">{products.length} products in database</p>
        </div>
        <button
          onClick={() => setEditing('new')}
          className="flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-cyan-500/20"
        >
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      {/* Add / Edit Form */}
      {editing && productBeingEdited && (
        <div className="bg-slate-800/60 border border-cyan-500/30 rounded-2xl p-6">
          <h3 className="text-white font-semibold text-lg mb-5">
            {editing === 'new' ? '➕ New Product' : '✏️ Edit Product'}
          </h3>
          <ProductForm
            product={productBeingEdited}
            onSave={handleSave}
            onCancel={() => setEditing(null)}
            saving={saving}
          />
        </div>
      )}

      {/* Products List */}
      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-16 text-slate-500">
          <Package className="w-10 h-10 mx-auto mb-3 opacity-40" />
          <p>No products yet. Add your first product above.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {products.map(product => (
            <div key={product.id} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-4 p-4">
                {/* Thumbnail */}
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-700 shrink-0">
                  {product.images?.[0] ? (
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <Package className="w-6 h-6 m-4 text-slate-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{product.name}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full capitalize">{product.category}</span>
                    <span className="text-cyan-400 font-semibold text-sm">₹{product.price?.toLocaleString()}</span>
                    <span className="text-slate-500 text-xs">{product.images?.length || 0} images</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                    className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-700/50 transition-all"
                  >
                    {expandedId === product.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setEditing(product.id)}
                    className="text-cyan-400 hover:text-cyan-300 p-2 rounded-lg hover:bg-slate-700/50 transition-all"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id, product.name)}
                    className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-slate-700/50 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Expanded specs */}
              {expandedId === product.id && (
                <div className="border-t border-slate-700/50 px-4 py-3 bg-slate-900/30">
                  {product.description && (
                    <p className="text-slate-400 text-sm mb-3">{product.description}</p>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {Object.entries(product.specs || {}).map(([k, v]) => (
                      <div key={k} className="bg-slate-800 rounded-lg px-3 py-2">
                        <p className="text-slate-500 text-xs capitalize">{k.replace(/([A-Z])/g, ' $1')}</p>
                        <p className="text-slate-200 text-sm font-medium">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
