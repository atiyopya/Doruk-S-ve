"use client";
import React, { useEffect, useState } from 'react'

type Product = { id: string; name: string; category: string; image: string }

const sample: Product[] = [
  { id: '1', name: 'Süpürgelik Classic', category: 'Süpürgelik', image: 'https://images.unsplash.com/photo-1612832021779-0b8ab1a5c4f6?q=80&w=1200&auto=format&fit=crop' },
  { id: '2', name: 'Tavan Pervazı Slim', category: 'Tavan pervazları', image: 'https://images.unsplash.com/photo-1499636136210-6f4c3f25e9c4?q=80&w=1200&auto=format&fit=crop' }
]

function useProductsStore() {
  const key = 'doruk-sove-products'
  const [products, setProducts] = useState<Product[]>(() => {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(key) : null
    return raw ? JSON.parse(raw) : sample
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(products))
  }, [products])
  return { products, setProducts }
}

export default function AdminPage() {
  const { products, setProducts } = useProductsStore()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Süpürgelik')
  const [image, setImage] = useState('')

  function addProduct() {
    if (!name || !image) return
    const id = String(Date.now())
    const p = { id, name, category, image }
    setProducts([p, ...products])
    setName('')
    setImage('')
  }

  return (
    <section className="container py-12">
      <h2 className="text-2xl font-bold mb-4">CMS - Ürün Yönetimi</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="glass p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Yeni Ürün Ekle</h3>
          <div className="mb-2">
            <input className="w-full p-2 rounded" placeholder="Ürün adı" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="mb-2">
            <input className="w-full p-2 rounded" placeholder="Kategori" value={category} onChange={e => setCategory(e.target.value)} />
          </div>
          <div className="mb-2">
            <input className="w-full p-2 rounded" placeholder="Görsel URL" value={image} onChange={e => setImage(e.target.value)} />
          </div>
          <button className="btn cta text-white bg-black rounded-full px-5 py-2" onClick={addProduct}>Ekle</button>
        </div>
        <div className="glass p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Varsayılan Ürünler</h3>
          <ul>
            {(products).map(p => (
              <li key={p.id} className="text-sm mb-1">{p.name} — {p.category}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
