"use client";
import React from 'react'
import { motion } from 'framer-motion'

export default function DownloadCatalog() {
  const handleDownload = () => {
    const catalogs = [
      { name: 'Doruk-01.pdf', path: '/catalogs/Doruk-01.pdf' },
      { name: 'Doruk-Sove.pdf', path: '/catalogs/Doruk-Sove.pdf' }
    ]

    catalogs.forEach((cat, index) => {
      // Small delay between downloads to prevent browser blocking
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = cat.path;
        link.download = cat.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500);
    });
  }

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05, translateY: -2 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 bg-white text-obsidian rounded-full text-sm font-bold tracking-widest uppercase shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center gap-3"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-4 h-4"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span>Katalogları İndir</span>
    </motion.button>
  )
}
