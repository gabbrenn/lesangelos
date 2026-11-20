import { useState } from 'react';
import { Camera, Film, Maximize2, Play, X, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Language } from '../App';

interface GalleryPageProps {
  onNavigate: (page: 'home' | 'about' | 'gallery' | 'contact') => void;
  lang: Language;
}

type GalleryCategoryKey = 'all' | 'campus' | 'learning' | 'outdoor' | 'video';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  categoryKey: Exclude<GalleryCategoryKey, 'all'>;
  categoryLabelFr: string;
  categoryLabelEn: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
}

export function GalleryPage({ onNavigate, lang }: GalleryPageProps) {
  const isFr = lang === 'fr';
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryKey>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'campus-1',
      type: 'image',
      src: '/images/school.jpeg',
      categoryKey: 'campus',
      categoryLabelFr: 'Campus',
      categoryLabelEn: 'Campus',
      titleFr: 'Bâtiment Principal de l’École Internationale Les Angelos',
      titleEn: 'Les Angelos International School Main Building',
      descriptionFr:
        'Notre bâtiment scolaire accueillant et coloré entouré de pelouses verdoyantes et de palmiers.',
      descriptionEn:
        'Our welcoming, colorful school building surrounded by green lawns and palm trees.',
    },
    {
      id: 'outdoor-1',
      type: 'image',
      src: '/images/activity2.jpeg',
      categoryKey: 'outdoor',
      categoryLabelFr: 'Plein Air & Sports',
      categoryLabelEn: 'Outdoor & Sports',
      titleFr: 'Exercices Matinaux & Mouvement en Plein Air',
      titleEn: 'Morning Outdoor Movement & Exercise',
      descriptionFr:
        'Les élèves participent à des activités d’équilibre et de coordination en plein air avec leur enseignante.',
      descriptionEn:
        'Pupils enjoying guided outdoor balance and coordination activities with their teacher.',
    },
    {
      id: 'learning-1',
      type: 'image',
      src: '/images/learning.jpeg',
      categoryKey: 'learning',
      categoryLabelFr: 'Classe & Apprentissage',
      categoryLabelEn: 'Classroom & Learning',
      titleFr: 'Classe d’Éveil Interactive',
      titleEn: 'Interactive Early Learning Classroom',
      descriptionFr:
        'Apprentissage collaboratif sur le tapis de classe avec les chiffres, les voyelles et les affiches en français.',
      descriptionEn:
        'Collaborative group learning on the classroom mat with numbers, vowels, and French charts.',
    },
    {
      id: 'learning-2',
      type: 'image',
      src: '/images/children.jpeg',
      categoryKey: 'learning',
      categoryLabelFr: 'Classe & Apprentissage',
      categoryLabelEn: 'Classroom & Learning',
      titleFr: 'Atelier Peinture Créative (« Je peins le carré »)',
      titleEn: 'Hands-On Creative Painting ("Je peins le carré")',
      descriptionFr:
        'Nos jeunes élèves développent leur motricité fine et leur créativité grâce à la peinture au doigt.',
      descriptionEn:
        'Young learners developing fine motor skills and creativity through finger painting.',
    },
    {
      id: 'outdoor-2',
      type: 'image',
      src: '/images/activity1.jpeg',
      categoryKey: 'outdoor',
      categoryLabelFr: 'Plein Air & Sports',
      categoryLabelEn: 'Outdoor & Sports',
      titleFr: 'Courses & Éducation Physique dans la Cour',
      titleEn: 'Playground Races & Physical Education',
      descriptionFr:
        'Des élèves actifs et joyeux courant sur l’aire de jeux de l’école dans leur uniforme jaune.',
      descriptionEn:
        'Active and joyful pupils running across the school playground in their yellow uniforms.',
    },
    {
      id: 'outdoor-3',
      type: 'image',
      src: '/images/activity3.jpeg',
      categoryKey: 'outdoor',
      categoryLabelFr: 'Plein Air & Sports',
      categoryLabelEn: 'Outdoor & Sports',
      titleFr: 'Jeux d’Équipe sur la Pelouse Verte',
      titleEn: 'Team Games on the Green Lawn',
      descriptionFr:
        'Développer l’amitié, l’esprit d’équipe et de saines habitudes lors des récréations en plein air.',
      descriptionEn:
        'Building friendship, teamwork, and healthy habits during outdoor recreation.',
    },
    {
      id: 'video-1',
      type: 'video',
      src: '/images/video1.mp4',
      categoryKey: 'video',
      categoryLabelFr: 'Vidéo',
      categoryLabelEn: 'Video',
      titleFr: 'La Vie Scolaire à Les Angelos en Vidéo',
      titleEn: 'Les Angelos International School Life in Action',
      descriptionFr:
        'Découvrez nos élèves et enseignants lors d’une journée joyeuse d’apprentissage et de jeux en plein air.',
      descriptionEn:
        'Watch our pupils and teachers during a joyful day of learning and outdoor play.',
    },
    {
      id: 'campus-2',
      type: 'image',
      src: '/images/about-school.jpg',
      categoryKey: 'campus',
      categoryLabelFr: 'Campus',
      categoryLabelEn: 'Campus',
      titleFr: 'Cour de l’École & Allée des Salles de Classe',
      titleEn: 'School Courtyard & Classrooms Walkway',
      descriptionFr:
        'Des allées propres et paysagées reliant nos salles de classe du primaire.',
      descriptionEn:
        'Clean, landscaped walkways connecting our primary school classrooms.',
    },
  ];

  const categories: { key: GalleryCategoryKey; labelFr: string; labelEn: string }[] = [
    { key: 'all', labelFr: 'Tout', labelEn: 'All' },
    { key: 'campus', labelFr: 'Campus', labelEn: 'Campus' },
    { key: 'learning', labelFr: 'Classe & Apprentissage', labelEn: 'Classroom & Learning' },
    { key: 'outdoor', labelFr: 'Plein Air & Sports', labelEn: 'Outdoor & Sports' },
    { key: 'video', labelFr: 'Vidéo', labelEn: 'Video' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.categoryKey === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  return (
    <div className="flex flex-col">
      {/* Page Hero Banner */}
      <section className="relative h-[250px] sm:h-[300px] w-full overflow-hidden bg-[#061c47]">
        <img
          src="/images/activity3.jpeg"
          alt="Les Angelos Primary School Gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(2, 38, 94, 0.88) 0%, rgba(5, 41, 104, 0.72) 55%, rgba(5, 41, 104, 0.45) 100%)',
          }}
        />
        <div className="relative z-10 max-w-[1160px] mx-auto px-4 sm:px-6 h-full flex flex-col justify-center text-white">
          <div className="flex items-center space-x-2 text-[13px] font-medium text-white/80 mb-2">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#f5c418] transition-colors cursor-pointer"
            >
              {isFr ? 'Accueil' : 'Home'}
            </button>
            <span>/</span>
            <span className="text-[#f5c418] font-semibold">
              {isFr ? 'Galerie' : 'Gallery'}
            </span>
          </div>
          <h1 className="text-[30px] sm:text-[44px] font-extrabold tracking-tight leading-tight">
            {isFr ? 'Galerie Photos & Vidéos de l’École' : 'School Photo & Video Gallery'}
          </h1>
          <p className="text-[14.5px] sm:text-[17px] text-white/90 max-w-[620px] mt-2">
            {isFr
              ? 'Découvrez en images les moments d’apprentissage, d’arts créatifs, de sports en plein air et la vie sur le campus de l’École Internationale Les Angelos.'
              : 'Explore moments of discovery, creative arts, outdoor sports, and campus life at Les Angelos International School.'}
          </p>
        </div>
      </section>

      {/* Featured School Video Showcase */}
      <section className="bg-[#ebf0fc] py-10 sm:py-12 border-b border-slate-200/70">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="w-12 h-[3.5px] bg-[#f5c418] rounded-full mb-3" />
              <div className="inline-flex items-center space-x-1.5 text-[12.5px] font-bold uppercase tracking-wider text-[#0e4391] mb-1">
                <Film className="w-4 h-4" />
                <span>{isFr ? 'Vidéo à la Une' : 'Featured Video'}</span>
              </div>
              <h2 className="text-[24px] sm:text-[28px] font-extrabold text-[#0b2559] leading-tight">
                {isFr
                  ? 'Vivez une Journée à l’École Internationale Les Angelos'
                  : 'Experience a Day at Les Angelos International School'}
              </h2>
              <p className="text-[14.5px] text-[#1c335f] leading-[1.65] mt-3">
                {isFr
                  ? 'Voyez nos élèves en action — des leçons interactives en classe et projets créatifs aux jeux de plein air et à l’éducation physique sur notre campus verdoyant à Kigali.'
                  : 'See our pupils in action—from interactive classroom lessons and creative projects to outdoor games and physical education on our green campus in Kigali.'}
              </p>
              <div className="mt-6">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#f5c418] hover:bg-[#eab808] text-[#0b224e] font-bold text-[13.5px] px-6 py-3 rounded-full shadow-xs transition-all cursor-pointer"
                >
                  {isFr ? 'Planifier une Visite de l’École' : 'Book a School Tour'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[14px] overflow-hidden shadow-lg bg-[#051a44] border-4 border-white">
                <video
                  src="/images/video1.mp4"
                  controls
                  playsInline
                  poster="/images/activity2.jpeg"
                  className="w-full max-h-[380px] object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Photo & Video Grid */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <div className="w-12 h-[3.5px] bg-[#f5c418] rounded-full mb-2.5" />
              <h2 className="text-[24px] sm:text-[28px] font-extrabold text-[#0b2559]">
                {isFr ? 'Moments de Vie sur le Campus' : 'Campus & Student Life Moments'}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const active = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setLightboxIndex(null);
                    }}
                    className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all cursor-pointer ${
                      active
                        ? 'bg-[#082a68] text-white shadow-xs'
                        : 'bg-[#ebf0fc] text-[#0b2559] hover:bg-[#dbe9fd]'
                    }`}
                  >
                    {isFr ? cat.labelFr : cat.labelEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => {
              const title = isFr ? item.titleFr : item.titleEn;
              const desc = isFr ? item.descriptionFr : item.descriptionEn;
              const catLabel = isFr ? item.categoryLabelFr : item.categoryLabelEn;
              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(idx)}
                  className="group bg-white rounded-[12px] border border-slate-200/90 overflow-hidden shadow-[0_2px_10px_rgba(11,37,89,0.05)] hover:shadow-md transition-all cursor-pointer flex flex-col"
                >
                  <div className="relative h-[220px] w-full overflow-hidden bg-slate-900">
                    {item.type === 'video' ? (
                      <>
                        <video
                          src={item.src}
                          muted
                          loop
                          playsInline
                          onMouseOver={(e) => e.currentTarget.play()}
                          onMouseOut={(e) => e.currentTarget.pause()}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#f5c418] text-[#0b224e] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <img
                          src={item.src}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[#052968]/0 group-hover:bg-[#052968]/35 transition-colors flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-white text-[#0b2559] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-md">
                            <Maximize2 className="w-4 h-4" />
                          </div>
                        </div>
                      </>
                    )}

                    <span className="absolute top-3 left-3 bg-[#022861]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs flex items-center space-x-1">
                      {item.type === 'video' ? (
                        <Film className="w-3 h-3 text-[#f5c418]" />
                      ) : (
                        <Camera className="w-3 h-3 text-[#f5c418]" />
                      )}
                      <span>{catLabel}</span>
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[15.5px] font-extrabold text-[#0b2559] group-hover:text-[#0e4391] transition-colors">
                        {title}
                      </h3>
                      <p className="text-[13px] text-[#2c436f] leading-[1.5] mt-1">{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#02265e] rounded-2xl overflow-hidden shadow-2xl border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 text-white">
              <div>
                <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#f5c418]">
                  {isFr
                    ? filteredItems[lightboxIndex].categoryLabelFr
                    : filteredItems[lightboxIndex].categoryLabelEn}
                </span>
                <h3 className="text-[16px] font-bold leading-snug">
                  {isFr
                    ? filteredItems[lightboxIndex].titleFr
                    : filteredItems[lightboxIndex].titleEn}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Viewer */}
            <div className="relative bg-black flex items-center justify-center max-h-[72vh]">
              {filteredItems[lightboxIndex].type === 'video' ? (
                <video
                  src={filteredItems[lightboxIndex].src}
                  controls
                  autoPlay
                  className="max-h-[70vh] w-full object-contain"
                />
              ) : (
                <img
                  src={filteredItems[lightboxIndex].src}
                  alt={
                    isFr
                      ? filteredItems[lightboxIndex].titleFr
                      : filteredItems[lightboxIndex].titleEn
                  }
                  className="max-h-[70vh] w-auto object-contain"
                />
              )}

              {/* Prev / Next Controls */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={prevLightbox}
                    aria-label="Previous media"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-[#f5c418] text-white hover:text-[#0b224e] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextLightbox}
                    aria-label="Next media"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-[#f5c418] text-white hover:text-[#0b224e] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Caption Footer */}
            <div className="px-5 py-3.5 text-[13.5px] text-white/85 flex items-center justify-between">
              <p>
                {isFr
                  ? filteredItems[lightboxIndex].descriptionFr
                  : filteredItems[lightboxIndex].descriptionEn}
              </p>
              <span className="text-[12px] text-white/60 shrink-0 ml-4">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
