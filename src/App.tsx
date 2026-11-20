import { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Menu,
  X,
} from 'lucide-react';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export type PageRoute = 'home' | 'about' | 'gallery' | 'contact';

// Custom crisp vector icons matching the 100% original design
const FacebookIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
  </svg>
);

const YoutubeIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.58 7.19C21.35 6.33 20.67 5.65 19.81 5.42C18.25 5 12 5 12 5C12 5 5.75 5 4.19 5.42C3.33 5.65 2.65 6.33 2.42 7.19C2 8.75 2 12 2 12C2 12 2 15.25 2.42 16.81C2.65 17.67 3.33 18.35 4.19 18.58C5.75 19 12 19 12 19C12 19 18.25 19 19.81 18.58C20.67 18.35 21.35 17.67 21.58 16.81C22 15.25 22 12 22 12C22 12 22 8.75 21.58 7.19ZM10 15V9L15.2 12L10 15Z" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
  </svg>
);

// Feature Strip Solid Icons (#09347a)
const GraduationCapSolid = () => (
  <svg className="w-11 h-11 text-[#0b357a] shrink-0" viewBox="0 0 36 36" fill="currentColor">
    <path d="M18 5L2 12.5L18 20L31.5 13.68V23H34V12.5L18 5Z" />
    <path d="M8 17.5V24.5C8 27.8 12.48 30.5 18 30.5C23.52 30.5 28 27.8 28 24.5V17.5L18 22.2L8 17.5Z" />
  </svg>
);

const UsersGroupSolid = () => (
  <svg className="w-11 h-11 text-[#0b357a] shrink-0" viewBox="0 0 36 36" fill="currentColor">
    <circle cx="18" cy="11.5" r="4.2" />
    <circle cx="9" cy="13.5" r="3.2" />
    <circle cx="27" cy="13.5" r="3.2" />
    <path d="M18 17.8C13.8 17.8 10.5 20.5 10.5 24.2V27.5H25.5V24.2C25.5 20.5 22.2 17.8 18 17.8Z" />
    <path d="M8.5 18.8C5.5 18.8 3 21 3 24.2V27.2H8.8V24C8.8 21.8 9.7 20 11.2 18.9C10.3 18.8 9.4 18.8 8.5 18.8Z" />
    <path d="M27.5 18.8C26.6 18.8 25.7 18.8 24.8 18.9C26.3 20 27.2 21.8 27.2 24V27.2H33V24.2C33 21 30.5 18.8 27.5 18.8Z" />
  </svg>
);

const TrophyStarSolid = () => (
  <svg className="w-11 h-11 text-[#0b357a] shrink-0" viewBox="0 0 36 36" fill="currentColor">
    <path d="M27 6H25V4.5C25 3.95 24.55 3.5 24 3.5H12C11.45 3.5 11 3.95 11 4.5V6H9C6.79 6 5 7.79 5 10V11.5C5 15.05 7.64 17.97 11.07 18.43C12.16 21.1 14.57 23.07 17.5 23.43V27.5H12.5C11.67 27.5 11 28.17 11 29V31.5H25V29C25 28.17 24.33 27.5 23.5 27.5H18.5V23.43C21.43 23.07 23.84 21.1 24.93 18.43C28.36 17.97 31 15.05 31 11.5V10C31 7.79 29.21 6 27 6ZM8 11.5V10C8 9.45 8.45 9 9 9H11V15.32C9.27 14.88 8 13.34 8 11.5ZM28 11.5C28 13.34 26.73 14.88 25 15.32V9H27C27.55 9 28 9.45 28 10V11.5ZM18 8.3L19.45 11.24L22.7 11.71L20.35 14L20.9 17.23L18 15.7L15.1 17.23L15.65 14L13.3 11.71L16.55 11.24L18 8.3Z" />
  </svg>
);

const StarSolid = () => (
  <svg className="w-11 h-11 text-[#0b357a] shrink-0" viewBox="0 0 36 36" fill="currentColor">
    <path d="M18 3.5L22.35 12.32L32.08 13.73L25.04 20.59L26.7 30.28L18 25.7L9.3 30.28L10.96 20.59L3.92 13.73L13.65 12.32L18 3.5Z" />
  </svg>
);

// Academic Programs Icons (#0e4391)
const OpenBookIcon = () => (
  <svg className="w-12 h-12 text-[#0e4391]" viewBox="0 0 48 48" fill="currentColor">
    <path d="M22.5 11.5C18.2 9.3 12.2 8.8 6.5 10.2C5.6 10.4 5 11.2 5 12.1V34.5C5 35.7 6.1 36.6 7.3 36.3C12.5 35.1 18 35.5 22.5 37.8V11.5ZM41.5 10.2C35.8 8.8 29.8 9.3 25.5 11.5V37.8C30 35.5 35.5 35.1 40.7 36.3C41.9 36.6 43 35.7 43 34.5V12.1C43 11.2 42.4 10.4 41.5 10.2ZM19.5 17.5C16.3 16.3 12.4 16 8.8 16.8V14.3C12.6 13.5 16.5 13.8 19.5 15V17.5ZM19.5 23C16.3 21.8 12.4 21.5 8.8 22.3V19.8C12.6 19 16.5 19.3 19.5 20.5V23ZM19.5 28.5C16.3 27.3 12.4 27 8.8 27.8V25.3C12.6 24.5 16.5 24.8 19.5 26V28.5ZM39.2 16.8C35.6 16 31.7 16.3 28.5 17.5V15C31.5 13.8 35.4 13.5 39.2 14.3V16.8ZM39.2 22.3C35.6 21.5 31.7 21.8 28.5 23V20.5C31.5 19.3 35.4 19 39.2 19.8V22.3ZM39.2 27.8C35.6 27 31.7 27.3 28.5 28.5V26C31.5 24.8 35.4 24.5 39.2 25.3V27.8Z" />
  </svg>
);

