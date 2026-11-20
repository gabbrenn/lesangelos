import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Compass,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import type { Language } from '../App';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'about' | 'gallery' | 'contact') => void;
  lang: Language;
}

export function AboutPage({ onNavigate, lang }: AboutPageProps) {
  const isFr = lang === 'fr';

  const coreValues = isFr
    ? [
        {
          icon: <Award className="w-7 h-7 text-[#0e4391]" />,
          title: 'Excellence Académique',
          description:
            'Nous fixons des normes académiques élevées et donnons à chaque élève, de la maternelle et P1 à P6, l’esprit critique, le bilinguisme et de solides compétences.',
        },
        {
          icon: <Heart className="w-7 h-7 text-[#0e4391]" />,
          title: 'Communauté Bienveillante',
          description:
            'Chaque enfant est connu, valorisé et soutenu dans un environnement chaleureux et familial où la curiosité et la confiance s’épanouissent.',
        },
        {
          icon: <ShieldCheck className="w-7 h-7 text-[#0e4391]" />,
          title: 'Discipline & Intégrité',
          description:
            'Nous inculquons le respect, l’honnêteté, la responsabilité et la bonté comme habitudes quotidiennes pour former les leaders éthiques de demain.',
        },
        {
          icon: <Sparkles className="w-7 h-7 text-[#0e4391]" />,
          title: 'Développement Holistique',
          description:
            'Au-delà des cours, nos élèves brillent à travers les arts créatifs, la musique, le théâtre, l’éducation physique et la protection de l’environnement.',
        },
      ]
    : [
        {
          icon: <Award className="w-7 h-7 text-[#0e4391]" />,
          title: 'Academic Excellence',
          description:
            'We set high academic standards and empower every pupil from Nursery and P1 to P6 with critical thinking, bilingual fluency, and strong numeracy skills.',
        },
        {
          icon: <Heart className="w-7 h-7 text-[#0e4391]" />,
          title: 'Caring & Safe Community',
          description:
            'Every child is known, valued, and supported in a warm, family-oriented environment where curiosity and confidence flourish.',
        },
        {
          icon: <ShieldCheck className="w-7 h-7 text-[#0e4391]" />,
          title: 'Discipline & Integrity',
          description:
            'We instill respect, honesty, responsibility, and kindness as daily habits that shape ethical future leaders.',
        },
        {
          icon: <Sparkles className="w-7 h-7 text-[#0e4391]" />,
          title: 'Holistic Growth',
          description:
            'Beyond classroom lessons, our pupils shine through creative arts, music, drama, physical education, and environmental stewardship.',
        },
      ];

  const milestones = isFr
    ? [
        {
          number: '100%',
          label: 'Taux de Réussite au Primaire',
          sub: 'Excellents résultats constants aux examens nationaux',
        },
        {
          number: '15:1',
          label: 'Ratio Élèves / Enseignant',
          sub: 'Un suivi personnalisé dans chaque salle de classe',
        },
        {
          number: 'P1 – P6',
          label: 'Cycle Primaire Complet',
          sub: 'Plus une section Maternelle & Préscolaire dynamique',
        },
        {
          number: '10+',
          label: 'Clubs & Activités Parascolaires',
          sub: 'Arts, musique, sports, informatique et débat',
        },
      ]
    : [
        {
          number: '100%',
          label: 'Primary Leaving Pass Rate',
          sub: 'Consistent top performance in national assessments',
        },
        {
          number: '15:1',
          label: 'Pupil-to-Teacher Ratio',
          sub: 'Personalized attention in every classroom',
        },
        {
          number: 'P1 – P6',
          label: 'Complete Primary Cycle',
          sub: 'Plus vibrant Nursery & Pre-Primary foundation',
        },
        {
          number: '10+',
          label: 'Clubs & Co-Curriculars',
          sub: 'Arts, music, sports, coding, and debate',
        },
      ];

  const facilities = isFr
    ? [
        {
          title: 'Salles de Classe Modernes & Lumineuses',
          description:
            'Des espaces d’apprentissage spacieux, aérés et décorés de supports visuels qui rendent la lecture, les mathématiques et les sciences passionnantes.',
          image: '/images/learning.jpeg',
        },
        {
          title: 'Aires de Jeux Vertes & Sécurisées',
          description:
            'De vastes pelouses et équipements extérieurs où les enfants pratiquent le sport, les jeux d’équipe et la récréation supervisée.',
          image: '/images/activity1.jpeg',
        },
        {
          title: 'Ateliers d’Arts Créatifs & d’Éveil',
          description:
            'Des espaces dédiés au dessin, à la peinture, à la musique et à la découverte pratique dès la petite enfance.',
          image: '/images/children.jpeg',
        },
      ]
    : [
        {
          title: 'Bright Modern Classrooms',
          description:
            'Spacious, well-ventilated learning spaces decorated with visual aids that make reading, math, and science engaging.',
          image: '/images/learning.jpeg',
        },
        {
          title: 'Expansive Green Playgrounds',
          description:
            'Safe outdoor lawns and play structures where children enjoy physical education, team sports, and supervised recreation.',
          image: '/images/activity1.jpeg',
        },
        {
          title: 'Creative Arts & Activity Studios',
          description:
            'Dedicated spaces for drawing, painting, music, and hands-on early childhood discovery.',
          image: '/images/children.jpeg',
        },
      ];

  const checkItems = isFr
    ? [
        'Corps enseignant qualifié et bienveillant',
        'Programme bilingue fondé sur les valeurs',
        'Campus sécurisé, verdoyant et adapté aux enfants',
        'Partenariat solide entre parents et enseignants',
      ]
    : [
        'Qualified & caring teaching staff',
        'Bilingual & values-based curriculum',
        'Safe, green & child-friendly campus',
        'Strong parent-teacher partnership',
      ];

  return (
    <div className="flex flex-col">
      {/* Page Hero Banner */}
      <section className="relative h-[260px] sm:h-[310px] w-full overflow-hidden bg-[#061c47]">
        <img
          src="/images/school.jpeg"
          alt="Les Angelos Primary School Campus"
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
              {isFr ? 'À Propos de Nous' : 'About Us'}
            </span>
          </div>
          <h1 className="text-[30px] sm:text-[44px] font-extrabold tracking-tight leading-tight">
            {isFr
              ? 'À Propos de l’École Primaire Les Angelos'
              : 'About Les Angelos Primary School'}
          </h1>
          <p className="text-[14.5px] sm:text-[17px] text-white/90 max-w-[650px] mt-2">
            {isFr
              ? 'Nourrir les jeunes esprits pour un avenir meilleur grâce à l’excellence académique, la formation du caractère et un environnement d’apprentissage joyeux à Kigali.'
              : 'Nurturing Young Minds for a Brighter Future through academic excellence, character formation, and a joyful learning environment in Kigali.'}
          </p>
        </div>
      </section>

      {/* Our Story & Who We Are */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="w-12 h-[3.5px] bg-[#f5c418] rounded-full" />
              <span className="text-[12.5px] font-bold uppercase tracking-wider text-[#0e4391] block">
                {isFr ? 'Notre Histoire & Héritage' : 'Our Story & Heritage'}
              </span>
              <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0b2559] leading-tight">
                {isFr
                  ? 'Une Base Solide pour le Parcours de Vie de Votre Enfant'
                  : "A Trusted Foundation for Your Child's Lifelong Journey"}
              </h2>
              <p className="text-[15px] text-[#1c335f] leading-[1.7]">
                {isFr ? (
                  <>
                    Située au cœur de Kigali, au Rwanda (14 KK 361 St),{' '}
                    <strong>l’École Primaire Les Angelos</strong> a été fondée avec une mission
                    claire : offrir aux enfants un cadre inspirant, discipliné et bienveillant où
                    la rigueur académique s’allie aux valeurs morales.
                  </>
                ) : (
                  <>
                    Located in the heart of Kigali, Rwanda (14 KK 361 St),{' '}
                    <strong>Les Angelos Primary School</strong> was founded with a clear purpose: to
                    provide children with an inspiring, disciplined, and compassionate environment
                    where academic rigor meets strong moral character.
                  </>
                )}
              </p>
              <p className="text-[15px] text-[#1c335f] leading-[1.7]">
                {isFr
                  ? 'De nos classes dynamiques de Maternelle jusqu’au cycle complet du Primaire (P1 à P6), nous combinons un enseignement structuré avec la découverte interactive et pratique. Nos enseignants expérimentés travaillent en étroite collaboration avec les parents pour accompagner chaque élève vers son plein potentiel.'
                  : "From our vibrant Nursery classes through Primary 1 to Primary 6 (P1–P6), we blend structured classroom instruction with interactive, hands-on discovery. Our experienced educators work closely with parents to recognize each pupil's unique strengths and guide them toward their full potential."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {checkItems.map((item) => (
                  <div key={item} className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#f5c418] fill-[#0b2559] shrink-0" />
                    <span className="text-[13.5px] font-semibold text-[#0b2559]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/school.jpeg"
                  alt="Les Angelos Campus"
                  className="w-full h-[190px] sm:h-[220px] object-cover rounded-[12px] shadow-md"
                />
                <img
                  src="/images/children.jpeg"
                  alt="Pupils Painting Activity"
                  className="w-full h-[160px] sm:h-[180px] object-cover rounded-[12px] shadow-md"
                />
              </div>
              <div className="space-y-4 pt-6">
                <img
                  src="/images/activity2.jpeg"
                  alt="Outdoor Group Activity"
                  className="w-full h-[160px] sm:h-[180px] object-cover rounded-[12px] shadow-md"
                />
                <img
                  src="/images/learning.jpeg"
                  alt="Interactive Classroom"
                  className="w-full h-[190px] sm:h-[220px] object-cover rounded-[12px] shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics Bar */}
      <section className="bg-[#022861] text-white py-10">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-white/15">
            {milestones.map((stat, idx) => (
              <div key={idx} className="pt-4 sm:pt-0 lg:px-6 first:lg:pl-0 last:lg:pr-0">
                <div className="text-[32px] sm:text-[36px] font-extrabold text-[#f5c418] leading-none">
                  {stat.number}
                </div>
                <div className="text-[15px] font-bold text-white mt-2">{stat.label}</div>
                <p className="text-[12.5px] text-white/75 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Motto Cards */}
      <section className="bg-[#ebf0fc] py-12 sm:py-14">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-[650px] mx-auto mb-10">
            <div className="w-12 h-[3.5px] bg-[#f5c418] rounded-full mx-auto mb-3" />
            <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#0b2559]">
              {isFr
                ? 'Notre Mission, Vision & Philosophie'
                : 'Our Mission, Vision & Philosophy'}
            </h2>
            <p className="text-[14.5px] text-[#1c335f] mt-2">
              {isFr
                ? 'Guidés par notre blason et notre devise, tout ce que nous faisons vise l’épanouissement intellectuel, moral et social de nos élèves.'
                : 'Guided by our school crest and motto, everything we do centers on the intellectual, moral, and social flourishing of our pupils.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="bg-white rounded-[12px] p-7 shadow-xs border border-slate-100 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#dbe9fd] flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#0b2559]" />
              </div>
              <h3 className="text-[19px] font-extrabold text-[#0b2559]">
                {isFr ? 'Notre Mission' : 'Our Mission'}
              </h3>
              <p className="text-[14px] text-[#1c335f] leading-[1.65] mt-2.5">
                {isFr
                  ? 'Offrir un enseignement primaire inclusif et de haute qualité dans un environnement sûr, discipliné et bienveillant qui dote les élèves de connaissances, de créativité et de solides valeurs morales.'
                  : 'To deliver high-quality, inclusive primary education in a safe, disciplined, and nurturing environment that equips pupils with knowledge, creativity, and strong moral values.'}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#052968] text-white rounded-[12px] p-7 shadow-md flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#f5c418] flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-[#0b2559]" />
              </div>
              <h3 className="text-[19px] font-extrabold text-white">
                {isFr ? 'Notre Vision' : 'Our Vision'}
              </h3>
              <p className="text-[14px] text-white/90 leading-[1.65] mt-2.5">
                {isFr
                  ? 'Être une école primaire modèle au Rwanda, reconnue pour former des apprenants confiants, compatissants et curieux tout au long de leur vie, prêts à exceller au secondaire et dans la société.'
                  : 'To be a model primary school in Rwanda recognized for shaping confident, compassionate, and lifelong learners who excel in secondary education and contribute positively to society.'}
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-white rounded-[12px] p-7 shadow-xs border border-slate-100 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#dbe9fd] flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-[#0b2559]" />
              </div>
              <h3 className="text-[19px] font-extrabold text-[#0b2559]">
                {isFr ? 'Notre Approche Pédagogique' : 'Our Educational Approach'}
              </h3>
              <p className="text-[14px] text-[#1c335f] leading-[1.65] mt-2.5">
                {isFr
                  ? 'Nous croyons que les enfants apprennent mieux lorsque la maîtrise académique est associée à la joie, au jeu actif, à l’expression artistique et à un accompagnement personnalisé.'
                  : 'We believe children learn best when structured academic mastery is paired with joy, active play, artistic expression, and personalized mentorship from dedicated teachers.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="w-12 h-[3.5px] bg-[#f5c418] rounded-full mb-3" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-[25px] sm:text-[28px] font-extrabold text-[#0b2559]">
                {isFr ? 'Nos Valeurs Fondamentales' : 'Our Core Values'}
              </h2>
              <p className="text-[14.5px] text-[#1c335f] mt-1">
                {isFr
                  ? 'Les piliers qui façonnent la vie quotidienne à l’École Primaire Les Angelos.'
                  : 'The pillars that shape daily life at Les Angelos Primary School.'}
              </p>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center space-x-2 text-[13.5px] font-bold text-[#0b2559] hover:text-[#0e4391] cursor-pointer"
            >
              <span>
                {isFr
                  ? 'Voir la Vie Scolaire dans Notre Galerie'
                  : 'See Student Life in Our Gallery'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="bg-[#f7f9fe] hover:bg-[#ebf0fc] transition-colors rounded-[12px] p-6 border border-slate-200/70"
              >
                <div className="w-12 h-12 rounded-lg bg-white shadow-2xs flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="text-[16px] font-extrabold text-[#0b2559]">{val.title}</h3>
                <p className="text-[13.5px] text-[#2c436f] leading-[1.55] mt-2">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus & Learning Environment */}
      <section className="py-12 sm:py-14 bg-[#dbe9fd]">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="w-12 h-[3.5px] bg-[#f5c418] rounded-full mb-3" />
          <h2 className="text-[25px] sm:text-[28px] font-extrabold text-[#0b2559] mb-2">
            {isFr
              ? 'Notre Campus & Cadre d’Apprentissage'
              : 'Our Campus & Learning Environment'}
          </h2>
          <p className="text-[14.5px] text-[#1c335f] max-w-[680px] mb-8">
            {isFr
              ? 'Conçu spécialement pour les jeunes apprenants, notre campus offre un cadre sécurisé et accueillant pour l’étude en classe comme pour l’exploration en plein air.'
              : 'Designed specifically for young learners, our campus offers a secure, welcoming setting for both indoor study and outdoor exploration.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((fac) => (
              <div
                key={fac.title}
                className="bg-white rounded-[12px] overflow-hidden shadow-xs flex flex-col"
              >
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-[200px] object-cover block"
                />
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[17px] font-extrabold text-[#0b2559]">{fac.title}</h3>
                    <p className="text-[13.5px] text-[#2c436f] leading-[1.6] mt-2">
                      {fac.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
          <div className="bg-[#052968] rounded-[16px] p-7 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md">
            <div className="max-w-[620px]">
              <div className="inline-flex items-center space-x-2 bg-white/10 text-[#f5c418] text-[12px] font-bold px-3.5 py-1 rounded-full mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>
                  {isFr
                    ? 'Inscriptions Ouvertes pour 2026 / 2027'
                    : 'Admissions Open for 2026 / 2027'}
                </span>
              </div>
              <h2 className="text-[24px] sm:text-[28px] font-extrabold leading-tight">
                {isFr
                  ? 'Offrez à Votre Enfant le Meilleur Départ à l’École Primaire Les Angelos'
                  : 'Give Your Child the Best Start at Les Angelos Primary School'}
              </h2>
              <p className="text-[14px] sm:text-[15px] text-white/85 mt-2">
                {isFr
                  ? 'Planifiez une visite du campus, rencontrez nos enseignants ou contactez notre bureau des admissions dès aujourd’hui.'
                  : 'Schedule a campus tour, meet our teachers, or reach out to our admissions office today.'}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#f5c418] hover:bg-[#eab808] text-[#0b224e] font-bold text-[14px] px-6 py-3 rounded-full shadow-sm transition-all cursor-pointer inline-flex items-center space-x-2"
              >
                <span>{isFr ? 'Contacter les Admissions' : 'Contact Admissions'}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="border border-white/40 hover:bg-white/10 text-white font-semibold text-[14px] px-6 py-3 rounded-full transition-all cursor-pointer"
              >
                {isFr ? 'Explorer la Galerie Photos' : 'Explore Photo Gallery'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
