"use client";
import React from 'react'
import Image from 'next/image'
import { notFound, useRouter } from 'next/navigation'
import productsData from '@/data/products.json'
import DownloadCatalog from '@/components/DownloadCatalog'

type Product = {
  id: string
  name: string
  category: string
  subcategory?: string
  image: string
  description?: string
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const router = useRouter()
  const p = (productsData as Product[]).find(x => x.id === params.id)
  if (!p) return notFound()

  const isPlaceholder = p.image === "/images/placeholder.jpg";

  return (
    <div className="min-h-screen pt-40 pb-24">
      <div className="container px-6 mx-auto">
        <button 
          onClick={() => router.back()} 
          className="inline-flex items-center gap-2 text-silver-dark hover:text-white transition-colors mb-12 group"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-xs font-bold tracking-widest uppercase">Geri Dön</span>
        </button>

        <section className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="glass-card rounded-[3rem] overflow-hidden relative aspect-square lg:aspect-auto lg:h-[600px]">
            {isPlaceholder ? (
              <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex flex-col items-center justify-center p-24 text-center">
                <span className="text-white/20 text-7xl font-black tracking-tighter mb-4 italic">DORUK</span>
                <span className="text-white/10 text-lg font-bold tracking-[0.5em] uppercase">{p.category}</span>
                <div className="mt-12 h-px w-24 bg-white/10" />
              </div>
            ) : (
              <div className="relative w-full h-full bg-zinc-100 flex items-center justify-center">
                <Image 
                  src={p.image} 
                  alt={p.name} 
                  fill 
                  className="object-contain p-8"
                  priority 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>

          <div className="py-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-1.5 bg-white text-obsidian text-[10px] font-bold tracking-widest uppercase rounded-full">
                {p.category}
              </span>
              {p.subcategory && (
                <span className="px-4 py-1.5 border border-white/10 text-silver-light text-[10px] font-bold tracking-widest uppercase rounded-full">
                  {p.subcategory}
                </span>
              )}
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              {p.name}
            </h1>

            <p className="text-xl text-silver-dark font-light mb-12 leading-relaxed max-w-xl">
              {p.description || `${p.name}, Doruk Söve'nin üstün kalite standartları ve modern estetik anlayışı ile üretilmiş seçkin bir üründür. Dayanıklılık ve şıklığı bir arada sunar.`}
            </p>
            
            <div className="space-y-12 pt-12 border-t border-white/5">
              <div className="flex flex-col gap-6">
                <h3 className="text-xs font-bold text-silver-dark uppercase tracking-[0.3em]">Kataloğu Keşfedin</h3>
                <div className="flex flex-wrap gap-4">
                  <DownloadCatalog />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