const PaletteBrushIcon = () => (
  <svg className="w-12 h-12 text-[#0e4391]" viewBox="0 0 48 48" fill="currentColor">
    <path d="M23.5 7C13.8 7 6 14.6 6 24C6 33.4 13.6 41 23 41C25.9 41 28 38.8 28 36C28 34.7 27.5 33.6 26.7 32.7C26 31.9 25.6 31 25.6 30C25.6 27.8 27.4 26 29.6 26H32.5C37.7 26 42 21.7 42 16.5C42 11.1 33.7 7 23.5 7ZM13.5 24C11.8 24 10.5 22.7 10.5 21C10.5 19.3 11.8 18 13.5 18C15.2 18 16.5 19.3 16.5 21C16.5 22.7 15.2 24 13.5 24ZM18.5 16C16.8 16 15.5 14.7 15.5 13C15.5 11.3 16.8 10 18.5 10C20.2 10 21.5 11.3 21.5 13C21.5 14.7 20.2 16 18.5 16ZM27.5 16C25.8 16 24.5 14.7 24.5 13C24.5 11.3 25.8 10 27.5 10C29.2 10 30.5 11.3 30.5 13C30.5 14.7 29.2 16 27.5 16ZM34.5 22C32.8 22 31.5 20.7 31.5 19C31.5 17.3 32.8 16 34.5 16C36.2 16 37.5 17.3 37.5 19C37.5 20.7 36.2 22 34.5 22Z" />
    <path d="M42.8 6.2C41.7 5.1 39.9 5.1 38.8 6.2L30.5 14.5L34.5 18.5L42.8 10.2C43.9 9.1 43.9 7.3 42.8 6.2Z" />
  </svg>
);

const SoccerBallIcon = () => (
  <svg className="w-12 h-12 text-[#0e4391]" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="17.5" stroke="currentColor" strokeWidth="2.8" fill="white" />
    <polygon points="24,15.5 31.5,21 28.6,29.8 19.4,29.8 16.5,21" fill="currentColor" />
    <path d="M24 15.5V7M31.5 21L39.5 18M28.6 29.8L34.5 37.2M19.4 29.8L13.5 37.2M16.5 21L8.5 18" stroke="currentColor" strokeWidth="2.4" />
    <polygon points="24,6.5 29.5,9 24,11 18.5,9" fill="currentColor" />
    <polygon points="40,17 41.2,23.5 37.5,20" fill="currentColor" />
    <polygon points="8,17 6.8,23.5 10.5,20" fill="currentColor" />
    <polygon points="35,37.8 29.5,40.5 32.5,35.2" fill="currentColor" />
    <polygon points="13,37.8 18.5,40.5 15.5,35.2" fill="currentColor" />
  </svg>
);

const HandshakeIcon = () => (
  <svg className="w-12 h-12 text-[#0e4391]" viewBox="0 0 48 48" fill="currentColor">
    <path d="M41.2 16.5L34.5 9.8C33.3 8.6 31.4 8.6 30.2 9.8L25.6 14.4L21.5 11.2C19.8 9.9 17.3 10.1 15.8 11.6L6.8 20.6C5.6 21.8 5.6 23.7 6.8 24.9L11.5 29.6L16.2 24.9C17.6 23.5 19.8 23.3 21.4 24.4L25.8 27.6C27.1 28.5 28.9 28.4 30 27.2L34.2 23L38.2 26.9L41.2 23.9C42.8 22.3 42.8 18.1 41.2 16.5ZM20.5 34.5L15.2 29.2L12.8 31.6L18.1 36.9C19 37.8 20.4 37.8 21.3 36.9C22.2 36 22.2 34.6 21.3 33.7L20.5 34.5ZM26.2 33.8L19.5 27.1L17.1 29.5L23.8 36.2C24.7 37.1 26.1 37.1 27 36.2C27.9 35.3 27.9 33.9 27 33L26.2 33.8ZM31.5 30.5L24.8 23.8L22.4 26.2L29.1 32.9C30 33.8 31.4 33.8 32.3 32.9C33.2 32 33.2 30.6 32.3 29.7L31.5 30.5Z" />
  </svg>
);

type HeroMediaItem = {
  type: 'video' | 'image';
  src: string;
  alt: string;
};

type NavItem = {
  label: string;
  page?: PageRoute;
  sectionId?: string;
  bold?: boolean;
  dropdown?: { label: string; page: PageRoute; sectionId?: string }[];
};

