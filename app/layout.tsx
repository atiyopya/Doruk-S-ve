import React from 'react'
import '../styles/globals.css'
import type { Metadata } from 'next'

import Navbar from '@/components/Navbar'
import FloatingButtons from '@/components/FloatingButtons'

export const metadata: Metadata = {
  title: 'Konya Söve & Mantolama | DORUK SÖVE - Profesyonel Çözümler',
  description: 'Konya Doruk Söve ile dış cephe mantolama, söve ve dekoratif çözümler. Kaliteli işçilik ve en uygun fiyatlarla hizmetinizdeyiz.',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased font-sans bg-obsidian">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FloatingButtons />
      </body>
    </html>
  )
}
