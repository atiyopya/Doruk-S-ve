"use client";
import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import DownloadCatalog from '@/components/DownloadCatalog'

type Product = {
  id: string
  name: string
  category: string
  image: string
  description?: string
}

const seeds: Product[] = [
  { id: '1', name: 'Süpürgelik Classic', category: 'Süpürgelik', image: 'https://images.unsplash.com/photo-1612832021779-0b8ab1a5c4f6?q=80&w=1200&auto=format&fit=crop', description: 'Premium duvar altlığı.' },
  { id: '2', name: 'Tavan Pervazı Slim', category: 'Tavan pervazları', image: 'https://images.unsplash.com/photo-1499636136210-6f4c3f25e9c4?q=80&w=1200&auto=format&fit=crop', description: 'Slim tasarım tavan dekoru.' }
]

export default function ProductDetail({ params }: { params: { id: string } }) {
  const p = seeds.find(x => x.id === params.id)
  if (!p) return notFound()
  return (
    <section className="container py-12 grid lg:grid-cols-2 gap-8 items-center">
      <div className="shadow-lg rounded-2xl overflow-hidden glass">
        <Image src={p.image} alt={p.name} width={1200} height={800} style={{ width: '100%', height: 'auto' }} priority />
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{p.name}</h1>
        <p className="text-gray-700 mb-4">{p.description}</p>
        <div className="text-sm text-gray-600 mb-8 tracking-wide opacity-80 uppercase">Kategori: {p.category}</div>
        
        <div className="pt-8 border-t border-white/10">
          <h3 className="text-xs font-bold text-white mb-6 uppercase tracking-[0.2em] opacity-50">Kataloglarımızı İndirin</h3>
          <DownloadCatalog />
        </div>
      </div>
    </section>
  )
}
