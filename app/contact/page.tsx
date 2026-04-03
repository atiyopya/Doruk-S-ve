"use client";
import React from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-silver-dark mb-4 block">İletişim</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">BİZİMLE <br />BAĞLANTI KURUN</h1>
            <p className="text-lg text-silver-dark font-light max-w-xl">
              Projeleriniz için teknik destek, katalog talebi veya özel teklifleriniz için 
              ekibimizle iletişime geçin.
            </p>
          </motion.div>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
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
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Mesajınız Alındı!</h2>
                <p className="text-silver-dark">En kısa sürede oltan44@gmail.com üzerinden size geri dönüş sağlayacağız.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn-outline px-8"
                >
                  Yeni Mesaj Gönder
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" aria-label="İletişim formu">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-silver-dark ml-2">Ad Soyad</label>
                    <input name="name" required className="w-full bg-obsidian/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Ahmet Yılmaz" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-silver-dark ml-2">Email</label>
                    <input name="email" required className="w-full bg-obsidian/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="ahmet@example.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-silver-dark ml-2">Konu</label>
                  <select name="subject" className="w-full bg-obsidian/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none text-white">
                    <option className="bg-obsidian text-white">Teklif Talebi</option>
                    <option className="bg-obsidian text-white">Teknik Destek</option>
                    <option className="bg-obsidian text-white">Katalog İstek</option>
                    <option className="bg-obsidian text-white">Diğer</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-silver-dark ml-2">Mesaj</label>
                  <textarea name="message" required className="w-full bg-obsidian/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-colors" rows={4} placeholder="Size nasıl yardımcı olabiliriz?" />
                </div>
                <button 
                  disabled={status === 'loading'}
                  type="submit" 
                  className={`w-full btn-premium py-4 flex items-center justify-center gap-3 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-obsidian/30 border-t-obsidian animate-spin rounded-full" />
                      GÖNDERİLİYOR...
                    </>
                  ) : 'MESAJI GÖNDER'}
                </button>

                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Bir hata oluştu, lütfen ID'nizi kontrol edin.</p>
                )}
              </form>
            )}
          </motion.div>

          {/* Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="glass-card p-10 rounded-[2rem]">
              <h2 className="text-2xl font-bold text-white mb-8">İletişim Bilgileri</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-silver-dark uppercase tracking-widest mb-1">Merkez Ofis</h4>
                    <p className="text-white font-light">Horozluhan, Güvenli Sk. 20 E, 42000 Selçuklu/Konya</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-silver-dark uppercase tracking-widest mb-1">E-Posta</h4>
                    <p className="text-white font-light">oltan44@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-silver-dark uppercase tracking-widest mb-1">Müşteri Hattı</h4>
                    <p className="text-white font-light">+90 530 440 14 72</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-[2rem] h-[350px] overflow-hidden grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700">
               <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.016335133649!2d32.50337937666249!3d37.9132927719503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08f97229d983d%3A0x1119106282e7f7b6!2sHorozluhan%2C%20G%C3%BCvenli%20Sk.%2020%20E%2C%2042000%2BSel%C3%A7uklu%2FKonya!5e0!3m2!1str!2str!4v1712171400266!5m2!1str!2str" width="100%" height="100%" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
