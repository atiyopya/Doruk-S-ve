 "use client";
import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import DownloadCatalog from '@/components/DownloadCatalog'

type Product = {
  id: string
  name: string
  category: string
  image: string
  description?: string
}

const seedProducts: Product[] = [
  { id: '1', name: 'Süpürgelik Classic', category: 'Süpürgelik', image: 'https://images.unsplash.com/photo-1612832021779-0b8ab1a5c4f6?q=80&w=1200&auto=format&fit=crop' },
  { id: '2', name: 'Tavan Pervazı Slim', category: 'Tavan pervazları', image: 'https://images.unsplash.com/photo-1499636136210-6f4c3f25e9c4?q=80&w=1200&auto=format&fit=crop' },
  { id: '3', name: '3D Duvar Kaplaması A', category: '3D Duvar Kaplaması', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop' },
  { id: '4', name: 'Duvar Pervazı Modern', category: 'Duvar pervazları', image: 'https://images.unsplash.com/photo-1563215544-4a6aa58f9c3c?q=80&w=1200&auto=format&fit=crop' },
  { id: '5', name: 'Dekoratif Panel Luxe', category: '3D Duvar Kaplaması', image: 'https://images.unsplash.com/photo-1613296889990-19a6d4f4b0e4?q=80&w=1200&auto=format&fit=crop' },
  { id: '6', name: 'Minimalist Süpürgelik', category: 'Süpürgelik', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=1200&auto=format&fit=crop' }
]

const categories = ["All", ...Array.from(new Set(seedProducts.map(p => p.category)))]

export default function ProductsPage() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<string>('All')
  const MotionDiv = motion.div as any;

  const visible = useMemo(() => {
    return seedProducts.filter(p => (cat === 'All' || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase()))
  }, [cat, q])

  return (
    <div className="min-h-screen pt-40 pb-24">
      <div className="container px-6 mx-auto">
        <header className="max-w-3xl mb-24">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-silver-dark mb-4 block">Ustalıkla Hazırlanmış</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">İÇ MEKAN KOLEKSİYONU</h1>
            <p className="text-lg text-silver-dark font-light max-w-xl">
              Projeleriniz için en kaliteli malzemeleri ve en şık tasarımları bir araya getirdik. 
              Modern detaylar, zamansız estetik.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <DownloadCatalog />
            </div>
          </MotionDiv>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 p-4 glass-card rounded-3xl border-white/5">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  cat === c 
                    ? 'bg-white text-obsidian shadow-lg' 
                    : 'text-silver-dark hover:text-white hover:bg-white/5'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          
          <div className="relative group w-full md:w-auto">
            <input 
              value={q} 
              onChange={e => setQ(e.target.value)} 
              placeholder="Ürün Ara..." 
              className="w-full md:w-64 bg-obsidian/50 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
            />
            <svg 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-silver-dark pointer-events-none group-focus-within:text-white transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <MotionDiv 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {visible.map((p, i) => (
              <MotionDiv 
                key={p.id} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ProductCard p={p} />
              </MotionDiv>
            ))}
          </AnimatePresence>
        </MotionDiv>

        {visible.length === 0 && (
          <div className="text-center py-24 glass-card rounded-3xl border-dashed">
            <p className="text-silver-dark text-xl font-light">Aradığınız kriterlere uygun ürün bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  )
}
