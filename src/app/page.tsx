import Image from "next/image";

const categories = [
  "Basket FIBA",
  "Voli FIVB",
  "Futsal FIFA",
  "Badminton BWF",
  "Padel FIP",
  "Tenis ITF",
  "Kursi Wasit",
];

const featuredProducts = [
  {
    name: "Ring Basket Portabel MS V1",
    price: "Mulai dari Rp 7.499.000",
    sale: "Rp 7.274.030",
    save: "Hemat Rp 224.970",
    tag: "FIBA Basketball",
  },
  {
    name: "Tiang Voli Portable",
    price: "Rp 5.499.000",
    sale: "Rp 5.334.030",
    save: "Hemat Rp 164.970",
    tag: "FIVB Volleyball",
  },
  {
    name: "Tiang Gawang Futsal",
    price: "Rp 4.499.000",
    sale: "Rp 4.364.030",
    save: "Hemat Rp 134.970",
    tag: "FIFA Sepak Bola",
  },
  {
    name: "Tiang Badminton Portable",
    price: "Rp 3.499.000",
    sale: "Rp 3.394.030",
    save: "Hemat Rp 104.970",
    tag: "BWF Badminton",
  },
  {
    name: "Tiang Padel",
    price: "Rp 2.499.000",
    sale: "Rp 2.424.030",
    save: "Hemat Rp 74.970",
    tag: "FIP Padel",
  },
  {
    name: "Tiang Tenis",
    price: "Hubungi Admin",
    sale: "Custom Penawaran",
    save: "ITF Tenis",
    tag: "ITF Tennis",
  },
];

const stats = [
  { value: "15+", title: "Tahun Pengalaman", description: "Di bidang fabrikasi besi" },
  { value: "50+", title: "Project Selesai", description: "Skala personal hingga institusi" },
  { value: "20+", title: "Institusi Dilayani", description: "Sekolah, komersial & perbankan" },
  { value: "7", title: "Cabang Olahraga", description: "Basket, voli, futsal & lainnya" },
];

const clientLogos = [
  "SMAN 37 Jakarta",
  "SDN Cilincing",
  "SMA Wardaya",
  "AEON Bekasi",
  "Bank BRI",
];

