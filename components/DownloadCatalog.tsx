"use client";
import React from 'react'
import { motion } from 'framer-motion'

export default function DownloadCatalog() {
  const catalogs = [
    { name: 'Doruk 01 Kataloğu', path: '/catalogs/Doruk-01.pdf', id: 'cat1' },
    { name: 'Doruk Söve Kataloğu', path: '/catalogs/Doruk-Sove.pdf', id: 'cat2' }
  ]

  return (
    <div className="flex flex-wrap gap-4 items-center">
      {catalogs.map((cat) => (
        <motion.a
          key={cat.id}
          href={cat.path}
          download
          whileHover={{ scale: 1.05, translateY: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-6 py-3 rounded-2xl glass shadow-lg border border-white/20 hover:border-white/40 transition-all duration-300 group"
        >
          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5 text-red-600"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <polyline points="9 15 12 18 15 15" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-800 tracking-tight">{cat.name}</span>
            <span className="text-[10px] uppercase text-gray-500 font-medium tracking-wider">PDF İndir</span>
          </div>
        </motion.a>
      ))}
    </div>
  )
}
