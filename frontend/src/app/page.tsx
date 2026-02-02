"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [policyModal, setPolicyModal] = useState<'syarat' | 'privasi' | null>(null);
  const [checkStatusModal, setCheckStatusModal] = useState(false);
  const [searchOrderId, setSearchOrderId] = useState("");
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
    { id: 1, rank: "Grandmaster - Epic", price: 3000, priceText: "Rp 3.000 / Bintang", image: "/rank-gm-epic.png", color: "from-blue-400/20 to-blue-600/20" },
    { id: 2, rank: "Epic - Legend", price: 5000, priceText: "Rp 5.000 / Bintang", image: "/rank-epic-legend.png", color: "from-green-400/20 to-emerald-600/20" },
    { id: 3, rank: "Legend - Mythic", price: 6000, priceText: "Rp 6.000 / Bintang", image: "/rank-legend-mythic.png", color: "from-red-400/20 to-red-600/20" },
    { id: 4, rank: "Mythic - Mythic Honor", price: 7000, priceText: "Rp 7.000 / Bintang", image: "/rank-mythic-honor.png", color: "from-yellow-400/20 to-orange-600/20" },
    { id: 5, rank: "Mythic Honor - Glory", price: 9000, priceText: "Rp 9.000 / Bintang", image: "/rank-mythical-glory.png", color: "from-orange-500/20 to-red-700/20" },
    { id: 6, rank: "Glory - Immortal", price: 12000, priceText: "Rp 12.000 / Bintang", image: "/rank-mythical-immortal.png", color: "from-purple-500/20 to-indigo-900/20" },
  ];

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
    <main className="relative flex min-h-screen flex-col items-center p-6 md:p-12 overflow-x-hidden bg-[#050505] font-sans">
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Navbar Shorthand */}
      <nav className="z-20 w-full max-w-6xl flex justify-between items-center py-6 px-8 glass rounded-2xl mb-12 border-brand-primary/20">
        <div className="text-2xl font-black italic tracking-tighter text-white">
          IMON<span className="text-brand-primary">JOKI</span>
        </div>
        <div className="flex gap-8 text-sm font-semibold text-white/70">
          <a href="#services" className="hover:text-brand-primary transition-colors">Harga</a>
          <a href="#testimonials" className="hover:text-brand-primary transition-colors">Testimoni</a>
          <button onClick={() => setCheckStatusModal(true)} className="hover:text-brand-primary transition-colors text-sm font-semibold">Cek Status</button>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <section className="z-10 w-full max-w-6xl px-4 mb-16 md:mb-20">
        <div className="relative w-full aspect-[16/10] md:aspect-[2.5/1] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Banner Content */}
          <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16 lg:px-24">
            <div className="max-w-xs md:max-w-lg text-left space-y-3 md:space-y-6">
              <div className="inline-block px-2 py-1 rounded-md bg-yellow-500 text-black text-[8px] md:text-xs font-black uppercase tracking-widest animate-pulse">
                Terpercaya & Cepat
              </div>
              <h1 className="text-xl md:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] uppercase italic">
                <span className="text-yellow-400">PUSH RANK</span> <br />
                <span className="text-white">TANPA LOSE STREAK</span>
              </h1>
              <p className="text-[10px] md:text-base text-white/90 font-medium max-w-md hidden sm:block">
                Dapatkan rank impianmu sekarang. Tim pro player kami siap membantu kamu naik dengan cepat dan aman.
              </p>
              <div className="flex gap-4 justify-start pt-1 md:pt-2">
                <a href="#services" className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-black rounded-lg font-black text-[10px] md:text-sm hover:scale-105 transition-all shadow-lg shadow-yellow-500/20 active:scale-95 uppercase">
                  Order Sekarang
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing/Ranks */}
      <section id="services" className="z-10 w-full max-w-6xl px-4 mb-20">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 gap-8 text-center lg:text-left">
          <div className="w-full lg:w-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 italic uppercase">Layanan Unggulan</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 text-white">
          {rankServices.map((service) => (
            <div key={service.id} className="glass group p-4 md:p-8 rounded-2xl md:rounded-[2rem] border-white/5 hover:border-brand-primary/30 transition-all hover:translate-y-[-8px] flex flex-col items-center text-center relative overflow-hidden">
              {/* Background Rank Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10`} />

              <div className="w-20 h-20 md:w-36 md:h-36 relative mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={service.image}
                  alt={service.rank}
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                />
              </div>

              <h4 className="text-[10px] sm:text-base md:text-xl font-bold mb-1 md:mb-2 uppercase tracking-wide group-hover:text-brand-primary transition-colors line-clamp-1">{service.rank}</h4>
              <p className="text-brand-primary font-black text-[10px] sm:text-sm md:text-lg mb-3 md:mb-6">{service.priceText}</p>
              <button
                onClick={() => setSelectedPackage(service)}
                className="w-full py-2.5 md:py-4 rounded-xl border border-white/10 bg-white/5 font-black hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all active:scale-95 text-[9px] md:text-base z-10 uppercase tracking-tight">
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="z-10 w-full max-w-6xl px-4 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 italic uppercase">Testimoni Pelanggan</h2>
          <p className="text-white/40 text-sm md:text-base italic">Apa kata mereka yang sudah menggunakan jasa IMON JOKI?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Andi Wijaya", rank: "Mythical Glory", text: "Proses cepat banget, semalam order pagi udah beres. Rekomendasi banget buat yang mau push rank aman!", color: "from-blue-500/20" },
            { name: "Siti Rahma", rank: "Legend to Mythic", text: "Awalnya ragu, tapi ternyata amanah 100%. Adminnya fast respon dan sopan. Mantap IMON JOKI!", color: "from-purple-500/20" },
            { name: "Budi Santoso", rank: "Epic to Legend", text: "Gak sampe seumur jagung udah naik tier. Hero request juga beneran dipake. Thanks bro!", color: "from-orange-500/20" }
          ].map((testi, i) => (
            <div key={i} className={`glass p-8 rounded-3xl border-white/5 relative overflow-hidden group hover:border-brand-primary/30 transition-all`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${testi.color} to-transparent opacity-30 group-hover:opacity-100 transition-opacity -z-10`} />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-white/80 italic mb-6 leading-relaxed">"{testi.text}"</p>
              <div>
                <p className="text-white font-bold">{testi.name}</p>
                <p className="text-brand-primary text-xs font-black uppercase tracking-widest">{testi.rank}</p>
              </div>
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

            <h3 className="text-2xl font-black text-white mb-6 uppercase italic">Masukkan Data Akun</h3>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20">
                <p className="text-[10px] text-brand-primary font-bold uppercase tracking-widest mb-1">Paket Terpilih</p>
                <p className="text-xl font-bold text-white uppercase">{selectedPackage.rank}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Login Via</label>
                  <select
                    onChange={(e) => setFormData({ ...formData, loginVia: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-primary transition-all text-sm appearance-none"
                  >
                    <option value="" className="bg-neutral-900">Pilih Login Via</option>
                    <option value="Moonton" className="bg-neutral-900">Moonton</option>
                    <option value="VK" className="bg-neutral-900">VK</option>
                    <option value="FB" className="bg-neutral-900">Facebook</option>
                    <option value="Tiktok" className="bg-neutral-900">Tiktok</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">User ID & Nick Name</label>
                  <input
                    type="text"
                    placeholder="Masukkan ID & Nick"
                    onChange={(e) => setFormData({ ...formData, userIdNickname: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-primary transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Email/No. Hp/Moonton ID</label>
                  <input
                    type="text"
                    placeholder="Masukkan Email/ID"
                    onChange={(e) => setFormData({ ...formData, emailHpMoontonId: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-primary transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Password</label>
                  <input
                    type="password"
                    placeholder="Masukkan Password"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-primary transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Request Hero (Minimal 3)</label>
                  <input
                    type="text"
                    placeholder="Contoh: Gusion, Fanny, Chou"
                    onChange={(e) => setFormData({ ...formData, requestHero: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-primary transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Jumlah Bintang/Rank</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    onChange={(e) => setFormData({ ...formData, stars: parseInt(e.target.value) || 1 })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-primary transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Catatan Untuk Penjoki</label>
                <textarea
                  placeholder="Masukkan Catatan (Opsional)"
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-primary transition-all text-sm h-20 resize-none"
                />
              </div>

              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-start gap-3">
                <span className="text-yellow-500 text-sm">ⓘ</span>
                <p className="text-[10px] text-yellow-500/80 font-medium italic">Please make sure you fill the correct account data</p>
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
          <button onClick={() => setPolicyModal('syarat')} className="hover:text-white transition-colors">Syarat</button>
          <button onClick={() => setPolicyModal('privasi')} className="hover:text-white transition-colors">Privasi</button>
        </div>
        <div>&copy; 2026 IMON Developer.</div>
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
                <div className="h-1 w-20 bg-brand-primary rounded-full"></div>
              </div>

              <div className="space-y-6 text-white/80 leading-relaxed text-sm md:text-base">
                {policyModal === 'syarat' ? (
                  <>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-brand-primary">01</span>
                        <p>Pengerjaan dilakukan secara profesional oleh tim pro player berperingkat tinggi.</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-brand-primary">02</span>
                        <p><span className="text-brand-primary font-bold">Dilarang login</span> selama proses joki. Jika pelanggan login tanpa izin dan terjadi kekalahan, maka garansi bintang akan hangus.</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-brand-primary">03</span>
                        <p>Pastikan akun tidak dalam status hukuman (Banned/Low Priority) sebelum menyerahkan data login.</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-brand-primary">04</span>
                        <p>Kami menjamin keamanan akun dari pencurian atau pemindahan binding <span className="text-green-400 font-bold">100% Aman</span>.</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-brand-primary">05</span>
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
                  className="w-full py-4 bg-brand-primary text-white hover:bg-brand-primary/80 rounded-xl font-black transition-all outline-none uppercase tracking-wider"
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
      {/* Check Status Modal */}
      {checkStatusModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in zoom-in duration-300">
          <div className="glass w-full max-w-md p-8 md:p-10 rounded-[2rem] border-brand-primary/30 relative">
            <button
              onClick={() => setCheckStatusModal(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white text-3xl transition-colors"
            >
              &times;
            </button>

            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tight mb-2">Cek Status Pesanan</h3>
              <p className="text-white/40 text-xs md:text-sm italic">Masukkan ID pesanan Anda untuk melihat progress</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Contoh: IMON-2024XXXX"
                  value={searchOrderId}
                  onChange={(e) => setSearchOrderId(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-brand-primary transition-all text-center font-bold tracking-widest placeholder:tracking-normal placeholder:font-normal"
                />
              </div>

              <button
                onClick={() => {
                  if (!searchOrderId) return;
                  alert("Pesanan ditemukan! Status: Sedang Proses oleh Tim Pro Player IMON JOKI.");
                }}
                className="w-full py-4 bg-brand-primary text-white hover:bg-brand-primary/80 rounded-xl font-black transition-all shadow-lg shadow-brand-primary/20 uppercase tracking-widest active:scale-95"
              >
                Cari Pesanan
              </button>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <p className="text-[10px] md:text-xs text-white/40 mb-2 italic">Kesulitan menemukan ID pesanan?</p>
                <a
                  href="https://wa.me/62881036365793"
                  target="_blank"
                  className="text-brand-primary font-black text-[10px] md:text-xs uppercase hover:underline"
                >
                  Hubungi Admin Lewat WA
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
