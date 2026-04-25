import Image from "next/image";

const categories = [
  {
    name: "Basket FIBA",
    description: "Ring basket portabel dan fixed system untuk sekolah, klub, dan venue indoor.",
  },
  {
    name: "Voli FIVB",
    description: "Tiang dan net portable untuk latihan, turnamen, hingga kebutuhan institusi.",
  },
  {
    name: "Futsal FIFA",
    description: "Gawang futsal kuat, rapi, dan siap untuk lapangan sekolah maupun komersial.",
  },
  {
    name: "Badminton BWF",
    description: "Tiang badminton portable dengan finishing presisi dan setup yang praktis.",
  },
  {
    name: "Padel FIP",
    description: "Peralatan padel untuk club baru, ekspansi venue, dan project custom.",
  },
  {
    name: "Tenis ITF",
    description: "Tiang tenis custom untuk fasilitas olahraga dan kebutuhan proyek jangka panjang.",
  },
];

const featuredProducts = [
  {
    name: "Ring Basket Portabel MS V1",
    priceBefore: "Mulai dari Rp 7.499.000",
    priceNow: "Rp 7.274.030",
    note: "Hemat Rp 224.970",
    tag: "FIBA Basketball",
    image: "/images/products/basket-ring.png",
    tone: "from-[#c2410c] to-[#fb923c]",
  },
  {
    name: "Tiang Voli Portable",
    priceBefore: "Rp 5.499.000",
    priceNow: "Rp 5.334.030",
    note: "Hemat Rp 164.970",
    tag: "FIVB Volleyball",
    image: "/images/products/volley-post.png",
    tone: "from-[#0f766e] to-[#2dd4bf]",
  },
  {
    name: "Tiang Gawang Futsal",
    priceBefore: "Rp 4.499.000",
    priceNow: "Rp 4.364.030",
    note: "Hemat Rp 134.970",
    tag: "FIFA Sepak Bola",
    image: "/images/products/futsal-goal.png",
    tone: "from-[#1d4ed8] to-[#60a5fa]",
  },
  {
    name: "Tiang Badminton Portable",
    priceBefore: "Rp 3.499.000",
    priceNow: "Rp 3.394.030",
    note: "Hemat Rp 104.970",
    tag: "BWF Badminton",
    image: "/images/products/badminton-post.jpg",
    tone: "from-[#7c3aed] to-[#c084fc]",
  },
  {
    name: "Tiang Padel",
    priceBefore: "Rp 2.499.000",
    priceNow: "Rp 2.424.030",
    note: "Hemat Rp 74.970",
    tag: "FIP Padel",
    image: "/images/products/padel-post.png",
    tone: "from-[#15803d] to-[#86efac]",
  },
  {
    name: "Tiang Tenis",
    priceBefore: "Hubungi Admin",
    priceNow: "Custom Penawaran",
    note: "ITF Tennis",
    tag: "ITF Tennis",
    image: "/images/products/tennis-post.png",
    tone: "from-[#475569] to-[#cbd5e1]",
  },
];

const stats = [
  { value: "15+", label: "Tahun pengalaman di bidang fabrikasi besi" },
  { value: "50+", label: "Project selesai dari skala personal hingga institusi" },
  { value: "20+", label: "Institusi dilayani di sektor pendidikan dan komersial" },
  { value: "7", label: "Cabang olahraga yang aktif kami produksi" },
];

const highlights = [
  "Produksi sendiri dengan kontrol kualitas lebih rapi",
  "Custom ukuran dan spesifikasi sesuai budget project",
  "Pengiriman ke seluruh Indonesia",
];

const clients = ["SMAN 37 Jakarta", "SDN Cilincing", "SMA Wardaya", "AEON Bekasi", "Bank BRI"];

function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#ff6b2c]">
        {kicker}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

