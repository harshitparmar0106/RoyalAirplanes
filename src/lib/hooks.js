import { useState, useEffect } from 'react';
import { supabase } from './supabase';
import { products as staticProducts, galleryData as staticGallery, sliderImages as staticSlider } from '../assets/data.js';

// Check if Supabase is configured
const isSupabaseConfigured = () => {
  return import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY;
};

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    if (!isSupabaseConfigured()) {
      setProducts(staticProducts);
      setLoading(false);
      return;
    }
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      // Map DB rows to app shape
      const mapped = data.map(row => ({
        id: row.id,
        name: row.name,
        category: row.category,
        price: row.price,
        image: row.images || [],
        specs: row.specs || {},
        description: row.description || '',
      }));
      setProducts(mapped.length > 0 ? mapped : staticProducts);
    } catch (err) {
      console.error('Error fetching products, falling back to static data:', err);
      setProducts(staticProducts);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { products, loading, error, refetch: fetchProducts };
}

export function useGallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  async function fetchGallery() {
    if (!isSupabaseConfigured()) {
      setGallery(staticGallery);
      setLoading(false);
      return;
    }
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('sort_order', { ascending: true });
      if (error) throw error;
      setGallery(data.length > 0 ? data : staticGallery);
    } catch (err) {
      console.error('Error fetching gallery:', err);
      setGallery(staticGallery);
    } finally {
      setLoading(false);
    }
  }

  return { gallery, loading, refetch: fetchGallery };
}

export function useSliderImages() {
  const [sliderImages, setSliderImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSlider();
  }, []);

  async function fetchSlider() {
    if (!isSupabaseConfigured()) {
      setSliderImages(staticSlider);
      setLoading(false);
      return;
    }
    try {
      const { data, error } = await supabase
        .from('slider_images')
        .select('*')
        .order('sort_order', { ascending: true });
      if (error) throw error;
      const urls = data.map(row => row.image_url);
      setSliderImages(urls.length > 0 ? urls : staticSlider);
    } catch (err) {
      console.error('Error fetching slider images:', err);
      setSliderImages(staticSlider);
    } finally {
      setLoading(false);
    }
  }

  return { sliderImages, loading, refetch: fetchSlider };
}
