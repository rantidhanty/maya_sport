import Image from "next/image";

const services = [
  {
    title: "Strategi Konten",
    description:
      "Pilar konten, kalender produksi, dan angle campaign yang disusun untuk performa dan konsistensi brand.",
  },
  {
    title: "Manajemen Sosial Media",
    description:
      "Eksekusi harian untuk Instagram, TikTok, dan marketplace content dengan ritme posting yang terukur.",
  },
  {
    title: "Iklan Berbayar",
    description:
      "Setup dan optimasi Meta Ads, TikTok Ads, hingga Google Ads untuk lead dan penjualan yang lebih stabil.",
  },
  {
    title: "Creative Production",
    description:
      "Foto produk, short-form video, motion graphic, dan aset visual yang siap dipakai di semua funnel.",
  },
  {
    title: "Website & Funnel",
    description:
      "Landing page kampanye, halaman penawaran, dan alur konversi yang cepat, ringkas, dan mobile-first.",
  },
  {
    title: "Analitik & Pelaporan",
    description:
      "Laporan mingguan dan insight yang fokus pada CPL, ROAS, conversion rate, dan peluang iterasi berikutnya.",
  },
];

const advantages = [
  "Framework kerja cepat untuk campaign lokal dan nasional",
  "Kombinasi creative, media buying, dan landing page dalam satu tim",
  "Pendekatan berbasis data tanpa mengorbankan rasa brand",
];

const highlights = [
  {
    label: "Audit Awal",
    title: "Mulai dari masalah yang paling menghambat growth",
    description:
      "Kami bedah funnel, creative, channel, dan positioning agar prioritas eksekusi jelas sejak minggu pertama.",
  },
  {
    label: "Eksekusi",
    title: "Semua channel berjalan dengan pesan yang konsisten",
    description:
      "Konten organik, paid ads, dan landing page dirancang saling menyambung supaya biaya akuisisi lebih efisien.",
  },
  {
    label: "Optimasi",
    title: "Keputusan dibuat dari data yang bisa ditindak",
    description:
      "Kami evaluasi creative, audience, offer, dan halaman penjualan untuk menaikkan hasil, bukan sekadar traffic.",
  },
];

const metrics = [
  { value: "120+", label: "Campaign aktif untuk brand lokal dan regional" },
  { value: "4.8x", label: "Rata-rata uplift ROAS pada akun yang sudah siap scale" },
  { value: "72 jam", label: "Waktu ideal untuk launch creative dan landing page baru" },
  { value: "3 layer", label: "Organic, paid, dan conversion stack yang dikelola terintegrasi" },
];

const testimonials = [
  {
    quote:
      "Tim Maya Sport membantu kami merapikan funnel promosi event dan membership. Lead masuk lebih terstruktur dan materi kampanye jauh lebih konsisten.",
    name: "Nadia P.",
    role: "Marketing Lead, Studio Kebugaran",
  },
  {
    quote:
      "Sebelumnya iklan jalan sendiri-sendiri. Setelah campaign ditata ulang, landing page dan creative terasa nyambung dan conversion rate naik signifikan.",
    name: "Rizky A.",
    role: "Founder, Brand Apparel Olahraga",
  },
];