function SectionHeader({
  label,
  title,
  action,
}: {
  label: string;
  title: string;
  action?: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-3">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d94f1d]">
          {label}
        </p>
        <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h2>
      </div>
      {action ? (
        <a
          href="#"
          className="text-sm font-bold uppercase tracking-[0.16em] text-slate-700 transition hover:text-slate-950"
        >
          {action}
        </a>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f3ea] text-slate-900">
      <header className="border-b border-slate-900/10 bg-[#f7f3ea]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-900/10 bg-white">
              <Image
                src="/images/brand/logo-ms.jpg"
                alt="Logo Maya Sport"
                fill
                className="object-cover"
                sizes="48px"
                priority
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Peralatan Olahraga
              </p>
              <p className="text-lg font-black tracking-tight text-slate-950">
                Maya Sport
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#produk" className="transition hover:text-slate-950">
              Produk
            </a>
            <a href="#project" className="transition hover:text-slate-950">
              Project
            </a>
            <a href="#faq" className="transition hover:text-slate-950">
              FAQ
            </a>
            <a href="#tentang" className="transition hover:text-slate-950">
              Tentang
            </a>
            <a href="#kontak" className="transition hover:text-slate-950">
              Kontak
            </a>
          </nav>

          <a
            href="https://wa.me/6280000000000"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-[#d94f1d]"
          >
            Konsultasi
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="rounded-[2rem] border border-slate-900/10 bg-white/70 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-10 rounded-[1.6rem] bg-[#f7f3ea] p-6 lg:grid lg:grid-cols-[1fr_0.92fr] lg:p-10">
              <div className="space-y-7">
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-slate-600">
                    Bekasi, Jawa Barat
                  </p>
                  <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
                    Maya Sport
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-700">
                    Pabrik sekaligus penjual langsung peralatan olahraga standar
                    kompetisi di Bekasi. Dari tiang voli, ring basket, hingga
                    kursi wasit, semua kami produksi sendiri. Gratis konsultasi,
                    custom sesuai kebutuhan dan budget.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Produksi Sendiri",
                    "Custom Order",
                    "Harga Tangan Pertama",
                    "Kualitas Terjamin",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-900/10 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#produk"
                    className="rounded-full bg-slate-950 px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-[#d94f1d]"
                  >
                    Lihat Katalog
                  </a>
                  <a
                    href="https://wa.me/6280000000000"
                    className="rounded-full border border-slate-900/15 bg-white px-6 py-4 text-center text-sm font-bold text-slate-950 transition hover:border-slate-950"
                  >
                    Konsultasi Gratis
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">
                  <span>Tersedia di</span>
                  <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Image
                      src="/images/references/shopee.png"
                      alt="Shopee"
                      width={24}
                      height={24}
                    />
                    <span>Shopee</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Image
                      src="/images/references/whatsapp.png"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                    />
                    <span>WhatsApp</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-900/10 bg-slate-950">
                <Image
                  src="/images/references/hero-poster.webp"
                  alt="Poster peralatan olahraga Maya Sport"
                  width={1080}
                  height={1080}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="produk"
          className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-10"
        >
          <div className="rounded-[2rem] border border-slate-900/10 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d94f1d]">
              Kategori Produk
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="rounded-full border border-slate-900/10 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <div className="space-y-10">
            <SectionHeader
              label="Produk Unggulan"
              title="Pilihan Terpopuler"
              action="Lihat Semua →"
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featuredProducts.map((product) => (
                <article
                  key={product.name}
                  className="rounded-[2rem] border border-slate-900/10 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]"
                >
                  <div className="mb-5 rounded-[1.5rem] bg-[linear-gradient(135deg,#1e293b,#475569)] p-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/65">
                      {product.tag}
                    </p>
                    <div className="mt-8 h-28 rounded-[1.2rem] border border-white/10 bg-white/6" />
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-slate-950">
                    {product.name}
                  </h3>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-slate-400 line-through">
                      {product.price}
                    </p>
                    <p className="text-2xl font-black tracking-tight text-slate-950">
                      {product.sale}
                    </p>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d94f1d]">
                      {product.save}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="project"
          className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 lg:py-16"
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-[2rem] border border-slate-900/10 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              >
                <p className="text-5xl font-black tracking-tight text-slate-950">
                  {stat.value}
                </p>
                <h3 className="mt-4 text-xl font-black tracking-tight text-slate-950">
                  {stat.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white lg:py-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#ff8a61]">
                Testimoni Klien
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Dipercaya berbagai institusi
              </h2>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-lg leading-9 text-white/86">
                “Hasil pengerjaan ring basket dan fasilitas olahraga sangat
                memuaskan. Material kuat, finishing rapi, dan tim Maya Sport
                sangat profesional dalam setiap tahap pengerjaan.”
              </p>

              <div className="mt-8 space-y-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
                <p>Ring Basket & Fasilitas Olahraga</p>
                <p>Bapak Kepala Sekolah</p>
                <p>SMAN 37 Jakarta</p>
                <p>Pendidikan</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="rounded-[2rem] border border-slate-900/10 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#d94f1d]">
              Klien yang telah kami layani
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {clientLogos.map((client) => (
                <div
                  key={client}
                  className="rounded-full border border-slate-900/10 bg-[#f7f3ea] px-5 py-3 text-sm font-semibold text-slate-700"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-12 text-white shadow-[0_26px_80px_rgba(15,23,42,0.16)] lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Siap mulai project Anda?
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                  Konsultasi gratis, custom order tersedia, pengiriman ke
                  seluruh Indonesia.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="https://wa.me/6280000000000"
                  className="rounded-full bg-[#d94f1d] px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Konsultasi via WhatsApp
                </a>
                <a
                  href="#produk"
                  className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Lihat Katalog Lengkap
                </a>
                <a
                  href="#project"
                  className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
                >
                  Lihat Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="tentang"
        className="border-t border-slate-900/10 bg-white"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="flex items-start gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-900/10 bg-[#f7f3ea]">
              <Image
                src="/images/brand/logo-ms.jpg"
                alt="Logo Maya Sport"
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-black tracking-tight text-slate-950">
                Solusi fabrikasi besi dan peralatan olahraga
              </h3>
              <p className="max-w-xl text-sm leading-7 text-slate-600">
                Melayani kebutuhan proyek institusi, komersial, dan custom
                dengan pengerjaan rapi, presisi, dan siap digunakan.
              </p>
              <p className="text-sm font-semibold text-slate-500">
                Bekasi, Jawa Barat · Sukatani, Cikarang
              </p>
              <p className="text-sm font-semibold text-slate-500">
                Fabrikasi Besi · Peralatan Olahraga · Project Custom
              </p>
            </div>
          </div>

          <div
            id="kontak"
            className="grid gap-2 text-sm font-semibold text-slate-600 sm:text-right"
          >
            <a href="#produk" className="transition hover:text-slate-950">
              Katalog Produk
            </a>
            <a href="#project" className="transition hover:text-slate-950">
              Portfolio Project
            </a>
            <a href="#faq" className="transition hover:text-slate-950">
              FAQ
            </a>
            <a href="#tentang" className="transition hover:text-slate-950">
              Tentang Kami
            </a>
            <a href="#kontak" className="transition hover:text-slate-950">
              Kontak
            </a>
            <a
              href="https://wa.me/6280000000000"
              className="transition hover:text-slate-950"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-slate-900/10">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p>Copyright © 2026 Maya Sport. Pengerjaan kuat, rapi, dan presisi.</p>
            <p id="faq">Siap bantu konsultasi peralatan olahraga dan custom project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
