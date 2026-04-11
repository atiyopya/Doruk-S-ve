"use client";
import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from '@/components/ProductCard'
import DownloadCatalog from '@/components/DownloadCatalog'
import productsData from '@/data/products.json'

type Product = {
  id: string
  name: string
  category: string
  subcategory?: string
  image: string
  description?: string
}

const allProducts = productsData as Product[];

const mainCategories = ["HEPSİ", "SÖVE", "STROPİYER", "AMBALAJ", "UV BASKI PANELLER", "KATALOG"];

export default function ProductsPage() {
  const [q, setQ] = useState('')
  const [mainCat, setMainCat] = useState<string>("HEPSİ")
  const [subCat, setSubCat] = useState<string>("HEPSİ")
  const [displayCount, setDisplayCount] = useState(12) // Performance optimized: Smaller batch size
  const MotionDiv = motion.div as any;

  // Get available subcategories for the selected main category
  const subCategories = useMemo(() => {
    if (mainCat === "HEPSİ") return [];
    const subs = allProducts
      .filter(p => p.category === mainCat && p.subcategory)
      .map(p => p.subcategory as string);
    return ["HEPSİ", ...Array.from(new Set(subs))];
  }, [mainCat]);

  const visible = useMemo(() => {
    return allProducts.filter(p => {
      const matchMain = mainCat === "HEPSİ" || p.category === mainCat;
      const matchSub = subCat === "HEPSİ" || p.subcategory === subCat;
      const matchSearch = p.name.toLowerCase().includes(q.toLowerCase());
      return matchMain && matchSub && matchSearch;
    });
  }, [mainCat, subCat, q])

  const displayedProducts = useMemo(() => {
    return visible.slice(0, displayCount);
  }, [visible, displayCount]);

  const handleMainCatChange = (c: string) => {
    setMainCat(c);
    setSubCat("HEPSİ");
    setDisplayCount(12);
  }

  const handleSubCatChange = (sc: string) => {
    setSubCat(sc);
    setDisplayCount(12);
  }

  const handleSearchChange = (val: string) => {
    setQ(val);
    setDisplayCount(12);
  }

  return (
    <div className="min-h-screen pt-40 pb-24">
      <div className="container px-6 mx-auto">
        <header className="max-w-3xl mb-24">
          <MotionDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-silver-dark mb-4 block">Ustalıkla Hazırlanmış</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">ÜRÜN KOLEKSİYONU</h1>
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
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 glass-card rounded-3xl border-white/5">
            <div className="flex flex-wrap items-center gap-2">
              {mainCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => handleMainCatChange(c)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    mainCat === c 
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
                onChange={e => handleSearchChange(e.target.value)} 
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

          <AnimatePresence>
            {subCategories.length > 1 && (
              <MotionDiv 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap items-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-[10px] font-bold text-silver-dark uppercase tracking-widest mr-2 ml-2">Alt Kategori:</span>
                  {subCategories.map((sc) => (
                    <button
                      key={sc}
                      onClick={() => handleSubCatChange(sc)}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                        subCat === sc 
                          ? 'bg-silver-light text-obsidian' 
                          : 'text-silver-dark hover:text-white'
                      }`}
                    >
                      {sc}
                    </button>
                  ))}
                </div>
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>

        {/* Grid Container - PERFORMANCE FIX: Removed layout prop from the grid wrapper and its children */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence initial={false}>
            {displayedProducts.map((p, i) => (
              <MotionDiv 
                key={`${p.id}-${mainCat}-${subCat}`} // Force new keys for smoother transitions
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ 
                  duration: 0.3, 
                  delay: Math.min((i % 12) * 0.04, 0.4),
                  ease: "easeOut"
                }}
              >
                <ProductCard p={p} />
              </MotionDiv>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visible.length > displayCount && (
          <div className="mt-20 text-center">
            <button
              onClick={() => setDisplayCount(prev => prev + 12)}
              className="px-12 py-4 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-[0.3em] uppercase text-white hover:bg-white hover:text-obsidian transition-all duration-300 shadow-xl"
            >
              Daha Fazla Ürün Yükle
            </button>
            <p className="mt-6 text-[10px] font-bold tracking-widest text-silver-dark uppercase opacity-50">
              Gösterilen: {displayCount} / Toplam: {visible.length}
            </p>
          </div>
        )}

        {visible.length === 0 && (
          <div className="text-center py-24 glass-card rounded-3xl border-dashed">
            <p className="text-silver-dark text-xl font-light">Aradığınız kriterlere uygun ürün bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  )
}
