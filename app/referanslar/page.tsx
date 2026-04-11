"use client";
import Image from 'next/image'
import { motion } from 'framer-motion'
import referencesData from '@/data/references.json'

export default function Referanslar() {
  const MotionDiv = motion.div as any;

  return (
    <div className="min-h-screen pt-32 pb-24 bg-obsidian">
      <div className="container px-6 mx-auto">
        <header className="max-w-4xl mb-24">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-silver">
              Kalite ve Güvenin Adresi
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[1.1]">
              Referans <br />
              <span className="text-border">Projelerimiz</span>
            </h1>
            <p className="text-xl md:text-2xl text-silver-dark font-light leading-relaxed max-w-2xl">
              Doruk Söve kalitesiyle Konya genelinde tamamladığımız, estetik ve dayanıklılığı bir araya getiren 
              seçkin projelerimizden bazıları.
            </p>
          </MotionDiv>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {referencesData.map((ref, i) => (
            <MotionDiv
              key={ref.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-[2rem] overflow-hidden glass-card mb-8">
                <Image 
                  src={ref.img} 
                  alt={ref.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Watermark Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                  <span className="text-white/10 text-2xl md:text-3xl font-black uppercase tracking-[0.4em] -rotate-12 whitespace-nowrap select-none">
                    DORUK SÖVE
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              <div className="px-2">
                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-silver transition-colors duration-300">
                  {ref.name}
                </h2>
                <div className="h-px w-12 bg-white/20 mb-4 group-hover:w-24 transition-all duration-500" />
                <p className="text-silver-dark text-lg font-light leading-relaxed">
                  {ref.desc}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </div>
  )
}
