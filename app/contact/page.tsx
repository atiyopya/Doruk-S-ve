"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const MotionDiv = motion.div as any;

  // BURAYA FORMSPREE'DEN ALACAĞINIZ ID'Yİ YAZIN (Örn: "mqknzjzb")
  const FORMSPREE_ID = "mpqoyjyq";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    setStatus('loading');
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen pt-40 pb-24">
      <div className="container px-6 mx-auto">
        <header className="max-w-3xl mb-24">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-silver-dark mb-4 block">İletişim</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">BİZİMLE <br />BAĞLANTI KURUN</h1>
            <p className="text-lg text-silver-dark font-light max-w-xl">
              Projeleriniz için teknik destek, katalog talebi veya özel teklifleriniz için 
              ekibimizle iletişime geçin.
            </p>
          </MotionDiv>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <MotionDiv 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-10 rounded-[2rem] border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            
            {status === 'success' ? (
              <MotionDiv 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Mesajınız Alındı!</h2>
                <p className="text-silver-dark">En kısa sürede oltan44@gmail.com adresinden size dönüş sağlayacağız.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-silver transition-colors"
                >
                  Yeni Mesaj Gönder
                </button>
              </MotionDiv>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-silver-dark ml-1">Ad Soyad</label>
                    <input 
                      name="name"
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-silver-dark ml-1">E-Posta</label>
                    <input 
                      name="email"
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-silver-dark ml-1">Konu</label>
                  <input 
                    name="subject"
                    required
                    type="text" 
                    placeholder="Ürün Bilgisi / Teklif Talebi"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-silver-dark ml-1">Mesajınız</label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20 resize-none"
                  ></textarea>
                </div>
                
                {status === 'error' && (
                  <div className="text-red-400 text-sm font-medium bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                    Bir hata oluştu. Lütfen tekrar deneyin.
                  </div>
                )}

                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-silver transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3"
                >
                  {status === 'loading' ? (
                    'GÖNDERİLİYOR...'
                  ) : (
                    <>
                      MESAJI GÖNDER
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </MotionDiv>

          {/* Contact Info */}
          <MotionDiv 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl space-y-6">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-silver-dark text-xs font-bold uppercase tracking-widest mb-1">Telefon</h3>
                  <a href="tel:+905304401472" className="text-white text-xl font-medium hover:text-silver transition-colors">530 440 14 72</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-silver-dark text-xs font-bold uppercase tracking-widest mb-1">E-Posta</h3>
                  <a href="mailto:oltan44@gmail.com" className="text-white text-xl font-medium hover:text-silver transition-colors">oltan44@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-silver-dark text-xs font-bold uppercase tracking-widest mb-1">Adres</h3>
                  <p className="text-white text-lg font-light leading-snug">Horozluhan, Güvenli Sk. 20 E, 42000 Selçuklu/Konya</p>
                </div>
              </div>
            </div>

            {/* Social & WhatsApp Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://share.google/AmUEjy7xbspuBxBAl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="text-blue-400 w-6 h-6" />
                </div>
                <span className="text-white text-sm font-bold uppercase tracking-widest">Konum Al</span>
              </a>
              <a 
                href="https://www.instagram.com/konya_uv_baski_doruk_sove_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="text-purple-400 w-6 h-6" />
                </div>
                <span className="text-white text-sm font-bold uppercase tracking-widest">Instagram</span>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/905304401472" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5c] p-6 rounded-3xl flex items-center justify-center gap-4 transition-all shadow-xl group"
            >
              <MessageCircle className="text-white w-8 h-8 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest leading-none mb-1">WhatsApp'tan Yazın</p>
                <p className="text-white text-lg font-black tracking-tighter">HIZLI TEKLİF ALIN</p>
              </div>
            </a>
          </MotionDiv>
        </div>
      </div>
    </div>
  )
}
