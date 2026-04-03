"use client";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian via-obsidian/60 to-transparent" />
        
        {/* Hero Image */}
        <div className="absolute inset-0 scale-105">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
            alt="Premium Architectural Interior"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="container relative z-20 px-6 mx-auto">
          <div className="max-w-4xl pt-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-silver">
                Mimari Estetik & Kalite
              </span>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white">
                MEKANLARINIZA <br />
                <span className="text-border tracking-normal">SOFİSTİKE</span> BİR <br />
                DOKUNUŞ KATIN
              </h1>
              <p className="text-lg md:text-2xl text-silver-dark mb-10 max-w-2xl leading-relaxed font-light">
                Doruk Söve, iç mimarlık için zarif, minimal ve premium duvar dekorasyon ürünleri sunar. 
                Süpürgelikler, duvar panelleri ve tavan pervazları ile mekanlarınızı sanat eserine dönüştürün.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-premium flex items-center gap-3 group">
                  Koleksiyonu Keşfet
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="btn-outline">
                  Bizimle İletişime Geçin
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-obsidian border-y border-white/5">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Yıllık Deneyim', value: '15+' },
              { label: 'Eşsiz Tasarım', value: '250+' },
              { label: 'Mutlu Müşteri', value: '5000+' },
              { label: 'Üretim Kapasitesi', value: '10K+' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-6xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-silver-dark uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories Snippet */}
      <section className="py-32 relative">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl text-left md:text-center mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">KOLEKSİYONLARIMIZ</h2>
              <p className="text-lg text-silver-dark font-light">Evinizin her köşesi için titizlikle tasarlanmış, dayanıklı ve estetik mimari çözümler.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Duvar Panelleri', 
                img: 'https://images.unsplash.com/photo-1613296889990-19a6d4f4b0e4?q=80&w=800',
                desc: '3D derinlik ve modern dokunuş.'
              },
              { 
                title: 'Süpürgelikler', 
                img: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800',
                desc: 'Geçişlerde mükemmel detaylar.'
              },
              { 
                title: 'Tavan Dekoru', 
                img: 'https://images.unsplash.com/photo-1620626397931-13137d6e8736?q=80&w=800',
                desc: 'Görkemli ve şık tavan çözümleri.'
              }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group glass-card rounded-3xl overflow-hidden aspect-[4/5] relative"
              >
                <Image src={cat.img} alt={cat.title} fill className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-silver-dark text-sm mb-4">{cat.desc}</p>
                  <Link href="/products" className="text-xs font-bold tracking-widest text-white uppercase border-b border-white px-2 py-1">İncele</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
