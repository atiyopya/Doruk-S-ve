"use client";
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductCard({ p }: { p: { id: string; name: string; category: string; image: string; file?: string } }) {
  const MotionDiv = motion.div as any;
  
  const CardContent = (
    <div className="block glass-card rounded-3xl overflow-hidden aspect-[3/4] relative cursor-pointer">
      {/* Placeholder for high-end product image handling */}
      {/* Placeholder or Image */}
      <div className="absolute inset-0 z-0">
        {p.image === "/images/placeholder.jpg" ? (
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex flex-col items-center justify-center p-12 text-center group-hover:scale-110 transition-transform duration-700">
            <span className="text-white/20 text-4xl font-black tracking-tighter mb-2">DORUK</span>
            <span className="text-white/10 text-[10px] font-bold tracking-[0.3em] uppercase">{p.category}</span>
          </div>
        ) : (
          <div className="w-full h-full bg-zinc-100 flex items-center justify-center">
            <Image 
              src={p.image} 
              alt={p.name} 
              fill 
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}
      </div>


      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase bg-white text-obsidian rounded-full">
          {p.category}
        </span>
        <h3 className="text-2xl font-black text-white mb-2 leading-tight">
          {p.name}
        </h3>
        <div className="h-0 group-hover:h-12 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center">
          <span className="text-xs font-bold tracking-widest text-silver-light uppercase border-b border-silver-light border-opacity-30 pb-1">
            {p.file ? 'KATALOĞU İNDİR' : 'DETAYLARI İNCELE'}
          </span>
        </div>
      </div>

      {/* Rotating Arrow / Plus */}
      <div className="absolute top-6 right-6 z-20">
        <div className="w-10 h-10 rounded-full glass backdrop-blur-md flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
          {p.file ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <MotionDiv 
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {p.file ? (
        <a href={p.file} download className="block">
          {CardContent}
        </a>
      ) : (
        <Link href={`/products/${p.id}`} className="block">
          {CardContent}
        </Link>
      )}
    </MotionDiv>
  )
}