export function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [heroSlide, setHeroSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const highlights = [
    {
      icon: <GraduationCapSolid />,
      title: 'Quality Education',
      line1: 'A strong foundation',
      line2: 'for lifelong learning',
    },
    {
      icon: <UsersGroupSolid />,
      title: 'Caring Environment',
      line1: 'A safe and supportive',
      line2: 'place to grow',
    },
    {
      icon: <TrophyStarSolid />,
      title: 'Holistic Development',
      line1: 'Academic, moral and',
      line2: 'social growth',
    },
    {
      icon: <StarSolid />,
      title: 'Dedicated Teachers',
      line1: "Committed to your child's",
      line2: 'success',
    },
  ];

  const navigateTo = (page: PageRoute, sectionId?: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Hero slides using the real school images & video in /public/images/
  const heroSlides: HeroMediaItem[] = [
    {
      type: 'image',
      src: '/images/activity2.jpeg',
      alt: 'Les Angelos Primary School pupils outdoor activity with teacher',
    },
    {
      type: 'image',
      src: '/images/school.jpeg',
      alt: 'Les Angelos Primary School Campus Building',
    },
    {
      type: 'image',
      src: '/images/activity3.jpeg',
      alt: 'Les Angelos Primary School children playing and running on the green lawn',
    },
    {
      type: 'image',
      src: '/images/activity1.jpeg',
      alt: 'Les Angelos Primary School playground activities',
    },
    {
      type: 'video',
      src: '/images/video1.mp4',
      alt: 'Les Angelos Primary School life in action video',
    },
  ];

  // Auto-advance hero slides when on home page
  useEffect(() => {
    if (currentPage !== 'home') return;
    const duration = heroSlides[heroSlide].type === 'video' ? 12000 : 6500;
    const timer = setTimeout(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [currentPage, heroSlide, heroSlides.length]);

  const navItems: NavItem[] = [
    { label: 'Home', page: 'home' },
    {
      label: 'About Us',
      page: 'about',
      dropdown: [
        { label: 'Our Story & Heritage', page: 'about' },
        { label: 'Mission, Vision & Values', page: 'about' },
        { label: 'Campus & Facilities', page: 'about' },
      ],
    },
    {
      label: 'Academics',
      page: 'home',
      sectionId: 'academics',
      dropdown: [
        { label: 'Nursery & Pre-Primary', page: 'home', sectionId: 'academics' },
        { label: 'Lower Primary (P1 - P3)', page: 'home', sectionId: 'academics' },
        { label: 'Upper Primary (P4 - P6)', page: 'home', sectionId: 'academics' },
        { label: 'Creative Arts & Sports', page: 'home', sectionId: 'academics' },
      ],
    },
    {
      label: 'Gallery',
      page: 'gallery',
      dropdown: [
        { label: 'Photos & Videos', page: 'gallery' },
        { label: 'Latest News & Events', page: 'home', sectionId: 'news' },
      ],
    },
    { label: 'Contact', page: 'contact' },
  ];

  const testimonials = [
    {
      quote:
        'Les Angelos Primary School has given my child a great start. The teachers are caring and the school environment is excellent.',
      name: 'Mrs. Umutesi Jeanne',
      role: 'Parent',
      avatar: '/images/parent-avatar.jpg',
    },
    {
      quote:
        'We are truly impressed by the academic discipline and strong moral values instilled in our children every single day.',
      name: 'Mr. Habimana Eric',
      role: 'Parent',
      avatar: '/images/parent-avatar.jpg',
    },
    {
      quote:
        'The holistic balance between core subjects, creative arts, and sports makes Les Angelos the best primary school in Kigali.',
      name: 'Mrs. Mukamana Claire',
      role: 'Parent',
      avatar: '/images/parent-avatar.jpg',
    },
  ];

  const newsItems = [
    {
      date: 'Nov 10, 2026',
      title: 'School Open Day 2026',
      image: '/images/activity1.jpeg',
    },
    {
      date: 'Nov 05, 2026',
      title: 'Creative Learning Session',
      image: '/images/learning.jpeg',
    },
    {
      date: 'Oct 28, 2026',
      title: 'Hands-On Art & Painting Activity',
      image: '/images/children.jpeg',
    },
  ];

  const isNavItemActive = (item: NavItem) => {
    if (item.label === 'Home' && currentPage === 'home') return true;
    if (item.label === 'About Us' && currentPage === 'about') return true;
    if (item.label === 'Gallery' && currentPage === 'gallery') return true;
    if (item.label === 'Contact' && currentPage === 'contact') return true;
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0b224e] selection:bg-[#f5c418] selection:text-[#082253]">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#022861] text-white text-[12px] sm:text-[13px]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-2 sm:py-0 sm:h-10 flex flex-wrap items-center justify-between gap-y-1.5 gap-x-3">
          {/* Left Contact Info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-white fill-white/15 shrink-0" />
              <span className="font-normal tracking-tight text-white/95">
                14 KK 361 St, Kigali, Rwanda
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-white fill-white shrink-0" />
              <a
                href="tel:+250785866480"
                className="font-normal tracking-tight text-white/95 hover:text-[#f5c418] transition-colors"
              >
                +250 785 866 480
              </a>
              <span className="text-white/40 hidden sm:inline">/</span>
              <a
                href="tel:+250781198780"
                className="hidden sm:inline font-normal tracking-tight text-white/95 hover:text-[#f5c418] transition-colors"
              >
                +250 781 198 780
              </a>
            </div>
            <a
              href="mailto:lesangelos2021@gmail.com"
              className="hidden md:flex items-center space-x-1.5 hover:text-[#f5c418] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="font-normal tracking-tight text-white/95">
                lesangelos2021@gmail.com
              </span>
            </a>
          </div>

          {/* Right Portals & Socials */}
          <div className="flex items-center space-x-3 sm:space-x-4 ml-auto">
            <div className="hidden sm:flex items-center space-x-2.5 text-[12.5px] text-white/90">
              <button
                onClick={() => navigateTo('contact')}
                className="hover:text-[#f5c418] transition-colors cursor-pointer"
              >
                Students Portal
              </button>
              <span className="text-white/35">|</span>
              <button
                onClick={() => navigateTo('contact')}
                className="hover:text-[#f5c418] transition-colors cursor-pointer"
              >
                Parents Portal
              </button>
              <span className="text-white/35">|</span>
              <button
                onClick={() => navigateTo('contact')}
                className="hover:text-[#f5c418] transition-colors cursor-pointer"
              >
                Staff Login
              </button>
            </div>
            <div className="flex items-center space-x-2.5 pl-1">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="text-white hover:text-[#f5c418] transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="text-white hover:text-[#f5c418] transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="text-white hover:text-[#f5c418] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR (Responsive Desktop + Mobile Drawer) */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-[72px] sm:h-[78px] flex items-center justify-between gap-3">
          {/* Crest + Brand Name */}
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className="flex items-center space-x-2.5 sm:space-x-3 shrink-0 group text-left cursor-pointer"
          >
            <img
              src="/images/crest.png"
              alt="Les Angelos Primary School Crest"
              className="h-[50px] sm:h-[62px] w-auto object-contain"
            />
            <div className="flex flex-col justify-center leading-none">
              <span className="font-serif-school text-[20px] sm:text-[25px] font-bold text-[#092b68] tracking-tight">
                Les Angelos
              </span>
              <span className="font-serif-school text-[13px] sm:text-[15px] font-semibold text-[#173973] mt-0.5">
                Primary School
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Hover Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-7 text-[14px] font-semibold text-[#11274e]">
            {navItems.map((item) => {
              const active = isNavItemActive(item);
              return (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    onClick={() => item.page && navigateTo(item.page, item.sectionId)}
                    className={`flex items-center space-x-1 py-2 transition-colors cursor-pointer ${
                      active
                        ? "relative text-[#092b68] font-bold after:content-[''] after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-[2.5px] after:bg-[#092b68] after:rounded-full"
                        : item.bold
                          ? 'font-bold hover:text-[#0e4391]'
                          : 'hover:text-[#0e4391]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown className="w-3.5 h-3.5 stroke-[2.5] text-[#11274e]/80 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </button>

                  {/* Desktop Hover Dropdown */}
                  {item.dropdown && (
                    <div className="absolute left-0 top-full pt-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                      <div className="bg-white rounded-lg shadow-lg border border-slate-100 py-2 min-w-[215px]">
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.label}
                            type="button"
                            onClick={() => navigateTo(sub.page, sub.sectionId)}
                            className="w-full text-left block px-4 py-2 text-[13px] font-medium text-[#11274e] hover:bg-[#ebf0fc] hover:text-[#092b68] transition-colors cursor-pointer"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Apply Now CTA + Mobile Hamburger Button */}
          <div className="flex items-center space-x-2.5">
            <button
              type="button"
              onClick={() => navigateTo('contact')}
              className="hidden sm:inline-flex bg-[#f5c418] hover:bg-[#eab808] text-[#0b224e] font-bold text-[13px] sm:text-[13.5px] px-5 sm:px-6 py-2.5 rounded-full shadow-xs transition-all shrink-0 cursor-pointer"
            >
              Apply Now
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#092b68] hover:bg-slate-100 focus:outline-none transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Left-Side Slide-Over Sidebar Drawer */}
        <div
          className={`lg:hidden fixed inset-0 z-50 transition-visibility duration-300 ${
            mobileMenuOpen ? 'visible' : 'invisible pointer-events-none'
          }`}
        >
          {/* Dark Backdrop Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className={`fixed inset-0 bg-[#02183e]/60 backdrop-blur-xs transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Left Sidebar Panel */}
          <aside
            className={`fixed top-0 left-0 bottom-0 w-[290px] sm:w-[320px] max-w-[85vw] bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out z-10 ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Sidebar Header with School Crest & Close Button */}
            <div className="flex items-center justify-between px-4 h-[74px] border-b border-slate-100 bg-[#f8faff] shrink-0">
              <button
                type="button"
                onClick={() => navigateTo('home')}
                className="flex items-center space-x-2.5 text-left cursor-pointer"
              >
                <img
                  src="/images/crest.png"
                  alt="Les Angelos Primary School Crest"
                  className="h-[46px] w-auto object-contain"
                />
                <div className="flex flex-col justify-center leading-none">
                  <span className="font-serif-school text-[19px] font-bold text-[#092b68] tracking-tight">
                    Les Angelos
                  </span>
                  <span className="font-serif-school text-[12.5px] font-semibold text-[#173973] mt-0.5">
                    Primary School
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close sidebar menu"
                className="p-2 rounded-lg text-[#092b68] hover:bg-slate-200/70 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar Navigation Links */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isExpanded = openMobileDropdown === item.label;
                const active = isNavItemActive(item);
                return (
                  <div key={item.label} className="border-b border-slate-100/80 last:border-none">
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          if (item.page) navigateTo(item.page, item.sectionId);
                        }}
                        className={`flex-1 text-left py-3 px-2 rounded-lg text-[15px] transition-colors cursor-pointer ${
                          active
                            ? 'font-extrabold text-[#092b68] bg-[#ebf0fc]/70'
                            : 'font-semibold text-[#11274e] hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </button>
                      {item.dropdown && (
                        <button
                          type="button"
                          onClick={() =>
                            setOpenMobileDropdown(isExpanded ? null : item.label)
                          }
                          aria-label={`Expand ${item.label}`}
                          className="p-2.5 text-[#092b68] hover:bg-slate-100 rounded-md cursor-pointer ml-1"
                        >
                          <ChevronDown
                            className={`w-4 h-4 stroke-[2.5] transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {item.dropdown && isExpanded && (
                      <div className="pl-3 pr-2 py-1.5 space-y-1 bg-[#f5f8ff] rounded-lg mb-2 mt-1 border-l-2 border-[#092b68]">
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.label}
                            type="button"
                            onClick={() => navigateTo(sub.page, sub.sectionId)}
                            className="w-full text-left block py-2 px-2.5 rounded-md text-[13.5px] font-medium text-[#1c335f] hover:bg-white hover:text-[#092b68] transition-colors cursor-pointer"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Sidebar Footer: Portals, Contact Info & Apply Now Button */}
            <div className="p-4 border-t border-slate-100 bg-[#f8faff] space-y-3.5 shrink-0">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[12px] font-semibold text-[#2c436f]">
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#092b68] cursor-pointer"
                >
                  Students Portal
                </button>
                <span>•</span>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#092b68] cursor-pointer"
                >
                  Parents Portal
                </button>
                <span>•</span>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#092b68] cursor-pointer"
                >
                  Staff Login
                </button>
              </div>

              <button
                type="button"
                onClick={() => navigateTo('contact')}
                className="w-full inline-flex items-center justify-center bg-[#f5c418] hover:bg-[#eab808] text-[#0b224e] font-bold text-[14px] px-6 py-3 rounded-full shadow-xs transition-all cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </aside>
        </div>
      </header>

      {/* PAGE CONTENT ROUTER */}
      {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
      {currentPage === 'gallery' && <GalleryPage onNavigate={navigateTo} />}
      {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}

      {currentPage === 'home' && (
        <>
          {/* 3. HERO BANNER SECTION (Interactive Carousel with School Images & Video) */}
          <section
            id="home"
            className="relative w-full h-[380px] sm:h-[420px] md:h-[445px] overflow-hidden bg-[#0b1d44]"
          >
            {/* Background Media Slides */}
            {heroSlides.map((slide, idx) => {
              const isCurrent = heroSlide === idx;
              return (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isCurrent ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none -z-10'
                  }`}
                >
                  {slide.type === 'video' ? (
                    <video
                      src={slide.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </div>
              );
            })}

            {/* Left dark navy gradient overlay for 100% readable white typography matching the mockup */}
            <div
              className="absolute inset-0 z-[1]"
              style={{
                background:
                  'linear-gradient(90deg, rgba(6, 23, 58, 0.78) 0%, rgba(8, 28, 68, 0.52) 44%, rgba(11, 29, 68, 0.12) 78%, rgba(11, 29, 68, 0.0) 100%)',
              }}
            />

            {/* Hero Content Container */}
            <div className="relative z-10 max-w-[1160px] mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
              <div className="max-w-[540px] text-white -mt-4 sm:-mt-3">
                <p className="text-[24px] sm:text-[33px] font-bold leading-tight tracking-tight drop-shadow-xs">
                  Welcome to
                </p>
                <h1 className="text-[38px] sm:text-[58px] font-extrabold leading-[1.05] tracking-tight mt-0.5 drop-shadow-xs">
                  Les Angelos
                </h1>
                <h2 className="text-[26px] sm:text-[41px] font-bold leading-[1.15] tracking-tight mt-0.5 drop-shadow-xs">
                  Primary School
                </h2>
                <p className="text-[14.5px] sm:text-[18.5px] font-medium text-white/95 mt-3 sm:mt-3.5 tracking-tight drop-shadow-xs">
                  Nurturing Young Minds for a Brighter Future.
                </p>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    onClick={() => navigateTo('about')}
                    className="inline-flex items-center space-x-2.5 bg-[#f5c418] hover:bg-[#eab808] text-[#0b224e] font-bold text-[13.5px] sm:text-[14px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md transition-all cursor-pointer"
                  >
                    <span>Discover Our School</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Slider Pagination Dots (Bottom Center) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.src}
                  onClick={() => setHeroSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-3 rounded-full transition-all cursor-pointer border-2 border-white ${
                    heroSlide === idx ? 'w-5 bg-white' : 'w-3 bg-transparent hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Hero Slider Prev/Next Circular Buttons (Bottom Right) */}
            <div className="absolute bottom-3.5 right-4 sm:right-10 z-20 flex items-center space-x-2 sm:space-x-2.5">
              <button
                onClick={() =>
                  setHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
                }
                aria-label="Previous slide"
                className="w-8 h-8 rounded-full border border-white/80 bg-black/25 hover:bg-black/45 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
              </button>
              <button
                onClick={() => setHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                aria-label="Next slide"
                className="w-8 h-8 rounded-full border border-white/80 bg-black/25 hover:bg-black/45 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>
          </section>

          {/* 4. FOUR HIGHLIGHTS STRIP (Infinite Marquee on Mobile/Tablet, Static 4-Column Grid on Desktop) */}
          <section className="bg-white border-b border-slate-100 py-5 sm:py-6 overflow-hidden">
            {/* Mobile & Tablet Infinite Continuous Marquee (< lg) */}
            <div className="lg:hidden relative w-full overflow-hidden">
              <div className="animate-marquee-infinite">
                {[...highlights, ...highlights].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3.5 px-7 border-r border-slate-200 shrink-0"
                  >
                    {item.icon}
                    <div>
                      <h3 className="text-[15px] font-bold text-[#0b2559] leading-snug whitespace-nowrap">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[#2c436f] leading-[1.35] mt-0.5 whitespace-nowrap">
                        {item.line1}
                        <br />
                        {item.line2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Static 4-Column Grid (lg and up — 100% faithful to original mockup) */}
            <div className="hidden lg:block max-w-[1160px] mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-4 divide-x divide-slate-200">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 py-1 px-6 first:pl-2 last:pr-2"
                  >
                    {item.icon}
                    <div>
                      <h3 className="text-[15px] font-bold text-[#0b2559] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[#2c436f] leading-[1.35] mt-0.5">
                        {item.line1}
                        <br />
                        {item.line2}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. ABOUT LES ANGELOS PRIMARY SCHOOL */}
          <section id="about" className="bg-[#ebf0fc] py-9 sm:py-10">
            <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
                {/* Left School Campus Photo */}
                <div className="lg:col-span-6">
                  <div className="rounded-[12px] overflow-hidden shadow-sm">
                    <img
                      src="/images/school.jpeg"
                      alt="Les Angelos Primary School Campus"
                      className="w-full h-[230px] sm:h-[268px] object-cover block"
                    />
                  </div>
                </div>

                {/* Right Text Content */}
                <div className="lg:col-span-6">
                  <div className="w-12 h-[3.5px] bg-[#f5c418] rounded-full mb-3" />
                  <h2 className="text-[22px] sm:text-[26px] font-extrabold text-[#0b2559] tracking-tight">
                    About Les Angelos Primary School
                  </h2>
                  <p className="text-[14.5px] text-[#1c335f] leading-[1.6] mt-3.5">
                    Les Angelos Primary School is dedicated to providing high-quality education in a
                    friendly and disciplined environment. We believe every child has potential, and
                    we are here to help them achieve their dreams.
                  </p>
                  <p className="text-[14.5px] text-[#1c335f] leading-[1.6] mt-3.5">
                    With experienced teachers, modern facilities and a strong values-based
                    curriculum, we prepare our pupils for a successful future in school and beyond.
                  </p>

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => navigateTo('about')}
                      className="inline-flex items-center space-x-2.5 bg-[#082a68] hover:bg-[#0b3582] text-white font-semibold text-[13.5px] px-6 py-3 rounded-full shadow-xs transition-all cursor-pointer"
                    >
                      <span>Learn More About Us</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Thin white divider matching original layout */}
          <div className="h-2.5 bg-white w-full" />

          {/* 6. OUR ACADEMIC PROGRAMS */}
          <section id="academics" className="bg-[#dbe9fd] py-9">
            <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left Intro Column */}
                <div className="lg:col-span-4 pr-2">
                  <h2 className="text-[22px] sm:text-[25px] font-extrabold text-[#0b2559] tracking-tight">
                    Our Academic Programs
                  </h2>
                  <p className="text-[14px] text-[#1c335f] leading-[1.55] mt-2.5">
                    We offer a complete primary education from P1 to P6, focusing on knowledge,
                    creativity and good values.
                  </p>
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => navigateTo('about')}
                      className="inline-flex items-center space-x-2 bg-[#f5c418] hover:bg-[#eab808] text-[#0b224e] font-bold text-[13.5px] px-5 py-2.5 rounded-full shadow-xs transition-all cursor-pointer"
                    >
                      <span>Explore Our Curriculum</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.4]" />
                    </button>
                  </div>
                </div>

                {/* Right 4 Program Cards */}
                <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {/* Card 1 */}
                  <div className="bg-white rounded-[10px] px-3 py-5 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(11,37,89,0.05)]">
                    <OpenBookIcon />
                    <h3 className="text-[14.5px] font-bold text-[#0b2559] mt-3">Core Subjects</h3>
                    <p className="text-[12.5px] text-[#2c436f] leading-[1.35] mt-1">
                      (Math, English,
                      <br />
                      Science...)
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-[10px] px-3 py-5 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(11,37,89,0.05)]">
                    <PaletteBrushIcon />
                    <h3 className="text-[14.5px] font-bold text-[#0b2559] mt-3">Creative Arts</h3>
                    <p className="text-[12.5px] text-[#2c436f] leading-[1.35] mt-1">
                      (Music, Art, Drama)
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-[10px] px-3 py-5 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(11,37,89,0.05)]">
                    <SoccerBallIcon />
                    <h3 className="text-[14.5px] font-bold text-[#0b2559] mt-3">
                      Sports &amp; Games
                    </h3>
                    <p className="text-[12.5px] text-[#2c436f] leading-[1.35] mt-1">
                      (Healthy and active
                      <br />
                      pupils)
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white rounded-[10px] px-3 py-5 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(11,37,89,0.05)]">
                    <HandshakeIcon />
                    <h3 className="text-[14.5px] font-bold text-[#0b2559] mt-3">
                      Values &amp; Ethics
                    </h3>
                    <p className="text-[12.5px] text-[#2c436f] leading-[1.35] mt-1">
                      (Respect, honesty,
                      <br />
                      kindness)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 7. LATEST NEWS & EVENTS + WHAT PARENTS SAY */}
          <section id="news" className="bg-white py-9">
            <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
                {/* Left: Latest News & Events (8 cols) */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-[3.5px] bg-[#f5c418] rounded-full mb-2.5" />
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-[22px] sm:text-[24px] font-extrabold text-[#0b2559] tracking-tight">
                        Latest News &amp; Events
                      </h2>
                      <button
                        type="button"
                        onClick={() => navigateTo('gallery')}
                        className="inline-flex items-center space-x-1 text-[13px] font-bold text-[#0b2559] hover:text-[#0e4391] transition-colors cursor-pointer"
                      >
                        <span>View All News</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>

                  {/* 3 News Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {newsItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-[10px] border border-slate-200/90 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[150px] sm:h-[126px] object-cover block"
                        />
                        <div className="p-3.5 flex flex-col flex-1 justify-between">
                          <div>
                            <div className="flex items-center space-x-1.5 text-[11.5px] text-[#4a5f85] font-medium">
                              <Calendar className="w-3.5 h-3.5 text-[#274b8a]" />
                              <span>{item.date}</span>
                            </div>
                            <h3 className="text-[14.5px] font-extrabold text-[#0b2559] mt-1.5 leading-snug">
                              {item.title}
                            </h3>
                          </div>
                          <button
                            type="button"
                            onClick={() => navigateTo('gallery')}
                            className="inline-flex items-center space-x-1 text-[12.5px] font-bold text-[#0b2559] hover:text-[#0e4391] mt-2.5 cursor-pointer"
                          >
                            <span>Read More</span>
                            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: What Parents Say (4 cols) */}
                <div className="lg:col-span-4 flex">
                  <div className="bg-[#052968] text-white rounded-[12px] p-6 w-full flex flex-col justify-between shadow-sm relative">
                    <div>
                      <h2 className="text-[21px] font-extrabold tracking-tight text-white">
                        What Parents Say
                      </h2>

                      {/* Yellow Opening Quote Icon + Indented Quote Text */}
                      <div className="mt-2 relative">
                        <svg
                          className="w-8 h-8 text-[#f5c418] mb-0.5"
                          viewBox="0 0 36 36"
                          fill="currentColor"
                        >
                          <path d="M14.5 9C9.8 11.2 7 15.3 7 20.8C7 24.8 9.7 27.5 13 27.5C15.9 27.5 18 25.4 18 22.6C18 19.8 15.8 17.8 13.2 17.8C12.7 17.8 12.1 17.9 11.8 18C12.2 14.9 14.3 12.3 17 11L14.5 9ZM28.5 9C23.8 11.2 21 15.3 21 20.8C21 24.8 23.7 27.5 27 27.5C29.9 27.5 32 25.4 32 22.6C32 19.8 29.8 17.8 27.2 17.8C26.7 17.8 26.1 17.9 25.8 18C26.2 14.9 28.3 12.3 31 11L28.5 9Z" />
                        </svg>
                        <p className="text-[14px] text-white/95 leading-[1.58] pl-5">
                          {testimonials[testimonialSlide].quote}
                        </p>
                      </div>
                    </div>

                    {/* Parent Profile + Controls */}
                    <div className="mt-5">
                      <div className="flex items-center space-x-3 pl-5">
                        <img
                          src={testimonials[testimonialSlide].avatar}
                          alt={testimonials[testimonialSlide].name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-white"
                        />
                        <div>
                          <h4 className="text-[14px] font-bold text-white leading-tight">
                            {testimonials[testimonialSlide].name}
                          </h4>
                          <p className="text-[12.5px] text-white/80 mt-0.5">
                            {testimonials[testimonialSlide].role}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Dots and Arrows */}
                      <div className="flex items-center justify-between mt-3 pt-1">
                        <div className="flex-1 flex justify-center items-center space-x-2 pl-10">
                          {[0, 1, 2].map((idx) => (
                            <button
                              key={idx}
                              onClick={() => setTestimonialSlide(idx)}
                              aria-label={`Testimonial ${idx + 1}`}
                              className={`w-2.5 h-2.5 rounded-full border border-white transition-colors cursor-pointer ${
                                testimonialSlide === idx ? 'bg-white' : 'bg-transparent'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() =>
                              setTestimonialSlide((prev) => (prev === 0 ? 2 : prev - 1))
                            }
                            aria-label="Previous testimonial"
                            className="text-white/90 hover:text-[#f5c418] transition-colors cursor-pointer"
                          >
                            <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
                          </button>
                          <button
                            onClick={() =>
                              setTestimonialSlide((prev) => (prev === 2 ? 0 : prev + 1))
                            }
                            aria-label="Next testimonial"
                            className="text-white/90 hover:text-[#f5c418] transition-colors cursor-pointer"
                          >
                            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 8. FOOTER */}
      <footer className="bg-[#02265e] text-white mt-auto">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6 py-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 items-start">
            {/* Col 1: School Crest + Tagline (4 cols) */}
            <div className="sm:col-span-2 md:col-span-4">
              <button
                type="button"
                onClick={() => navigateTo('home')}
                className="flex items-center space-x-3 text-left cursor-pointer"
              >
                <img
                  src="/images/crest.png"
                  alt="Les Angelos Primary School Crest"
                  className="h-[62px] w-auto object-contain"
                />
                <div className="flex flex-col justify-center leading-none">
                  <span className="font-serif-school text-[24px] font-bold text-white tracking-tight">
                    Les Angelos
                  </span>
                  <span className="font-serif-school text-[15px] font-semibold text-white/95 mt-0.5">
                    Primary School
                  </span>
                </div>
              </button>
              <p className="italic text-[14px] text-white/90 mt-4 font-normal">
                Nurturing Young Minds for a Brighter Future.
              </p>
            </div>

            {/* Col 2: Quick Links (2 cols) */}
            <div className="md:col-span-2">
              <h3 className="text-[14.5px] font-bold text-white mb-3">Quick Links</h3>
              <ul className="space-y-1.5 text-[13.5px] text-white/90">
                <li>
                  <button
                    onClick={() => navigateTo('home')}
                    className="hover:text-[#f5c418] transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('about')}
                    className="hover:text-[#f5c418] transition-colors cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('home', 'academics')}
                    className="hover:text-[#f5c418] transition-colors cursor-pointer"
                  >
                    Academics
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('gallery')}
                    className="hover:text-[#f5c418] transition-colors cursor-pointer"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('contact')}
                    className="hover:text-[#f5c418] transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Get In Touch (3 cols) */}
            <div className="md:col-span-3">
              <div className="relative inline-block mb-3">
                <div className="w-11 h-[2.5px] bg-[#f5c418] mb-0.5 ml-6" />
                <h3 className="text-[14.5px] font-bold text-white">Get In Touch</h3>
              </div>
              <ul className="space-y-2.5 text-[13.5px] text-white/90">
                <li className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <div className="leading-snug">
                    <div>14 KK 361 St, Kigali, Rwanda</div>
                    <div className="text-white/80 text-[12.5px]">P.O. Box 2376, Kigali, Rwanda</div>
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Phone className="w-4 h-4 text-white fill-white shrink-0 mt-0.5" />
                  <div className="leading-snug flex flex-col">
                    <a href="tel:+250785866480" className="hover:text-[#f5c418] transition-colors">
                      +250 785 866 480
                    </a>
                    <a href="tel:+250781198780" className="hover:text-[#f5c418] transition-colors">
                      +250 781 198 780
                    </a>
                  </div>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-white shrink-0" />
                  <a
                    href="mailto:lesangelos2021@gmail.com"
                    className="hover:text-[#f5c418] transition-colors"
                  >
                    lesangelos2021@gmail.com
                  </a>
                </li>
              </ul>
              <div className="flex items-center space-x-3.5 mt-4">
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="text-white hover:text-[#f5c418] transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="#youtube"
                  aria-label="YouTube"
                  className="text-white hover:text-[#f5c418] transition-colors"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  className="text-white hover:text-[#f5c418] transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Col 4: Newsletter (3 cols) */}
            <div className="sm:col-span-2 md:col-span-3">
              <h3 className="text-[14.5px] font-bold text-white mb-2">Newsletter</h3>
              <p className="text-[12.5px] text-white/85 mb-3.5 leading-relaxed">
                Stay updated with our latest news and events.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center space-x-1.5"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white text-slate-800 placeholder:text-slate-400 text-[13px] px-3.5 py-2.5 rounded-[5px] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#f5c418] hover:bg-[#eab808] text-[#0b224e] font-bold text-[13px] px-4 py-2.5 rounded-[5px] shrink-0 transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="bg-[#011c52] border-t border-white/10 py-3.5 text-[12px] text-white/80">
          <div className="max-w-[1160px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <p>© 2026 Les Angelos Primary School. All rights reserved.</p>
            <div className="flex items-center space-x-2.5">
              <button
                onClick={() => navigateTo('contact')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => navigateTo('contact')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => navigateTo('home')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
