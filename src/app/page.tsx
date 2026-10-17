
"use client";

import { useState } from "react";

const navigation = [
  { name: "Dashboard", icon: "▦" },
  { name: "POS / Kasir", icon: "▣" },
  { name: "Transaksi", icon: "⇄" },
  { name: "Menu Produk", icon: "☷" },
  { name: "Inventaris", icon: "▤" },
  { name: "Resep & HPP", icon: "♨" },
  { name: "Pengeluaran", icon: "↗" },
  { name: "Laporan", icon: "▥" },
];

const orders = [
  { id: "#BRK-1024", customer: "Walk-in Customer", items: "Cokelat Keju", total: 22000, status: "Lunas", color: "bg-emerald-100 text-emerald-700" },
  { id: "#BRK-1023", customer: "Walk-in Customer", items: "Cokelat + 2 menu", total: 48000, status: "Lunas", color: "bg-emerald-100 text-emerald-700" },
  { id: "#BRK-1022", customer: "Pesanan Takeaway", items: "Keju Susu", total: 18000, status: "Lunas", color: "bg-emerald-100 text-emerald-700" },
  { id: "#BRK-1021", customer: "Walk-in Customer", items: "Original", total: 12000, status: "Diproses", color: "bg-amber-100 text-amber-700" },
];

const stock = [
  { name: "Roti tawar", quantity: "8 bungkus", percent: 24 },
  { name: "Cokelat meses", quantity: "350 gram", percent: 35 },
  { name: "Keju cheddar", quantity: "200 gram", percent: 18 },
  { name: "Margarin", quantity: "1,2 kg", percent: 65 },
];

const bars = [
  { day: "Sen", height: 42 },
  { day: "Sel", height: 62 },
  { day: "Rab", height: 49 },
  { day: "Kam", height: 76 },
  { day: "Jum", height: 57 },
  { day: "Sab", height: 95 },
  { day: "Min", height: 70 },
];

function rupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function Home() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [period, setPeriod] = useState("7 hari terakhir");

  return (
    <main className="flex min-h-screen bg-[#f8f7f4] text-[#292820]">
      <aside className="hidden w-[245px] shrink-0 border-r border-stone-200 bg-white p-5 md:flex md:flex-col">
        <div className="mb-9 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-2xl">
            🍞
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight">BakarOS</h1>
            <p className="text-xs text-stone-500">Business Management</p>
          </div>
        </div>

        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-stone-400">
          MENU UTAMA
        </p>

        <nav className="flex flex-col gap-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                activeMenu === item.name
                  ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                  : "text-stone-600 hover:bg-orange-50 hover:text-orange-700"
              }`}
            >
              <span className="w-5 text-center text-lg">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl bg-[#292820] p-4 text-white">
          <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
            ✨
          </div>
          <p className="font-semibold">BakarOS Free</p>
          <p className="mt-1 text-xs leading-5 text-stone-300">
            Kelola bisnis roti bakar dalam satu tempat.
          </p>
          <div className="mt-4 h-1.5 rounded-full bg-white/15">
            <div className="h-full w-1/4 rounded-full bg-orange-400" />
          </div>
          <p className="mt-2 text-[10px] text-stone-400">
            Pratinjau antarmuka
          </p>
        </div>
      </aside>

      <section className="min-w-0 flex-1">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 bg-white px-5 py-4 sm:px-8">
          <div>
            <p className="text-xs text-stone-500">Workspace / BakarOS</p>
            <h2 className="mt-1 text-lg font-bold">
              {activeMenu === "Dashboard" ? "Dashboard" : activeMenu}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-stone-500 sm:block">
              ● Demo workspace
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-700">
              BR
            </div>
          </div>
        </header>

        <div className="border-b border-stone-200 bg-white px-4 py-2 md:hidden">
          <div className="flex gap-2 overflow-x-auto">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveMenu(item.name)}
                className={`shrink-0 rounded-lg px-3 py-2 text-xs ${
                  activeMenu === item.name
                    ? "bg-orange-500 text-white"
                    : "bg-stone-100 text-stone-600"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1500px] p-4 sm:p-8">
          {activeMenu !== "Dashboard" ? (
            <div className="rounded-2xl border border-stone-200 bg-white p-8 sm:p-12">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-3xl text-orange-700">
                {navigation.find((item) => item.name === activeMenu)?.icon}
              </div>
              <h3 className="text-2xl font-bold">{activeMenu}</h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-stone-500">
                Halaman ini merupakan bagian dari rancangan BakarOS. Fitur
                tersebut belum terhubung ke database dan akan dikembangkan
                pada tahap berikutnya.
              </p>
              <button
                onClick={() => setActiveMenu("Dashboard")}
                className="mt-6 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                Kembali ke Dashboard
              </button>
            </div>
          ) : (
            <>
              <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm text-stone-500">
                    Jumat, 16 Oktober 2026
                  </p>
                  <h3 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
                    Selamat datang kembali! 👋
                  </h3>
                  <p className="mt-2 text-sm text-stone-500">
                    Berikut gambaran aktivitas bisnis roti bakar kamu.
                  </p>
                </div>
                <button
                  onClick={() => setActiveMenu("POS / Kasir")}
                  className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
                >
                  + Transaksi Baru
                </button>
              </div>

              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { label: "Total Penjualan", value: rupiah(1250000), note: "Contoh data demo", icon: "↗", tint: "bg-orange-100 text-orange-700" },
                  { label: "Total Transaksi", value: "48", note: "Contoh jumlah pesanan", icon: "▣", tint: "bg-blue-100 text-blue-700" },
                  { label: "Rata-rata Pesanan", value: rupiah(26042), note: "Nilai rata-rata demo", icon: "◷", tint: "bg-violet-100 text-violet-700" },
                  { label: "Estimasi Laba Kotor", value: rupiah(475000), note: "Simulasi, bukan laba riil", icon: "↗", tint: "bg-emerald-100 text-emerald-700" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-stone-200 bg-white p-5">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm text-stone-500">{stat.label}</p>
                      <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-lg ${stat.tint}`}>
                        {stat.icon}
                      </span>
                    </div>
                    <p className="mt-4 text-2xl font-black tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs text-stone-400">{stat.note}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
                <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h4 className="font-bold">Ringkasan Penjualan</h4>
                      <p className="mt-1 text-xs text-stone-500">
                        Grafik ilustrasi untuk data mingguan
                      </p>
                    </div>
                    <select
                      value={period}
                      onChange={(event) => setPeriod(event.target.value)}
                      className="rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs outline-none focus:border-orange-400"
                    >
                      <option>7 hari terakhir</option>
                      <option>30 hari terakhir</option>
                    </select>
                  </div>

                  <div className="mt-7 flex h-52 items-end justify-around gap-3 border-b border-stone-200 pb-2">
                    {bars.map((bar) => (
                      <div key={bar.day} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                        <div
                          className={`w-full max-w-12 rounded-t-lg transition-all ${
                            bar.day === "Sab"
                              ? "bg-orange-500"
                              : "bg-orange-100 hover:bg-orange-300"
                          }`}
                          style={{
                            height: `${period === "7 hari terakhir" ? bar.height : Math.min(bar.height + 8, 100)}%`,
                          }}
                          title={`${bar.day}: data ilustrasi`}
                        />
                        <span className="text-xs text-stone-400">{bar.day}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-stone-400">
                    Data grafik belum berasal dari transaksi nyata.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">Stok Perlu Diperiksa</h4>
                    <button
                      onClick={() => setActiveMenu("Inventaris")}
                      className="text-xs font-semibold text-orange-600 hover:text-orange-700"
                    >
                      Lihat stok →
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-stone-500">
                    Contoh persediaan bahan baku
                  </p>
                  <div className="mt-5 flex flex-col gap-5">
                    {stock.map((item) => (
                      <div key={item.name}>
                        <div className="mb-2 flex justify-between gap-3 text-sm">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-xs text-stone-500">{item.quantity}</span>
                        </div>
                        <div className="h-2 rounded-full bg-stone-100">
                          <div
                            className={`h-full rounded-full ${
                              item.percent < 25 ? "bg-red-400" : "bg-orange-400"
                            }`}
                            style={{ width: `${item.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl bg-orange-50 p-3 text-xs leading-5 text-orange-800">
                    ⚠️ Data stok masih berupa ilustrasi. Belum ada pengurangan
                    stok otomatis.
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3 p-5 sm:p-6">
                  <div>
                    <h4 className="font-bold">Transaksi Terbaru</h4>
                    <p className="mt-1 text-xs text-stone-500">
                      Contoh riwayat pesanan
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveMenu("Transaksi")}
                    className="text-sm font-semibold text-orange-600 hover:text-orange-700"
                  >
                    Lihat semua →
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[650px] text-left text-sm">
                    <thead className="bg-stone-50 text-xs text-stone-500">
                      <tr>
                        <th className="px-6 py-3 font-medium">ID Pesanan</th>
                        <th className="px-6 py-3 font-medium">Pelanggan</th>
                        <th className="px-6 py-3 font-medium">Menu</th>
                        <th className="px-6 py-3 font-medium">Total</th>
                        <th className="px-6 py-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-stone-50">
                          <td className="whitespace-nowrap px-6 py-4 font-semibold">{order.id}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-stone-600">{order.customer}</td>
                          <td className="whitespace-nowrap px-6 py-4 text-stone-600">{order.items}</td>
                          <td className="whitespace-nowrap px-6 py-4 font-semibold">{rupiah(order.total)}</td>
                          <td className="px-6 py-4">
                            <span className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${order.color}`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="border-t border-stone-100 px-6 py-4 text-xs text-stone-400">
                  Seluruh angka dan transaksi pada halaman ini adalah data demo.
                </div>
              </div>

              <footer className="py-6 text-center text-xs text-stone-400">
                BakarOS © 2026 · Business management for Indonesian food businesses
              </footer>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