const clients = [
  "Akademi Basket",
  "Studio Pilates",
  "Brand Jersey",
  "Sport Retail",
  "Komunitas Padel",
  "Event Organizer",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff6a3d]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f3ea] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-[#f7f3ea]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-slate-900/10 bg-white">
              <Image
                src="/images/brand/logo-ms.jpg"
                alt="Logo Maya Sport"
                fill
                className="object-cover"
                sizes="44px"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500">
                Maya Sport
              </p>
              <p className="text-base font-black tracking-tight text-slate-950">
                Digital Marketing
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#layanan" className="transition hover:text-slate-950">
              Layanan
            </a>
            <a href="#proses" className="transition hover:text-slate-950">
              Proses
            </a>
            <a href="#hasil" className="transition hover:text-slate-950">
              Hasil
            </a>
            <a href="#testimoni" className="transition hover:text-slate-950">
              Testimoni
            </a>
          </nav>

          <a
            href="https://wa.me/6280000000000"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ff6a3d]"
          >
            Konsultasi
          </a>
        </div>
      </header>

      <main id="top" className="overflow-hidden">
        <section className="relative">
          <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,106,61,0.28),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(22,163,74,0.18),_transparent_30%)]" />
          <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-slate-900/10 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                Agensi digital marketing untuk brand olahraga, retail, dan bisnis aktif
              </div>

              <div className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-black uppercase leading-none tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                  Growth yang terasa di konten, iklan, dan penjualan.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Maya Sport membantu brand membangun sistem digital marketing
                  yang rapi, cepat dieksekusi, dan siap dikembangkan. Dari
                  strategi, creative, ads, sampai landing page, semuanya
                  dirancang untuk konversi.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/6280000000000"
                  className="rounded-full bg-[#ff6a3d] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-950"
                >
                  Konsultasi Gratis
                </a>
                <a
                  href="#layanan"
                  className="rounded-full border border-slate-900/15 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-950 transition hover:border-slate-950 hover:bg-white"
                >
                  Lihat Layanan
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {advantages.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.75rem] border border-slate-900/10 bg-white/80 p-5 text-sm leading-7 text-slate-700 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-[#ff6a3d]/20 blur-2xl" />
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                    Campaign Snapshot
                  </p>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                    Q2 Launch
                  </span>
                </div>

                <div className="mt-10 space-y-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/50">
                      Conversion stack
                    </p>
                    <p className="mt-3 text-4xl font-black tracking-tight">
                      Organic + Paid + Landing
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-white/8 p-5">
                      <p className="text-sm text-white/60">Lead Quality</p>
                      <p className="mt-3 text-3xl font-black">+38%</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">
                        Funnel lebih tepat sasaran dengan pesan campaign yang
                        konsisten.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] bg-[#ff6a3d] p-5 text-white">
                      <p className="text-sm text-white/80">Creative Velocity</p>
                      <p className="mt-3 text-3xl font-black">12 aset</p>
                      <p className="mt-2 text-sm leading-6 text-white/85">
                        Paket creative yang siap dipakai untuk testing mingguan.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-sm text-white/60">Timeline kerja</p>
                        <p className="mt-2 text-2xl font-black">Sprint 14 Hari</p>
                      </div>
                      <p className="text-right text-sm leading-6 text-white/70">
                        Audit
                        <br />
                        Produksi
                        <br />
                        Launch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="layanan"
          className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24"
        >
          <SectionHeading
            eyebrow="Layanan Utama"
            title="Struktur halaman mengikuti referensi, tapi isi difokuskan untuk kebutuhan digital marketing."
            description="Seperti acuan ProFabric Steel, halaman ini dibangun dengan alur yang jelas: perkenalan, kategori layanan, penawaran utama, bukti hasil, lalu penutup dengan ajakan konsultasi."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-[2rem] border border-slate-900/10 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.1)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                    0{index + 1}
                  </span>
                  <span className="h-3 w-3 rounded-full bg-[#ff6a3d]" />
                </div>
                <h3 className="mt-8 text-2xl font-black tracking-tight text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="proses" className="bg-slate-950 py-16 text-white lg:py-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Proses Kerja"
              title="Bukan hanya membuat campaign terlihat aktif, tapi memastikan tiap channel bergerak ke target yang sama."
              description="Pendekatan kami meniru kekuatan struktur referensi: menawarkan kejelasan, kredibilitas, dan dorongan kuat untuk mulai konsultasi."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff6a3d]">
                  Workflow Maya Sport
                </p>
                <h3 className="mt-5 text-3xl font-black tracking-tight">
                  Dari insight ke penjualan dalam ritme yang bisa diulang.
                </h3>
                <p className="mt-5 text-base leading-8 text-white/72">
                  Kami menghubungkan riset audience, creative production,
                  distribusi campaign, dan optimasi landing page ke dalam satu
                  siklus kerja. Hasilnya lebih cepat diuji, lebih mudah dibaca,
                  dan lebih siap untuk scale.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-white/8 p-5">
                    <p className="text-sm text-white/60">Creative System</p>
                    <p className="mt-3 text-2xl font-black">UGC, promo, edukasi</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white/8 p-5">
                    <p className="text-sm text-white/60">Channel Mix</p>
                    <p className="mt-3 text-2xl font-black">Meta, TikTok, Search</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                {highlights.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                      {item.label}
                    </p>
                    <h3 className="mt-4 text-2xl font-black tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-white/72">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="hasil"
          className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24"
        >
          <SectionHeading
            eyebrow="Hasil & Bukti"
            title="Seperti section statistik pada referensi, bagian ini menunjukkan kapasitas tim secara cepat dan mudah dipahami."
            description="Metrik di bawah ini dipakai sebagai penanda kemampuan delivery, kecepatan eksekusi, dan pendekatan yang terintegrasi."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[2rem] border border-slate-900/10 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
              >
                <p className="text-4xl font-black tracking-tight text-slate-950">
                  {metric.value}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="testimoni" className="bg-[#efe7d8] py-16 lg:py-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Testimoni Klien"
              title="Bagian social proof ditempatkan setelah bukti hasil, mengikuti pola konversi dari website referensi."
              description="Tujuannya sama: membuat calon klien melihat bahwa layanan ini pernah dipakai, dipercaya, dan menghasilkan perbaikan yang nyata."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {testimonials.map((item) => (
                <blockquote
                  key={item.name}
                  className="rounded-[2rem] border border-slate-900/10 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
                >
                  <p className="text-lg leading-9 text-slate-700">“{item.quote}”</p>
                  <footer className="mt-8">
                    <p className="text-lg font-black tracking-tight text-slate-950">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {item.role}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] border border-slate-900/10 bg-slate-950 px-6 py-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
                Brand dan bisnis yang cocok dengan pendekatan Maya Sport
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                {clients.map((client) => (
                  <div
                    key={client}
                    className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white/80"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-12 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)] sm:px-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff6a3d]">
                  Siap mulai?
                </p>
                <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.03em] sm:text-5xl">
                  Bangun landing page dan campaign yang memang siap dijalankan.
                </h2>
                <p className="text-base leading-8 text-white/72 sm:text-lg">
                  Jika kamu ingin Maya Sport difokuskan sebagai agency digital
                  marketing, kita bisa lanjutkan dengan penyusunan copy final,
                  CTA WhatsApp yang benar, dan section portfolio sesuai brand
                  kamu.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="https://wa.me/6280000000000"
                  className="rounded-full bg-[#ff6a3d] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950"
                >
                  Jadwalkan Konsultasi
                </a>
                <a
                  href="mailto:hello@mayasport.id"
                  className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-slate-950"
                >
                  Kirim Brief
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-900/10 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_auto] lg:px-8">
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
              <p className="text-lg font-black tracking-tight text-slate-950">
                Maya Sport Digital Marketing
              </p>
              <p className="max-w-xl text-sm leading-7 text-slate-600">
                Landing page ini dibangun dengan struktur yang terinspirasi dari
                referensi ProFabric Steel: hero kuat, layanan terklasifikasi,
                bukti hasil, social proof, dan CTA penutup yang tegas.
              </p>
            </div>
          </div>

          <div className="grid gap-2 text-sm font-semibold text-slate-600 sm:text-right">
            <a href="#layanan" className="transition hover:text-slate-950">
              Layanan
            </a>
            <a href="#proses" className="transition hover:text-slate-950">
              Proses
            </a>
            <a href="#hasil" className="transition hover:text-slate-950">
              Hasil
            </a>
            <a href="#testimoni" className="transition hover:text-slate-950">
              Testimoni
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
