import React from 'react'
import { Metadata } from 'next'
import '../styles/globals.css'
import { Outfit } from 'next/font/google'
import Navbar from '@/components/Navbar'
import FloatingButtons from '@/components/FloatingButtons'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Konya Söve & Mantolama | Doruk Söve - En Ucuz ve Premium Çözümler',
  description: 'Konya Söve imalatı ve dış cephe mantolama sistemlerinde öncü firma. En ucuz söve fiyatları ve premium dekoratif panel modelleri ile hizmetinizdeyiz.',
  keywords: [
    'Konya Söve', 'En Ucuz Söve Konya', 'Premium Söve Modelleri', 'Konya Mantolama Fiyatları', 
    'Kaliteli Isı Yalıtım Konya', 'Konya Söve İmalatçıları', 'Ekonomik Dış Cephe Kaplama', 
    'Lüks Söve Tasarımları', 'Konya Söve Satış Noktaları', 'Dekoratif Söve Konya', 
    'Uygun Fiyatlı Mantolama', 'Konya\'nın En İyi Söve Firması', 'Dayanıklı Dış Cephe Süslemesi', 
    'Konya 3D Duvar Paneli', 'Süpürgelik Fiyatları Konya', 'Toptan Söve Konya', 
    'Perakende Söve Konya', 'Konya Isı Yalıtım Sistemleri', 'Modern Bina Kaplama', 
    'Klasik Söve Modelleri', 'Üreticiden Söve Konya', 'Konya Pencere Sövesi', 
    'Kat Silmesi Fiyatları', 'Bina Dış Cephe Estetiği', 'Isı Tasarrufu Sağlayan Söve', 
    'Konya Söve Fabrikası', 'En Kaliteli Söve Konya', 'Hızlı Montaj Söve', 
    'Garantili Mantolama Konya', 'Konya İzolasyon Firmaları', 'Cephe Tasarım Konya', 
    'Konya Köşe Taşı Modelleri', 'Doruk Söve Konya İletişim', 'Konya Dekoratif Yapı Elemanları', 
    'İç Cephe Çıtalama Konya', 'Poliüretan Görünümlü Söve', 'Şık Dış Cephe Modelleri', 
    'Konya Söve Ustası', 'Bina Değerini Artıran Söveler', 'Konya Mantolama Kampanyaları', 
    'Su Geçirmez Söve Konya', 'Yanmaz Mantolama Konya', 'Estetik Isı Yalıtım', 
    'Konya İnşaat Dekorasyon', 'Uzun Ömürlü Söve Üretimi', 'Konya Dış Cephe Boya', 
    'Söve Aksesuarları Konya', 'Konya Yapı Malzemeleri', 'Görkemli Cephe Süsleme', 
    'Doruk Söve Ürün Katalogu'
  ],
  authors: [{ name: 'Doruk Söve' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Konya Söve & Mantolama | Doruk Söve',
    description: 'Konya\'nın en çok tercih edilen söve ve mantolama firması. En ucuz fiyat garantisiyle premium kalite.',
    type: 'website',
    url: 'https://github.com/atiyopya/Doruk-S-ve', // Bu alan domain alındığında güncellenmeli
    locale: 'tr_TR',
    siteName: 'Doruk Söve',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${outfit.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-silver selection:text-obsidian bg-obsidian">
        <Navbar />
        <main className="relative">{children}</main>
        <FloatingButtons />
      </body>
    </html>
  )
}
