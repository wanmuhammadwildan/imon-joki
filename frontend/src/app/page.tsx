"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [formData, setFormData] = useState({ id: "", server: "", stars: 1 });

  const rankServices = [
    { id: 1, rank: "Warrior - Grandmaster", price: 2000, priceText: "Rp 2.000 / Bintang", color: "from-orange-400 to-orange-700" },
    { id: 2, rank: "Epic - Legend", price: 5000, priceText: "Rp 5.000 / Bintang", color: "from-cyan-400 to-blue-600" },
    { id: 3, rank: "Mythic - Glory", price: 8000, priceText: "Rp 8.000 / Bintang", color: "from-purple-500 to-indigo-900" },
  ];

  const handleOrder = () => {
    const total = selectedPackage.price * formData.stars;
    const message = `Halo IMON JOKI! Saya mau order joki:%0A%0APaket: ${selectedPackage.rank}%0AID: ${formData.id}%0AServer: ${formData.server}%0AStars: ${formData.stars}%0ATotal: Rp ${total.toLocaleString()}`;
    window.open(`https://wa.me/62881036365793?text=${message}`, "_blank");
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center p-6 md:p-12 overflow-x-hidden bg-[#050505] font-sans">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Navbar Shorthand */}
      <nav className="z-20 w-full max-w-6xl flex justify-between items-center py-6 px-8 glass rounded-2xl mb-12 border-brand-primary/20">
        <div className="text-2xl font-black italic tracking-tighter text-white">
          IMON<span className="text-brand-primary">JOKI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-white/70">
          <a href="#services" className="hover:text-brand-primary transition-colors">Harga</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Testimoni</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Cek Status</a>
        </div>
        <button className="px-6 py-2 bg-brand-primary rounded-lg font-bold text-white shadow-lg shadow-brand-primary/20 hover:scale-105 transition-all">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-20 px-4">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block px-4 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-brand-accent text-[10px] md:text-xs font-bold tracking-widest uppercase">
            Terpercaya & Cepat • 24/7 Service
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1.1] text-white drop-shadow-2xl uppercase">
            PUSH RANK <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-cyan-300 to-brand-secondary">
              TANPA LOSE STREAK
            </span>
          </h1>
          <p className="text-sm md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Dapatkan rank impianmu sekarang. Tim pro player kami siap membantu kamu naik dari Warrior ke Mythical Glory dengan cepat dan aman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#services" className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-brand-primary to-blue-700 text-white rounded-xl font-black text-base md:text-lg shadow-2xl shadow-blue-500/20 hover:translate-y-[-2px] transition-all active:scale-95 text-center">
              GAS ORDER SEKARANG
            </a>
            <button className="px-8 md:px-10 py-4 md:py-5 glass text-white rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all active:scale-95">
              CEK PRICELIST
            </button>
          </div>
        </div>
        <div className="relative group flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[60px] md:blur-[100px] group-hover:bg-blue-500/20 transition-all"></div>
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-full lg:max-w-[500px] lg:aspect-square animate-float">
            <Image
              src="/hero-sora.png"
              alt="MLBB Hero Sora"
              fill
              className="object-contain drop-shadow-[0_0_20px_rgba(0,243,255,0.3)] md:drop-shadow-[0_0_30px_rgba(0,243,255,0.3)]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Pricing/Ranks */}
      <section id="services" className="z-10 w-full max-w-6xl px-4 mb-20">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 gap-8 text-center lg:text-left">
          <div className="w-full lg:w-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 italic uppercase">Layanan Unggulan</h2>
            <div className="h-1.5 md:h-2 w-24 md:w-32 bg-brand-primary rounded-full mx-auto lg:mx-0"></div>
          </div>
          <div className="flex gap-4 p-4 glass rounded-2xl items-center border-brand-accent/20 w-fit mx-auto lg:mx-0">
            <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-lg overflow-hidden border border-brand-accent/30">
              <Image src="/hero-hilda.png" alt="Featured Hero" fill className="object-cover" />
            </div>
            <div className="text-left">
              <p className="text-[9px] md:text-[10px] text-brand-accent font-bold uppercase tracking-tighter">Special Promo</p>
              <p className="text-xs md:text-sm text-white font-bold leading-tight uppercase">Joki Mythic <br /> <span className="text-green-400">Hemat 20%</span></p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-white">
          {rankServices.map((service) => (
            <div key={service.id} className="glass group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-white/5 hover:border-brand-primary/30 transition-all hover:translate-y-[-8px] flex flex-col items-center text-center">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 md:mb-6 bg-gradient-to-br ${service.color} p-0.5 group-hover:scale-110 transition-transform`}>
                <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-2xl md:text-3xl">
                  {service.id === 1 ? "⚔️" : service.id === 2 ? "🛡️" : "👑"}
                </div>
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 uppercase tracking-wide">{service.rank}</h4>
              <p className="text-brand-primary font-black text-base md:text-lg mb-4 md:mb-6">{service.priceText}</p>
              <button
                onClick={() => setSelectedPackage(service)}
                className="w-full py-3 md:py-4 rounded-xl border border-white/10 bg-white/5 font-bold hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all active:scale-95 text-sm md:text-base">
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal/Form Section */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="glass w-full max-w-md p-8 rounded-3xl border-brand-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <button onClick={() => setSelectedPackage(null)} className="text-white/50 hover:text-white text-2xl">&times;</button>
            </div>

            <h3 className="text-2xl font-black text-white mb-6 uppercase italic">Detail Pesanan</h3>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-[10px] text-brand-primary font-bold uppercase tracking-widest mb-1">Paket Terpilih</p>
                <p className="text-xl font-bold text-white uppercase">{selectedPackage.rank}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 appearance-none">ID GAME</label>
                  <input
                    type="text"
                    placeholder="12345678"
                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60">SERVER</label>
                  <input
                    type="text"
                    placeholder="(1234)"
                    onChange={(e) => setFormData({ ...formData, server: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/60 uppercase">Jumlah Bintang/Rank</label>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  onChange={(e) => setFormData({ ...formData, stars: parseInt(e.target.value) || 1 })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-primary transition-colors"
                />
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                <p className="text-sm text-white/60">Total Pembayaran:</p>
                <p className="text-2xl font-black text-brand-primary">Rp {(selectedPackage.price * formData.stars).toLocaleString()}</p>
              </div>

              <button
                onClick={handleOrder}
                className="w-full py-5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-2xl font-black text-lg shadow-xl shadow-brand-primary/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3 mt-4 text-center">
                <span className="text-2xl">💬</span> PESAN VIA WHATSAPP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="z-10 w-full max-w-6xl py-8 md:py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 px-8 text-white/40 text-[10px] md:text-sm text-center md:text-left">
        <div className="font-black italic text-xl text-white">
          IMON<span className="text-brand-primary">JOKI</span>
        </div>
        <div className="flex gap-6 md:gap-8">
          <a href="#" className="hover:text-white transition-colors">Syarat</a>
          <a href="#" className="hover:text-white transition-colors">Privasi</a>
        </div>
        <div>&copy; 2026 IMON Developer.</div>
      </footer>
    </main>
  );
}