export default function Home() {
  const heroProducts = featuredProducts.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f4efe7] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111827]/92 text-white backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white">
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
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/55">
                Pabrik Alat Olahraga
              </p>
              <p className="text-lg font-black tracking-tight text-white">Maya Sport</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/72 lg:flex">
            <a href="#kategori" className="transition hover:text-white">
              Kategori
            </a>
            <a href="#unggulan" className="transition hover:text-white">
              Produk Unggulan
            </a>
            <a href="#project" className="transition hover:text-white">
              Project
            </a>
            <a href="#kontak" className="transition hover:text-white">
              Kontak
            </a>
          </nav>

          <a
            href="https://wa.me/6280000000000"
            className="rounded-full bg-[#ff6b2c] px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950"
          >
            Konsultasi
          </a>
        </div>
      </header>

      <main id="top">
        <section className="bg-[#111827] text-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-18">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white/75">
                Bekasi, Jawa Barat · Produksi sendiri · Custom order
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                  Peralatan olahraga kuat, rapi, dan siap dipakai.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/72">
                  Maya Sport memproduksi dan menjual langsung peralatan olahraga
                  standar kompetisi. Dari ring basket, tiang voli, gawang
                  futsal, hingga kursi wasit, semua dikerjakan dengan presisi
                  untuk sekolah, venue, dan project institusi.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/72"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#unggulan"
                  className="rounded-full bg-[#ff6b2c] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950"
                >
                  Lihat Katalog
                </a>
                <a
                  href="https://wa.me/6280000000000"
                  className="rounded-full border border-white/12 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#1f2937,#0f172a)] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.28)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                      Produk Pilihan
                    </p>
                    <p className="mt-2 text-2xl font-black">Siap untuk project dan institusi</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                    Maya Sport
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {heroProducts.map((product) => (
                    <div
                      key={product.name}
                      className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white"
                    >
                      <div className={`bg-gradient-to-br ${product.tone} p-4`}>
                        <div className="relative h-36 overflow-hidden rounded-[1rem] bg-white/92">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-3"
                            sizes="(max-width: 640px) 100vw, 240px"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 p-4 text-slate-900">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                          {product.tag}
                        </p>
                        <h2 className="text-base font-black leading-6">{product.name}</h2>
                        <p className="text-sm font-semibold text-[#ff6b2c]">{product.priceNow}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                    Marketplace
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <Image
                      src="/images/references/shopee.png"
                      alt="Shopee"
                      width={30}
                      height={30}
                    />
                    <p className="text-lg font-black">Tersedia di Shopee</p>
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                    Konsultasi Cepat
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <Image
                      src="/images/references/whatsapp.png"
                      alt="WhatsApp"
                      width={30}
                      height={30}
                    />
                    <p className="text-lg font-black">Chat via WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kategori" className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionTitle
            kicker="Kategori Produk"
            title="Cabang olahraga yang kami kerjakan dalam bentuk produk siap pakai maupun custom project."
            description="Strukturnya tetap memudahkan orang memilih kategori, tetapi desainnya dibedakan dengan sistem kartu horizontal dan tone yang lebih editorial."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {categories.map((category, index) => (
              <article
                key={category.name}
                className="group rounded-[2rem] border border-slate-900/10 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black uppercase tracking-[0.18em] text-slate-300">
                    0{index + 1}
                  </span>
                  <span className="h-3 w-3 rounded-full bg-[#ff6b2c]" />
                </div>
                <h3 className="mt-7 text-2xl font-black tracking-tight text-slate-950">
                  {category.name}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="unggulan" className="bg-white py-16 lg:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionTitle
                kicker="Produk Unggulan"
                title="Pilihan terpopuler untuk kebutuhan sekolah, venue, dan project institusi."
                description="Gambar produk boleh mengacu ke referensi, tetapi layout dan visual katalog di halaman ini dibuat ulang sepenuhnya."
              />
              <a
                href="#kontak"
                className="text-sm font-bold uppercase tracking-[0.18em] text-slate-700 transition hover:text-slate-950"
              >
                Lihat Semua
              </a>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredProducts.map((product) => (
                <article
                  key={product.name}
                  className="overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[#f9f6f0] shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                >
                  <div className={`bg-gradient-to-br ${product.tone} p-5`}>
                    <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-white">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                          {product.tag}
                        </p>
                        <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                          {product.name}
                        </h3>
                      </div>
                      <span className="rounded-full bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
                        Ready
                      </span>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-400 line-through">
                        {product.priceBefore}
                      </p>
                      <p className="text-3xl font-black tracking-tight text-slate-950">
                        {product.priceNow}
                      </p>
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff6b2c]">
                        {product.note}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="project" className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              kicker="Skala Pengerjaan"
              title="Bukti kapasitas produksi dan pengalaman project Maya Sport."
              description="Bagian ini tetap memegang fungsi yang sama seperti situs acuan, tetapi ditata ulang dalam grid angka dan panel testimoni yang lebih modern."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[2rem] border border-slate-900/10 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                >
                  <p className="text-5xl font-black tracking-tight text-slate-950">{stat.value}</p>
                  <p className="mt-4 text-base leading-8 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <blockquote className="rounded-[2rem] bg-[#111827] p-8 text-white shadow-[0_26px_80px_rgba(15,23,42,0.16)] lg:p-10">
              <p className="text-lg leading-9 text-white/86 sm:text-xl">
                &ldquo;Hasil pengerjaan ring basket dan fasilitas olahraga sangat
                memuaskan. Material kuat, finishing rapi, dan tim Maya Sport
                sangat profesional dalam setiap tahap pengerjaan.&rdquo;
              </p>
              <footer className="mt-8 space-y-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                <p>Ring Basket & Fasilitas Olahraga</p>
                <p>Bapak Kepala Sekolah</p>
                <p>SMAN 37 Jakarta</p>
                <p>Pendidikan</p>
              </footer>
            </blockquote>

            <div className="rounded-[2rem] border border-slate-900/10 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff6b2c]">
                Klien yang telah kami layani
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {clients.map((client) => (
                  <div
                    key={client}
                    className="rounded-full border border-slate-900/10 bg-[#f4efe7] px-5 py-3 text-sm font-semibold text-slate-700"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111827] py-16 text-white lg:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#ff6b2c]">
                  Siap mulai project Anda?
                </p>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Konsultasi gratis untuk kebutuhan peralatan olahraga dan custom project.
                </h2>
                <p className="text-base leading-8 text-white/72 sm:text-lg">
                  Pengiriman ke seluruh Indonesia, spesifikasi bisa disesuaikan,
                  dan pengerjaan difokuskan pada kekuatan material serta hasil
                  finishing yang rapi.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="https://wa.me/6280000000000"
                  className="rounded-full bg-[#ff6b2c] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950"
                >
                  Konsultasi via WhatsApp
                </a>
                <a
                  href="#unggulan"
                  className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950"
                >
                  Lihat Katalog
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="kontak" className="border-t border-slate-900/10 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="flex items-start gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-900/10 bg-[#f4efe7]">
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
                Melayani kebutuhan proyek institusi, komersial, dan custom dengan
                pengerjaan rapi, presisi, dan siap digunakan.
              </p>
              <p className="text-sm font-semibold text-slate-500">
                Bekasi, Jawa Barat · Sukatani, Cikarang
              </p>
            </div>
          </div>

          <div className="grid gap-2 text-sm font-semibold text-slate-600 sm:text-right">
            <a href="#kategori" className="transition hover:text-slate-950">
              Kategori Produk
            </a>
            <a href="#unggulan" className="transition hover:text-slate-950">
              Produk Unggulan
            </a>
            <a href="#project" className="transition hover:text-slate-950">
              Portfolio Project
            </a>
            <a href="https://wa.me/6280000000000" className="transition hover:text-slate-950">
              Chat via WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-slate-900/10">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p>Copyright © 2026 Maya Sport. Pengerjaan kuat, rapi, dan presisi.</p>
            <p>Siap bantu konsultasi peralatan olahraga dan custom project.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
