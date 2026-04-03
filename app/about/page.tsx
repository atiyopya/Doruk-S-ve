"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-40 pb-24">
      <div className="container px-6 mx-auto">
        <header className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-silver-dark mb-4 block">Hikayemiz</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">MİMARİDE <br />MÜKEMMELLİK</h1>
            <p className="text-lg text-silver-dark font-light max-w-xl">
              Doruk Söve olarak 15 yılı aşkın süredir mekanlarınıza karakter katıyor, 
              estetik ve dayanıklılığı en üst seviyede birleştiriyoruz.
            </p>
          </motion.div>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden glass-card"
          >
            <Image 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" 
              alt="Office" 
              fill 
              className="object-cover opacity-80"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white mb-4">Misyonumuz</h2>
              <p className="text-silver-dark font-light leading-relaxed">
                Doruk Söve İnşaat Ltd. Şti. olarak; söve, mantolama ve cephe kaplama 
                sistemlerinde ulusal ve uluslararası kalite standartlarına uygun, 
                yüksek performanslı ve uzun ömürlü çözümler üretmek temel misyonumuzdur. 
                Üretim ve uygulama süreçlerimizde TS, CE ve ilgili yapı standartlarına 
                uygunluk esas alınmakta; projelerimiz teknik şartnamelere tam uyum, 
                mühendislik hesapları ve kalite kontrol prosedürleri çerçevesinde yürütülmektedir.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Vizyonumuz</h3>
              <p className="text-silver-dark font-light leading-relaxed">
                Yapı sektöründe söve ve cephe sistemleri alanında kalite, dayanıklılık 
                ve teknik yeterlilik denildiğinde ilk akla gelen markalardan biri olmak. 
                Teknolojik üretim altyapımız, sürekli iyileştirme politikamız ve Ar-Ge 
                yatırımlarımız ile sektörde standart belirleyen, inovatif ve sürdürülebilir 
                çözümler geliştiren öncü bir firma konumuna ulaşmak.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Kalite', desc: 'En üst segment hammadde ve titiz işçilik.' },
            { title: 'İnovasyon', desc: 'Modern tasarım trendlerini teknoloji ile buluşturuyoruz.' },
            { title: 'Güven', desc: 'Yılların verdiği tecrübe ile satış sonrası tam destek.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl text-center group hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors mb-4">0{i+1}</div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-silver-dark text-sm font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
