"use client";
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductCard({ p }: { p: { id: string; name: string; category: string; image: string } }) {
  const MotionDiv = motion.div as any;
  return (
    <MotionDiv 
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <Link href={`/products/${p.id}`} className="block glass-card rounded-3xl overflow-hidden aspect-[3/4] relative">
        {/* Placeholder for high-end product image handling */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={p.image} 
            alt={p.name} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700" 
            sizes="(max-width: 768px) 100vw, 33vw"
          />
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
              DETAYLARI İNCELE
            </span>
          </div>
        </div>

        {/* Floating Tag */}
        <div className="absolute top-6 right-6 z-20">
          <div className="w-10 h-10 rounded-full glass backdrop-blur-md flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
      </Link>
    </MotionDiv>
  )
}
