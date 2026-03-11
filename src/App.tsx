/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Award, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X,
  Facebook,
  Instagram,
  Twitter,
  GraduationCap,
  Clock,
  CheckCircle2,
  Search,
  ArrowUp,
  ArrowRight,
  Image as ImageIcon,
  ArrowLeft,
  Share2,
  Bookmark,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: isHomePage ? '#home' : '/' },
    { name: 'Tentang Kami', href: isHomePage ? '#about' : '/#about' },
    { name: 'Program', href: isHomePage ? '#programs' : '/#programs' },
    { name: 'Galeri', href: '/gallery' },
    { name: 'Berita', href: '/news' },
    { name: 'Kontak', href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHomePage ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled || !isHomePage ? 'text-slate-900' : 'text-white'}`}>
              SMK TELADAN BANGUN
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') || (link.href.startsWith('/') && link.href.includes('#')) ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-emerald-500 ${scrolled || !isHomePage ? 'text-slate-600' : 'text-white/90'}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-emerald-500 ${scrolled || !isHomePage ? 'text-slate-600' : 'text-white/90'}`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-600/20">
              PPDB Online
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled || !isHomePage ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                link.href.startsWith('#') || (link.href.startsWith('/') && link.href.includes('#')) ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="pt-4">
                <button className="w-full bg-emerald-600 text-white px-5 py-3 rounded-xl font-semibold">
                  PPDB Online
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SchoolBanner = () => {
  return (
    <div className="w-full h-[300px] md:h-[450px] relative overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1541339907198-e08756dee81c?q=80&w=2070&auto=format&fit=crop" 
        alt="Gedung SMK TELADAN BANGUN" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
          alt="Vocational Training"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6 border border-emerald-500/30 backdrop-blur-sm">
            SMK TELADAN BANGUN
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 font-serif italic">
            Membangun Keahlian <br />
            <span className="text-emerald-400 not-italic font-sans">Mencetak Masa Depan</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl">
            Pendidikan vokasi berbasis industri dengan fasilitas modern dan kurikulum teruji untuk mencetak lulusan profesional yang siap bersaing di dunia kerja global.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group">
              Daftar Sekarang
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Lihat Profil Sekolah
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-xl border-t border-white/10 py-8 hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-8">
          {[
            { label: 'Siswa Aktif', value: '1,500+' },
            { label: 'Mitra Industri', value: '40+' },
            { label: 'Ekstrakurikuler', value: '18' },
            { label: 'Akreditasi', value: 'A' },
          ].map((stat, i) => (
            <div key={i} className="text-center border-r border-white/10 last:border-0">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
      title: 'Kurikulum Modern',
      description: 'Mengintegrasikan kurikulum nasional dengan standar internasional untuk persiapan global.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Tenaga Pengajar Ahli',
      description: 'Guru-guru profesional dan berpengalaman di bidangnya dengan metode mengajar inovatif.'
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: 'Fasilitas Lengkap',
      description: 'Laboratorium sains, komputer, perpustakaan digital, dan sarana olahraga berstandar.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Mengapa Memilih Kami</h2>
          <p className="text-4xl font-bold text-slate-900 mb-6">Pendidikan Berkualitas untuk Generasi Emas</p>
          <div className="h-1.5 w-20 bg-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: 'MIPA',
      desc: 'Matematika dan Ilmu Pengetahuan Alam untuk eksplorasi sains mendalam.',
      img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'IPS',
      desc: 'Ilmu Pengetahuan Sosial untuk memahami dinamika masyarakat dan ekonomi.',
      img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop'
    },
    {
      title: 'Bahasa',
      desc: 'Pengembangan kemampuan linguistik dan sastra dalam berbagai bahasa.',
      img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop'
    }
  ];

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Program Unggulan</h2>
            <p className="text-4xl font-bold text-slate-900">Pilih Jalur Kesuksesanmu</p>
          </div>
          <button className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Lihat Semua Program <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl bg-white shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-600 mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {['Kurikulum Nasional', 'Fasilitas Lab Lengkap', 'Studi Lapangan'].map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl border border-slate-200 font-bold text-slate-700 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all">
                  Detail Program
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Use first 3 items from allNewsData for homepage
  const news = allNewsData.slice(0, 3);

  const filteredNews = news.filter(n => 
    n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="text-left">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Berita & Acara</h2>
            <p className="text-4xl font-bold text-slate-900">Kabar Terbaru Sekolah</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari berita atau kategori..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredNews.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredNews.map((n) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={n.id} 
                className="flex flex-col gap-4 group"
              >
                <div className="rounded-2xl overflow-hidden aspect-video relative">
                  <img
                    src={n.img}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-emerald-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      {n.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {n.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors cursor-pointer line-clamp-2">
                  <Link to={`/news/${n.id}`}>{n.title}</Link>
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2">
                  {n.excerpt}
                </p>
                <Link to={`/news/${n.id}`} className="text-emerald-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-2">
                  Baca Selengkapnya <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-500 text-lg">Tidak ada berita yang ditemukan untuk "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 text-emerald-600 font-bold hover:underline"
            >
              Hapus pencarian
            </button>
          </div>
        )}

        <div className="mt-16 text-center">
          <Link to="/news" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
            Lihat Semua Berita <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};


const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">Hubungi Kami</h2>
            <p className="text-4xl font-bold mb-8">Ada Pertanyaan? <br />Kami Siap Membantu.</p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-white/10 p-4 rounded-2xl h-fit">
                  <MapPin className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Alamat Sekolah</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Jl. Pendidikan No. 123, <br />
                    Kota Harapan, Indonesia 12345
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white/10 p-4 rounded-2xl h-fit">
                  <Phone className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Telepon</h4>
                  <p className="text-slate-400">(021) 1234-5678</p>
                  <p className="text-slate-400">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white/10 p-4 rounded-2xl h-fit">
                  <Mail className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Email</h4>
                  <p className="text-slate-400">info@smaunggulbangsa.sch.id</p>
                  <p className="text-slate-400">ppdb@smaunggulbangsa.sch.id</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Subjek</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="Informasi PPDB" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Pesan</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="Tuliskan pesan Anda di sini..."></textarea>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20">
                Kirim Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SMK TELADAN BANGUN
              </span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed">
              Lembaga pendidikan menengah atas yang berfokus pada pengembangan karakter, 
              intelektual, dan kreativitas siswa untuk menghadapi tantangan masa depan.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 hover:bg-emerald-600 hover:text-white p-3 rounded-full transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-4">
              {['Profil Sekolah', 'Visi & Misi', 'Struktur Organisasi', 'Fasilitas', 'Prestasi'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-emerald-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Informasi</h4>
            <ul className="space-y-4">
              {['Pendaftaran Siswa Baru', 'Kalender Akademik', 'E-Learning', 'Perpustakaan', 'Alumni'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-emerald-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-sm">
          <p>© 2024 SMK TELADAN BANGUN. All rights reserved. Created with ❤️ for education.</p>
        </div>
      </div>
    </footer>
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-emerald-600 text-white p-4 rounded-full shadow-2xl shadow-emerald-600/40 hover:bg-emerald-700 transition-all group"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const allNewsData = [
  {
    id: 1,
    date: '12 Mar 2024',
    title: 'Siswa Kami Meraih Medali Emas di Olimpiade Sains Nasional',
    category: 'Prestasi',
    author: 'Admin Sekolah',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Prestasi membanggakan kembali ditorehkan oleh siswa SMK TELADAN BANGUN dalam ajang OSN tingkat nasional...',
    content: `
      <p>Prestasi membanggakan kembali ditorehkan oleh siswa SMK TELADAN BANGUN dalam ajang Olimpiade Sains Nasional (OSN) tingkat nasional yang diselenggarakan di Jakarta pekan lalu. Siswa perwakilan kami berhasil menyabet medali emas dalam kategori Informatika.</p>
      <p>Keberhasilan ini merupakan buah dari kerja keras, dedikasi, dan bimbingan intensif yang dilakukan oleh tim guru pembimbing selama enam bulan terakhir. Kepala Sekolah menyatakan rasa bangganya atas pencapaian ini yang semakin mengukuhkan posisi SMK TELADAN BANGUN sebagai sekolah unggulan di bidang teknologi.</p>
      <p>Siswa yang bersangkutan, Ahmad Fauzi, menyatakan bahwa tantangan dalam OSN tahun ini cukup berat, namun dengan persiapan yang matang dan dukungan penuh dari sekolah, ia mampu memberikan hasil yang terbaik. Ahmad juga berharap prestasinya ini dapat memotivasi rekan-rekan lainnya untuk terus berprestasi.</p>
    `
  },
  {
    id: 2,
    date: '10 Mar 2024',
    title: 'Kunjungan Industri ke Perusahaan Teknologi Terkemuka',
    category: 'Kegiatan',
    author: 'Humas',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Dalam rangka meningkatkan wawasan industri, siswa kelas XI melakukan kunjungan ke pusat riset teknologi...',
    content: `
      <p>Dalam rangka meningkatkan wawasan industri dan menyelaraskan kurikulum dengan kebutuhan dunia kerja, siswa kelas XI SMK TELADAN BANGUN melakukan kunjungan industri ke salah satu perusahaan teknologi terkemuka di Indonesia.</p>
      <p>Kunjungan ini memberikan kesempatan bagi para siswa untuk melihat secara langsung proses produksi, manajemen proyek, dan budaya kerja di lingkungan profesional. Para siswa juga mendapatkan sesi sharing session dengan para engineer senior mengenai tren teknologi masa depan.</p>
      <p>Humas sekolah menyatakan bahwa program kunjungan industri ini merupakan agenda rutin tahunan yang bertujuan untuk membekali siswa dengan pengalaman nyata di lapangan sebelum mereka memasuki dunia kerja atau melanjutkan pendidikan ke jenjang yang lebih tinggi.</p>
    `
  },
  {
    id: 3,
    date: '05 Mar 2024',
    title: 'Workshop Literasi Digital bagi Seluruh Tenaga Pengajar',
    category: 'Akademik',
    author: 'Kurikulum',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Peningkatan kualitas pengajaran melalui pemanfaatan teknologi digital menjadi fokus utama workshop kali ini...',
    content: `
      <p>Peningkatan kualitas pengajaran melalui pemanfaatan teknologi digital menjadi fokus utama workshop literasi digital yang diselenggarakan untuk seluruh tenaga pengajar SMK TELADAN BANGUN.</p>
      <p>Workshop ini menghadirkan pakar teknologi pendidikan yang memberikan materi mengenai penggunaan platform pembelajaran interaktif, manajemen kelas digital, dan pembuatan konten edukasi berbasis multimedia. Tujuannya adalah agar para guru dapat menciptakan suasana belajar yang lebih menarik dan relevan bagi siswa generasi Z.</p>
      <p>Wakil Kepala Sekolah Bidang Kurikulum menekankan bahwa adaptasi terhadap teknologi adalah keharusan bagi pendidik di era modern. Dengan penguasaan literasi digital yang baik, diharapkan guru dapat mengoptimalkan potensi siswa dalam menyerap materi pelajaran.</p>
    `
  },
  {
    id: 4,
    date: '01 Mar 2024',
    title: 'Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2024/2025',
    category: 'Pengumuman',
    author: 'Panitia PPDB',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Informasi lengkap mengenai jadwal, persyaratan, dan alur pendaftaran siswa baru SMK TELADAN BANGUN...',
    content: `
      <p>SMK TELADAN BANGUN secara resmi membuka pendaftaran bagi calon peserta didik baru untuk tahun ajaran 2024/2025. Proses pendaftaran akan dilakukan sepenuhnya secara online melalui portal PPDB resmi sekolah.</p>
      <p>Calon siswa dapat memilih dari berbagai program keahlian unggulan yang tersedia. Persyaratan pendaftaran meliputi nilai rapor, sertifikat prestasi (jika ada), dan mengikuti tes seleksi masuk yang meliputi tes akademik dan wawancara minat bakat.</p>
      <p>Panitia PPDB menghimbau agar calon pendaftar memperhatikan jadwal penting pendaftaran agar tidak terlewatkan. Informasi lebih lanjut mengenai alur pendaftaran dapat diakses melalui menu PPDB Online di website ini.</p>
    `
  },
  {
    id: 5,
    date: '28 Feb 2024',
    title: 'Pelepasan Siswa Praktek Kerja Lapangan (PKL) Gelombang II',
    category: 'Kegiatan',
    author: 'Pokja PKL',
    img: 'https://images.unsplash.com/photo-1513135065346-a098a63a71ee?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Sebanyak 150 siswa diberangkatkan ke berbagai mitra industri untuk menjalani program PKL selama 3 bulan...',
    content: `
      <p>Sebanyak 150 siswa SMK TELADAN BANGUN diberangkatkan ke berbagai mitra industri untuk menjalani program Praktek Kerja Lapangan (PKL) Gelombang II. Program ini akan berlangsung selama tiga bulan ke depan.</p>
      <p>Sebelum diberangkatkan, para siswa telah mendapatkan pembekalan mengenai etika kerja, keselamatan kerja (K3), dan penguatan kompetensi teknis sesuai bidang masing-masing. PKL merupakan bagian integral dari kurikulum SMK untuk memastikan lulusan memiliki kesiapan kerja yang matang.</p>
      <p>Ketua Pokja PKL menyatakan bahwa tahun ini sekolah telah memperluas jaringan mitra industri, mencakup perusahaan-perusahaan skala nasional dan multinasional, guna memberikan pengalaman terbaik bagi para siswa.</p>
    `
  },
  {
    id: 6,
    date: '25 Feb 2024',
    title: 'Juara 1 Lomba Kompetensi Siswa (LKS) Tingkat Provinsi',
    category: 'Prestasi',
    author: 'Admin Sekolah',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Tim IT Software Solution SMK TELADAN BANGUN berhasil menyabet gelar juara pertama dalam ajang LKS...',
    content: `
      <p>Tim IT Software Solution SMK TELADAN BANGUN berhasil menyabet gelar juara pertama dalam ajang Lomba Kompetensi Siswa (LKS) tingkat provinsi. Kemenangan ini membawa tim kami mewakili provinsi ke ajang LKS tingkat nasional.</p>
      <p>Kompetisi yang berlangsung selama tiga hari ini menguji kemampuan siswa dalam pengembangan aplikasi, manajemen database, dan pemecahan masalah teknis yang kompleks. Juri memberikan apresiasi tinggi atas inovasi dan efisiensi kode yang dihasilkan oleh tim kami.</p>
      <p>Pembimbing lomba menyatakan bahwa kunci kemenangan adalah ketenangan dan ketelitian dalam mengeksekusi setiap modul soal. Persiapan akan terus ditingkatkan untuk menghadapi kompetisi di tingkat nasional mendatang.</p>
    `
  }
];

const NewsPortal = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const categories = ['Semua', 'Akademik', 'Prestasi', 'Kegiatan', 'Pengumuman'];
  
  const filteredNews = activeCategory === 'Semua' 
    ? allNewsData 
    : allNewsData.filter(n => n.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Portal */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-4 hover:gap-3 transition-all">
              <ArrowLeft className="w-5 h-5" /> Kembali ke Beranda
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Portal Berita Sekolah</h1>
            <p className="text-slate-500 text-lg">Informasi terkini seputar kegiatan, prestasi, dan pengumuman sekolah.</p>
          </div>
          
          <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                    : 'text-slate-500 hover:text-emerald-600 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured News */}
        {activeCategory === 'Semua' && (
          <div className="mb-16">
            <Link to={`/news/${allNewsData[0].id}`}>
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[21/9] group cursor-pointer shadow-2xl">
                <img 
                  src={allNewsData[0].img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Featured"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                      Terpopuler
                    </span>
                    <span className="text-white/80 text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {allNewsData[0].date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl leading-tight group-hover:text-emerald-400 transition-colors">
                    {allNewsData[0].title}
                  </h2>
                  <p className="text-slate-300 text-lg max-w-2xl line-clamp-2 mb-6">
                    {allNewsData[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <span className="text-white font-medium">{allNewsData[0].author}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((n) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={n.id}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={n.img} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={n.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      {n.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {n.date}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {n.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                    {n.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {n.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <Link to={`/news/${n.id}`} className="text-emerald-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                      Baca Selengkapnya <ChevronRight className="w-4 h-4" />
                    </Link>
                    <div className="flex gap-3">
                      <button className="text-slate-400 hover:text-emerald-600 transition-colors"><Share2 className="w-4 h-4" /></button>
                      <button className="text-slate-400 hover:text-emerald-600 transition-colors"><Bookmark className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center gap-2">
          {[1, 2, 3].map((p) => (
            <button key={p} className={`w-12 h-12 rounded-xl font-bold transition-all ${p === 1 ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'}`}>
              {p}
            </button>
          ))}
          <button className="px-6 h-12 rounded-xl bg-white text-slate-600 font-bold hover:bg-slate-50 border border-slate-200 transition-all">
            Berikutnya
          </button>
        </div>
      </div>
    </div>
  );
};

const NewsDetailPage = () => {
  const { id } = useParams();
  const news = allNewsData.find(n => n.id === parseInt(id || '0'));

  if (!news) return <div className="pt-32 text-center">Berita tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/news" className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" /> Kembali ke Portal Berita
        </Link>
        
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
              {news.category}
            </span>
            <span className="text-slate-400 text-sm flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {news.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            {news.title}
          </h1>
          <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
              {news.author[0]}
            </div>
            <div>
              <p className="text-slate-900 font-bold">{news.author}</p>
              <p className="text-slate-500 text-sm">Kontributor Berita Sekolah</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
          <img 
            src={news.img} 
            alt={news.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
          <div dangerouslySetInnerHTML={{ __html: news.content }} />
        </div>

        <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-slate-900 font-bold">Bagikan Berita:</span>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Share2].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 text-slate-400 hover:text-emerald-600 font-bold transition-colors">
            <Bookmark className="w-5 h-5" /> Simpan untuk Nanti
          </button>
        </div>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const [filter, setFilter] = useState('Semua');
  
  const items = [
    { id: 1, category: 'Fasilitas', title: 'Laboratorium Komputer', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, category: 'Fasilitas', title: 'Bengkel Otomotif', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop' },
    { id: 3, category: 'Fasilitas', title: 'Perpustakaan Digital', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop' },
    { id: 4, category: 'Acara', title: 'Wisuda Angkatan 2023', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop' },
    { id: 5, category: 'Acara', title: 'Lomba Olahraga Antar Kelas', img: 'https://images.unsplash.com/photo-1526676023671-f30444826bb1?q=80&w=2070&auto=format&fit=crop' },
    { id: 6, category: 'Acara', title: 'Kunjungan Industri', img: 'https://images.unsplash.com/photo-1513135065346-a098a63a71ee?q=80&w=2070&auto=format&fit=crop' },
    { id: 7, category: 'Fasilitas', title: 'Studio Multimedia', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop' },
    { id: 8, category: 'Acara', title: 'Pentas Seni Tahunan', img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop' },
    { id: 9, category: 'Fasilitas', title: 'Lapangan Basket', img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2070&auto=format&fit=crop' },
  ];

  const filteredItems = filter === 'Semua' ? items : items.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-4 hover:gap-3 transition-all">
            <ArrowLeft className="w-5 h-5" /> Kembali ke Beranda
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Galeri Dokumentasi</h1>
          <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">Kumpulan momen berharga dan fasilitas unggulan yang mendukung proses belajar mengajar di SMK TELADAN BANGUN.</p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            {['Semua', 'Fasilitas', 'Acara'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                  filter === cat 
                    ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/30' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] cursor-pointer shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const items = [
    { id: 1, category: 'Fasilitas', title: 'Laboratorium Komputer', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, category: 'Fasilitas', title: 'Bengkel Otomotif', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop' },
    { id: 3, category: 'Fasilitas', title: 'Perpustakaan Digital', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">Galeri Sekolah</h2>
            <p className="text-4xl font-bold text-slate-900">Dokumentasi Fasilitas & Kegiatan</p>
          </div>
          <Link to="/gallery" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Lihat Semua Galeri <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <SchoolBanner />
      <Hero />
      <Features />
      <Programs />
      <Gallery />
      <News />
      <Contact />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans text-slate-900 bg-white">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPortal />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
