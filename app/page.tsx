"use client";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import referencesData from '@/data/references.json'

export default function Home() {
  const MotionDiv = motion.div as any;
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Doruk Söve Konya",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920",
    "@id": "",
    "url": "https://github.com/atiyopya/Doruk-S-ve",
    "telephone": "+905304401472",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Horozluhan, Güvenli Sk. 20 E",
      "addressLocality": "Selçuklu",
      "addressRegion": "Konya",
      "postalCode": "42000",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.9272,
      "longitude": 32.5050
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.instagram.com/konya_uv_baski_doruk_sove_/"
    ]
  };

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian via-obsidian/60 to-transparent" />
        
        {/* Hero Image */}
        <div className="absolute inset-0 scale-105">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
            alt="Konya Söve ve Mantolama Premium Dış Cephe"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="container relative z-20 px-6 mx-auto">
          <div className="max-w-4xl pt-24">
            <MotionDiv 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-silver">
                Konya Söve & Mantolama Uzmanı
              </span>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white">
                KONYA'NIN EN <br />
                <span className="text-border tracking-normal">PREMİUM</span> VE <br />
                ESTETİK SÖVESİ
              </h1>
              <p className="text-lg md:text-2xl text-silver-dark mb-10 max-w-2xl leading-relaxed font-light">
                Doruk Söve ile mekanlarınıza değer katın. Konya genelinde en uygun söve fiyatları ve 
                en kaliteli mantolama çözümleri ile dış cephenizi modernize ediyoruz.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="btn-premium flex items-center gap-3 group">
                  Söve Modellerini Keşfet
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link href="/contact" className="btn-outline">
                  Ücretsiz Keşif & Teklif Al
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>

        {/* Scroll Indicator */}
        <MotionDiv 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </MotionDiv>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-obsidian border-y border-white/5">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Yıllık Deneyim', value: '15+' },
              { label: 'Söve Modeli', value: '250+' },
              { label: 'Memnun Müşteri', value: '5000+' },
              { label: 'Günlük Üretim (m)', value: '10K+' },
            ].map((stat, i) => (
              <MotionDiv 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-6xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-silver-dark uppercase tracking-widest">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslarımız Section */}
      <section id="referanslar" className="py-32 bg-obsidian/50 relative">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mb-24">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">Referanslarımız</h2>
              <p className="text-xl md:text-2xl text-silver-dark font-light leading-relaxed">
                Konya'nın lider söve ve mantolama firması olarak, yüzlerce başarılı projeye imza attık. 
                <span className="text-white font-medium"> Doruk Söve</span> kalitesiyle dış cephelerini yenilediğimiz referans projelerimiz, 
                estetik ve dayanıklılığın en güzel örnekleridir. Modern mimari dokunuşlar ve %100 müşteri memnuniyeti 
                odaklı çalışma prensibimizle Konya genelinde en güvenilir çözüm ortağınız olmaya devam ediyoruz.
              </p>
            </MotionDiv>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {referencesData.slice(0, 6).map((ref, i) => (
              <MotionDiv
                key={ref.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
              >
                <Link href="/referanslar">
                  <div className="relative aspect-video rounded-3xl overflow-hidden glass-card mb-6 mb-6">
                    <Image 
                      src={ref.img} 
                      alt={`Doruk Söve Referans - ${ref.name}`} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    {/* Watermark Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                      <span className="text-white/10 text-2xl font-black uppercase tracking-[0.4em] -rotate-12 whitespace-nowrap select-none">
                        DORUK SÖVE
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-silver transition-colors">{ref.name}</h3>
                  <p className="text-silver-dark text-sm leading-relaxed mb-4">{ref.desc}</p>
                </Link>
              </MotionDiv>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/referanslar" className="btn-outline inline-flex items-center gap-3 group">
              Tüm Referanslarımızı Gör
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
