"use client";
import React from 'react'
import '../styles/globals.css'

import { Outfit } from 'next/font/google'

import Navbar from '@/components/Navbar'
import FloatingButtons from '@/components/FloatingButtons'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${outfit.variable} scroll-smooth`}>
      <head />
      <body className="antialiased selection:bg-silver selection:text-obsidian">
        <Navbar />
        <main className="relative">{children}</main>
        <FloatingButtons />
      </body>
    </html>
  )
}
