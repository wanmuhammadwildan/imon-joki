"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [policyModal, setPolicyModal] = useState<'syarat' | 'privasi' | null>(null);
  const [isConfirmingOrder, setIsConfirmingOrder] = useState(false);
  const [formData, setFormData] = useState({
    loginVia: "",
    userIdNickname: "",
    emailHpMoontonId: "",
    password: "",
    requestHero: "",
    notes: "",
    stars: 1
  });

  const rankServices = [
    { id: 1, rank: "Grandmaster", price: 3000, priceText: "Rp 3.000 / Bintang", ranks: ["Grandmaster"] },
    { id: 2, rank: "Epic", price: 5000, priceText: "Rp 5.000 / Bintang", ranks: ["Epic"] },
    { id: 3, rank: "Legend", price: 6000, priceText: "Rp 6.000 / Bintang", ranks: ["Legend"] },
    { id: 4, rank: "Mythic", price: 7000, priceText: "Rp 7.000 / Bintang", ranks: ["Mythic"] },
    { id: 5, rank: "Mythical Honor", price: 9000, priceText: "Rp 9.000 / Bintang", ranks: ["Mythical Honor"] },
    { id: 6, rank: "Glory", price: 12000, priceText: "Rp 12.000 / Bintang", ranks: ["Mythical Glory"] },
  ];

  const getRankImage = (rank: string) => {
    const images: Record<string, string> = {
      "Warrior": "/mlbb-ranks-sprite.png", // Fallback to sprite for low ranks
      "Elite": "/mlbb-ranks-sprite.png",
      "Master": "/mlbb-ranks-sprite.png",
      "Grandmaster": "/rank-gm-v6.png",
      "Epic": "/rank-epic-v6.png",
      "Legend": "/rank-legend-v6.png",
      "Mythic": "/rank-mythic-v6.png",
      "Mythical Honor": "/rank-honor-v6.png",
      "Mythical Glory": "/rank-glory-v6.png",
      "Mythical Immortal": "/rank-immortal-clean.png", // Will try to fix this one
    };
    return images[rank] || "/rank-gm-clean.png";
  };

  const getRankSettings = (rank: string) => {
    const settings: Record<string, { pos: string; size: string }> = {
      "Warrior": { pos: "0% 25%", size: "600%" },
      "Elite": { pos: "20% 25%", size: "600%" },
      "Master": { pos: "40% 25%", size: "600%" },
      // The rest use individual images
      "Grandmaster": { pos: "0% 0%", size: "100%" },
      "Epic": { pos: "0% 0%", size: "100%" },
      "Legend": { pos: "0% 0%", size: "100%" },
      "Mythic": { pos: "0% 0%", size: "100%" },
      "Mythical Honor": { pos: "0% 0%", size: "100%" },
      "Mythical Glory": { pos: "0% 0%", size: "100%" },
      "Mythical Immortal": { pos: "0% 0%", size: "100%" },
    };
    return settings[rank] || { pos: "0% 0%", size: "100%" };
  };

  const handleOrder = () => {
    setIsConfirmingOrder(true);
    setPolicyModal('syarat');
  };

  const finalizeWhatsAppOrder = () => {
    const total = selectedPackage.price * formData.stars;
    const message = `Halo IMON JOKI! Saya mau order joki:%0A%0A` +
      `*FORMAT ORDER JOKI*%0A` +
      `------------------------%0A` +
      `* Paket: ${selectedPackage.rank}%0A` +
      `* Login Via: ${formData.loginVia}%0A` +
      `* Email/Moonton ID: ${formData.emailHpMoontonId}%0A` +
      `* Password: ${formData.password}%0A` +
      `* Nickname: ${formData.userIdNickname}%0A` +
      `* Request Hero: ${formData.requestHero}%0A` +
      `* Catatan: ${formData.notes}%0A` +
      `* Jumlah Bintang: ${formData.stars}%0A` +
      `------------------------%0A` +
      `*Total Pembayaran:* Rp ${total.toLocaleString()}`;
    window.open(`https://wa.me/62881036365793?text=${message}`, "_blank");
    setPolicyModal(null);
    setIsConfirmingOrder(false);
    setSelectedPackage(null);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center py-6 md:py-12 overflow-x-hidden bg-[#050608] font-sans">
      {/* Background Glow */}
      <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[60%] h-[60%] bg-purple-600/5 rounded-full blur-[150px]" />

      {/* Lightning Effects */}
      <div className="fixed top-0 left-0 w-1 md:w-2 h-screen bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-40 blur-sm z-0 shadow-[0_0_40px_rgba(34,211,238,0.8)] animate-pulse" />
      <div className="fixed top-0 left-0 w-[2px] h-screen bg-white opacity-60 z-0 blur-[1px] animate-pulse" />

      <div className="fixed top-0 right-0 w-1 md:w-2 h-screen bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-40 blur-sm z-0 shadow-[0_0_40px_rgba(249,115,22,0.8)] animate-pulse" />
      <div className="fixed top-0 right-0 w-[2px] h-screen bg-white opacity-60 z-0 blur-[1px] animate-pulse" />

      {/* Lightning Strike Sparkles */}
      <div className="fixed top-[20%] left-0 w-24 md:w-32 h-64 bg-cyan-400/20 blur-[80px] md:blur-[100px] animate-pulse pointer-events-none" />
      <div className="fixed bottom-[20%] right-0 w-24 md:w-32 h-64 bg-orange-500/20 blur-[80px] md:blur-[100px] animate-pulse pointer-events-none" />

      <div className="w-full max-w-6xl px-6 md:px-12">
        <nav className="z-20 w-full flex justify-between items-center py-6 px-8 glass rounded-2xl mb-12 border-brand-primary/20 bg-black/40 backdrop-blur-md">
          <div className="text-2xl font-black italic tracking-tighter text-white">
            IMON<span className="text-cyan-400">JOKI</span>
          </div>
        </nav>
      </div>

      {/* Hero Banner Section */}
      <section className="z-10 w-full max-w-[1400px] px-4 md:px-12 mb-12 md:mb-24">
        <div className="relative w-full aspect-[1.8/1] md:aspect-[3/1] lg:aspect-[3.5/1] rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
          {/* Background Hero Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero-landscape.png"
              alt="MLBB Heroes Battle"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Banner Content */}
          <div className="absolute inset-0 flex items-center justify-center px-8 md:px-16 lg:px-24">
            <div className="max-w-xs md:max-w-2xl text-center flex flex-col items-center space-y-3 md:space-y-6">
              <div className="inline-block px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-[10px] md:text-sm font-black uppercase tracking-[0.2em]">
                Terpercaya & Cepat
              </div>
              <h1 className="text-xl md:text-5xl lg:text-7xl font-black leading-tight text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] uppercase italic">
                <span className="text-cyan-400">PUSH RANK</span> <br />
                <span className="text-white">TANPA LOSE STREAK</span>
              </h1>
              <p className="text-[10px] md:text-lg text-white/70 font-medium max-w-[280px] md:max-w-lg">
                Dapatkan rank impianmu sekarang. Tim pro player kami siap membantu kamu naik dengan cepat dan aman.
              </p>
              <div className="flex gap-4 justify-center pt-1 md:pt-2">
                <a href="#services" className="px-6 py-3 md:px-14 md:py-6 bg-cyan-500 text-black rounded-xl font-black text-[10px] md:text-xl hover:scale-105 transition-all shadow-xl shadow-cyan-500/40 active:scale-95 uppercase tracking-tight">
                  Order Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rank Services Section */}
      <section id="services" className="z-10 w-full max-w-6xl px-6 md:px-12 mb-20 md:mb-32">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">LAYANAN UNGGULAN</h2>
          <div className="h-1.5 w-24 bg-cyan-500 rounded-full mx-auto lg:mx-0"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 text-white">
          {rankServices.map((service) => (
            <div key={service.id} className="bg-[#0E1016] group p-4 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 hover:border-cyan-500/40 transition-all duration-500 hover:translate-y-[-10px] flex flex-col items-center text-center relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

              <div className="flex items-center justify-center mb-4 h-32 md:h-64 group-hover:scale-105 transition-transform duration-700 ease-out z-10">
                <div className="relative w-32 h-32 md:w-64 md:h-64">
                  {/* Square Decorative Frame */}
                  <div className="absolute inset-0 rounded-[2rem] border border-white/10 group-hover:border-cyan-500/40 transition-all duration-500 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={getRankImage(service.ranks[0])}
                        alt={service.rank}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 200px, 300px"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-1 z-20 relative bg-[#0E1016]/80 backdrop-blur-sm -mt-3 py-1.5 px-3 rounded-lg border border-white/5 shadow-2x">
                <h4 className="text-xs md:text-2xl font-black uppercase italic tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-md">{service.rank}</h4>
                <p className="text-cyan-400 font-bold text-[8px] md:text-lg tracking-wide">{service.priceText}</p>
              </div>

              <button
                onClick={() => setSelectedPackage(service)}
                className="w-full py-4 md:py-7 rounded-xl md:rounded-[1.5rem] bg-[#1C1F2A] text-white font-black hover:bg-cyan-500 hover:text-black transition-all duration-300 active:scale-95 text-[9px] md:text-base uppercase tracking-[0.15em] md:tracking-[0.25em] z-10 border border-white/5 shadow-2xl group-hover:shadow-cyan-500/20 mt-4">
                Pilih
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal/Form Section */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[#12141C] w-full max-w-md p-8 md:p-10 rounded-2xl border border-cyan-500/20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-6">
              <button
                onClick={() => setSelectedPackage(null)}
                className="text-white/30 hover:text-white transition-colors text-3xl"
              >
                &times;
              </button>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 uppercase italic tracking-tight pl-1">Data Pesanan</h3>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
                <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1">Paket Terpilih</p>
                <p className="text-xl font-black text-white uppercase italic">{selectedPackage.rank}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-wider ml-1">Login Via</label>
                  <select
                    onChange={(e) => setFormData({ ...formData, loginVia: e.target.value })}
                    className="w-full bg-[#1C1F2A] border border-white/5 rounded-xl px-4 py-4 text-white outline-none focus:border-cyan-500 transition-all text-sm appearance-none shadow-inner"
                  >
                    <option value="" className="bg-neutral-900">Pilih Platform</option>
                    <option value="Moonton" className="bg-neutral-900">Moonton</option>
                    <option value="VK" className="bg-neutral-900">VK</option>
                    <option value="FB" className="bg-neutral-900">Facebook</option>
                    <option value="Tiktok" className="bg-neutral-900">Tiktok</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-wider ml-1">User ID & Nick</label>
                  <input
                    type="text"
                    placeholder="Contoh: 12345678 (1234)"
                    onChange={(e) => setFormData({ ...formData, userIdNickname: e.target.value })}
                    className="w-full bg-[#1C1F2A] border border-white/5 rounded-xl px-4 py-4 text-white outline-none focus:border-cyan-500 transition-all text-sm shadow-inner placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-wider ml-1">Email / Moonton ID</label>
                  <input
                    type="text"
                    placeholder="akun@email.com"
                    onChange={(e) => setFormData({ ...formData, emailHpMoontonId: e.target.value })}
                    className="w-full bg-[#1C1F2A] border border-white/5 rounded-xl px-4 py-4 text-white outline-none focus:border-cyan-500 transition-all text-sm shadow-inner placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-wider ml-1">Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-[#1C1F2A] border border-white/5 rounded-xl px-4 py-4 text-white outline-none focus:border-cyan-500 transition-all text-sm shadow-inner placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-wider ml-1">Request Hero</label>
                  <input
                    type="text"
                    placeholder="Gusion, Chou, Fanny"
                    onChange={(e) => setFormData({ ...formData, requestHero: e.target.value })}
                    className="w-full bg-[#1C1F2A] border border-white/5 rounded-xl px-4 py-4 text-white outline-none focus:border-cyan-500 transition-all text-sm shadow-inner placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/40 uppercase tracking-wider ml-1">Jumlah Bintang</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    onChange={(e) => setFormData({ ...formData, stars: parseInt(e.target.value) || 1 })}
                    className="w-full bg-[#1C1F2A] border border-white/5 rounded-xl px-4 py-4 text-white outline-none focus:border-cyan-500 transition-all text-sm shadow-inner"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                <p className="text-sm font-bold text-white/40 uppercase tracking-wider">Total Harga</p>
                <p className="text-3xl font-black text-cyan-400 italic">Rp {(selectedPackage.price * formData.stars).toLocaleString()}</p>
              </div>

              <button
                onClick={handleOrder}
                className="w-full py-5 bg-cyan-500 text-black rounded-2xl font-black text-lg shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-3 mt-4 uppercase tracking-tighter">
                <span className="text-2xl">💬</span> ORDER VIA WHATSAPP
              </button>

              <p className="text-center text-[9px] text-white/30 uppercase tracking-[0.2em] mt-2">Pengerjaan Aman & Terpercaya 100%</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="z-10 w-full max-w-6xl py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 px-6 md:px-12 text-white/40 text-[11px] text-center md:text-left">
        <div className="font-black italic text-2xl text-white tracking-tighter">
          IMON<span className="text-cyan-400">JOKI</span>
        </div>
        <div className="flex gap-10 font-bold uppercase tracking-widest">
          <button onClick={() => setPolicyModal('syarat')} className="hover:text-cyan-400 transition-colors">Syarat</button>
          <button onClick={() => setPolicyModal('privasi')} className="hover:text-cyan-400 transition-colors">Privasi</button>
        </div>
        <div className="opacity-50 font-medium font-mono uppercase tracking-tighter">
          &copy; 2026 IMON Developer. All Rights Reserved.
        </div>
      </footer>

      {/* Policy Modal */}
      {policyModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="glass w-full max-w-2xl p-8 md:p-12 rounded-[2rem] border-brand-primary/30 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setPolicyModal(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white text-3xl transition-colors"
            >
              &times;
            </button>

            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tight">
                  {policyModal === 'syarat' ? 'Syarat & Ketentuan' : 'Kebijakan Privasi'}
                </h3>
                <div className="h-1.5 w-20 bg-cyan-500 rounded-full"></div>
              </div>

              <div className="space-y-6 text-white/80 leading-relaxed text-sm md:text-base">
                {policyModal === 'syarat' ? (
                  <>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-cyan-400">01</span>
                        <p>Pengerjaan dilakukan secara profesional oleh tim pro player berperingkat tinggi.</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-cyan-400">02</span>
                        <p><span className="text-cyan-400 font-bold">Dilarang login</span> selama proses joki. Jika pelanggan login tanpa izin dan terjadi kekalahan, maka garansi bintang akan hangus.</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-cyan-400">03</span>
                        <p>Pastikan akun tidak dalam status hukuman (Banned/Low Priority) sebelum menyerahkan data login.</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-cyan-400">04</span>
                        <p>Kami menjamin keamanan akun dari pencurian atau pemindahan binding <span className="text-green-400 font-bold">100% Aman</span>.</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-cyan-400">05</span>
                        <p>Pesanan yang sudah dibayar dan sedang diproses tidak dapat dibatalkan (No Refund).</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-brand-accent">💎</span>
                        <p>Tim kami <span className="text-brand-accent font-bold">tidak akan menyentuh</span> atau menghabiskan Diamond, Magic Core, Fragment, atau BP milik pelanggan tanpa izin tertulis.</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-brand-accent">🔒</span>
                        <p>Data login (Email/ID/Password) hanya dipegang oleh admin dan eksekutor terkait, serta dirahasiakan sepenuhnya.</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-brand-accent">🚫</span>
                        <p>Kami tidak akan mengubah password, email, atau melakukan bind akun pihak ketiga ke akun pelanggan.</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-brand-accent">🧹</span>
                        <p>Semua data login akan dihancurkan secara permanen dari sistem kami segera setelah pesanan selesai.</p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="pt-8 border-t border-white/5">
                <button
                  onClick={() => {
                    if (isConfirmingOrder && policyModal === 'syarat') {
                      finalizeWhatsAppOrder();
                    } else {
                      setPolicyModal(null);
                      setIsConfirmingOrder(false);
                    }
                  }}
                  className="w-full py-5 bg-cyan-500 text-black hover:bg-cyan-400 rounded-2xl font-black transition-all outline-none uppercase tracking-widest text-sm shadow-lg shadow-cyan-500/20"
                >
                  {isConfirmingOrder && policyModal === 'syarat' ? 'Setujui & Kirim Pesanan' : 'Saya Mengerti'}
                </button>
                {isConfirmingOrder && (
                  <button
                    onClick={() => {
                      setPolicyModal(null);
                      setIsConfirmingOrder(false);
                    }}
                    className="w-full mt-4 py-2 text-white/50 hover:text-white text-xs font-bold transition-colors"
                  >
                    Batalkan
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
