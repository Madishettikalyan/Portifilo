export interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: 'brand-identity' | 'social-media' | 'posters-ads' | 'packaging' | 'ai-visuals';
  year: string;
  client: string;
  heroTag: string;
  bgGradient: string;
  image?: string; // e.g. '/images/aura.jpg' or external URL
  deliverables: string;
  tools: string[];
  palette: string[];
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  highlight?: boolean;
}

export interface Strength {
  title: string;
  description: string;
  label: string;
  percent: number;
  colorClass: string;
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface SkillMeter {
  name: string;
  percent: number;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface VideoItem {
  id: string;
  title: string;
  type: 'short' | 'long';
  aspectRatio: '9:16' | '16:9';
  duration: string;
  category: string;
  client: string;
  year: string;
  thumbnail: string;
  videoUrl: string;
  viewsCount?: string;
  description: string;
  tags: string[];
  tools: string[];
  gradient: string;
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: 'Madishetti Kalyan',
    title: 'Graphic Designer | Creative Visual Designer',
    experienceYears: '5+',
    profileImage: '/images/profile.jpg',
    tagline: 'Transforming ideas into impossible-to-ignore visual experiences.',
    email: 'madishettikalyan55@gmail.com',
    location: 'India (Available for Worldwide Remote)',
    philosophy: '“Design is not just about making things look good — it’s about making ideas impossible to ignore.”',
    bio: 'I’m Madishetti Kalyan, a passionate Graphic Designer with over 5 years of professional experience in creating impactful and visually engaging designs. I specialize in transforming ideas into creative visual experiences that communicate clearly, connect with audiences, and strengthen brand identity. My design approach combines creativity, visual storytelling, modern aesthetics, and attention to detail.',
    socials: {
      behance: 'https://behance.net',
      dribbble: 'https://dribbble.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      whatsapp: 'https://wa.me/',
    }
  },

  stats: [
    { target: 5, label: 'Years of Experience', sub: 'Graphic & Creative Visual Design', suffix: '+' },
    { target: 180, label: 'Projects Completed', sub: 'Across 10+ Design Disciplines', suffix: '+' },
    { target: 50, label: 'Brands & Clients', sub: 'National & Global Collaborations', suffix: '+' },
    { target: 90, label: 'Client Satisfaction', sub: 'Creativity, Precision & Dedication', suffix: '%' },
  ],

  strengths: [
    {
      title: 'Creativity',
      description: 'Fresh concepts and unique visual approaches tailored for standout commercial impact.',
      label: 'Originality',
      percent: 100,
      colorClass: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    },
    {
      title: 'Precision',
      description: 'Strong attention to composition, typography, color balance, and meticulous details.',
      label: 'Detail & Alignment',
      percent: 98,
      colorClass: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    },
    {
      title: 'Adaptability',
      description: 'Versatile capability to work across diverse industries and varied design aesthetics.',
      label: 'Industry Range',
      percent: 95,
      colorClass: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    },
    {
      title: 'Visual Storytelling',
      description: 'Turning ideas and complex messages into compelling, emotionally resonant visuals.',
      label: 'Narrative Impact',
      percent: 96,
      colorClass: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
    },
    {
      title: 'Consistency',
      description: 'Maintaining robust brand identity guidelines across print, web, and digital channels.',
      label: 'Brand Fidelity',
      percent: 100,
      colorClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    },
  ] as Strength[],

  services: [
    {
      id: 'brand-identity',
      title: 'Brand Identity & Logo Design',
      description: 'Distinctive logos, cohesive color systems, typography guidelines, and complete brand identity kits.',
      tags: ['Logo Design', 'Brand Guides', 'Stationery'],
      icon: 'Shapes',
    },
    {
      id: 'social-media',
      title: 'Social Media Creatives',
      description: 'Scroll-stopping Instagram carousels, Facebook ad banners, and LinkedIn graphics built for clicks.',
      tags: ['Carousels', 'Social Ads', 'Stories'],
      icon: 'Share2',
    },
    {
      id: 'posters',
      title: 'Posters & Promotional Designs',
      description: 'High-impact concert posters, movie-style key art, flyers, and event collaterals crafted with bold type.',
      tags: ['Event Posters', 'Flyers', 'Key Art'],
      icon: 'Film',
    },
    {
      id: 'product-ads',
      title: 'Product Advertisements',
      description: 'Commercial-grade product creatives with realistic lighting, photorealistic textures, and persuasive layouts.',
      tags: ['E-commerce Ads', 'Commercial Art', 'Retouching'],
      icon: 'ShoppingBag',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Creatives',
      description: 'Performance-driven Google Display Network banners, PPC campaign graphics, and email headers.',
      tags: ['Display Ads', 'PPC Creatives', 'Email Visuals'],
      icon: 'TrendingUp',
    },
    {
      id: 'web-banners',
      title: 'Website Banners & Visuals',
      description: 'Stunning website hero banners, landing page marketing graphics, and digital UI marketing assets.',
      tags: ['Hero Banners', 'Landing Art', 'Web Badges'],
      icon: 'Laptop',
    },
    {
      id: 'packaging',
      title: 'Packaging & Product Branding',
      description: 'Retail-ready packaging design, custom labels, product boxes, pouches, and 3D mockup renders.',
      tags: ['Label Design', 'Box & Pouch', '3D Mockups'],
      icon: 'Box',
    },
    {
      id: 'festivals',
      title: 'Festival & Campaign Designs',
      description: 'Culturally rich festival creatives, seasonal holiday sales campaigns, and special event themed graphics.',
      tags: ['Festive Campaigns', 'Seasonal Sales', 'Launch Graphics'],
      icon: 'Sparkles',
    },
    {
      id: 'typography',
      title: 'Typography & Creative Compositions',
      description: 'Expressive lettering, custom typography treatments, Swiss-style editorial layouts, and abstract type.',
      tags: ['Custom Lettering', 'Editorial Layouts', 'Type Art'],
      icon: 'Type',
    },
    {
      id: 'ai-visuals',
      title: 'AI-Assisted Creative Visuals',
      description: 'Harnessing generative AI tools combined with professional manual retouching to build surreal concepts.',
      tags: ['Midjourney & AI', 'Concept Art', 'Hybrid Retouch'],
      icon: 'Wand2',
      highlight: true,
    },
  ] as Service[],

  projects: [
    {
      id: 'aura-luxury',
      title: 'AURA | Botanical Luxury Skincare',
      category: 'Brand Identity & Packaging',
      categorySlug: 'brand-identity',
      year: '2024',
      client: 'Aura Organics Laboratories',
      heroTag: 'Luxury Skincare',
      bgGradient: 'from-indigo-950 via-slate-900 to-black',
      image: '/images/aura.jpg',
      deliverables: 'Brand Guidelines, Custom Monogram Logo, Packaging Box & Bottle Labels, Stationery Suite',
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Pre-Press Specs'],
      palette: ['#0f172a', '#312e81', '#cbd5e1', '#e2e8f0', '#6366f1'],
      overview: 'Aura is a high-end clean cosmetic line seeking a serene, modern visual identity that reflects organic purity and clinical efficacy.',
      challenge: 'The brand needed to break away from traditional generic green organic branding and establish a prestigious, minimalist editorial look for international retailers.',
      solution: 'Designed a bespoke high-contrast serif monogram paired with balanced architectural typography, deep indigo & silver foil packaging labels, and a comprehensive 40-page brand guide.',
      impact: 'Increased distributor shelf interest by 140% and established unified brand presence across 25+ retail touchpoints.'
    },
    {
      id: 'neo-pulse',
      title: 'NEO PULSE | Tech Summit Key Visuals',
      category: 'Posters & Event Advertising',
      categorySlug: 'posters-ads',
      year: '2024',
      client: 'NeoPulse Technology Forum',
      heroTag: 'Cyber Summit',
      bgGradient: 'from-purple-950 via-gray-900 to-black',
      image: '/images/neopulse.jpg',
      deliverables: 'Concert & Keynote Posters, City Billboards, Social Ad Blitz, Motion Backdrop Graphics',
      tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Custom Typography'],
      palette: ['#030712', '#581c87', '#f43f5e', '#38bdf8', '#a855f7'],
      overview: 'An international future-tech & Web3 conference requiring an electrifying visual campaign across digital and outdoor print mediums.',
      challenge: 'Merging complex futuristic technology themes (AI, Quantum, Cybernetics) into a clean, readable, impossible-to-ignore poster system.',
      solution: 'Created an experimental isometric grid layout with bold cyber-rose typography, neon chromatic aberration, and modular speaker announcement cards.',
      impact: 'Sold out all 3,500 conference tickets within 48 hours of key visual billboard release.'
    },
    {
      id: 'lumen-beverage',
      title: 'LÚMEN | Organic Sparkling Elixir',
      category: 'Packaging & Product Branding',
      categorySlug: 'packaging',
      year: '2023',
      client: 'Lúmen Botanicals Inc.',
      heroTag: 'Beverage Packaging',
      bgGradient: 'from-emerald-950 via-teal-950 to-black',
      image: '/images/lumen.jpg',
      deliverables: 'Aluminum Can Wrap Labels, 6-Pack Carton Box, POS Retail Display Mockups',
      tools: ['Adobe Illustrator', 'Adobe InDesign', '3D Mockup Rendering'],
      palette: ['#022c22', '#065f46', '#10b981', '#a7f3d0', '#ecfdf5'],
      overview: 'A premium sparkling herbal beverage brand designed to sit distinctively on premium organic store shelves.',
      challenge: 'Creating a packaging hierarchy that highlights functional botanicals without cluttering the sleek 330ml can silhouette.',
      solution: 'Developed a custom botanical linework illustration system, metallic green and matte paper textures, and tactile typography that communicates refreshing calm.',
      impact: 'Selected for regional supermarket distribution across 120+ retail locations within 3 months.'
    },
    {
      id: 'velocity-fitness',
      title: 'VELOCITY | 30-Day Fitness Blitz Campaign',
      category: 'Social Media Creatives & Ads',
      categorySlug: 'social-media',
      year: '2024',
      client: 'Velocity Fitness Global',
      heroTag: 'Social Ad Campaign',
      bgGradient: 'from-red-950 via-zinc-900 to-black',
      image: '/images/velocity.jpg',
      deliverables: '10-Part Carousel Suite, High-CTR Instagram Ads, Story Templates, Web Hero Banners',
      tools: ['Adobe Photoshop', 'Figma', 'Digital Ad Strategy'],
      palette: ['#030712', '#991b1b', '#ef4444', '#f87171', '#ffffff'],
      overview: 'A high-energy digital ad campaign promoting a revolutionary workout app with over 500,000 active athletes.',
      challenge: 'Creating high-tempo, thumb-stopping visual pacing that boosts conversion rates and decreases customer acquisition cost.',
      solution: 'Crafted dynamic sports typography, high-contrast dynamic action framing, neon speed streaks, and bold call-to-action badges optimized for mobile viewing.',
      impact: 'Generated a 3.4x return on ad spend (ROAS) and 45,000+ app installs during the 30-day promotional window.'
    },
    {
      id: 'cyber-dusk',
      title: 'CYBER DUSK | Surreal Metacity Concept',
      category: 'AI-Assisted Creative Visuals',
      categorySlug: 'ai-visuals',
      year: '2024',
      client: 'Dusk Studios Entertainment',
      heroTag: 'AI Concept Art',
      bgGradient: 'from-fuchsia-950 via-indigo-950 to-black',
      image: '/images/cyberdusk.jpg',
      deliverables: 'Key Concept Art, Album Cover, Matte Painting Backgrounds, Merchandise Prints',
      tools: ['Midjourney AI', 'Adobe Photoshop', 'Digital Matte Painting'],
      palette: ['#020617', '#1e1b4b', '#701a75', '#c084fc', '#f43f5e'],
      overview: 'A dystopian sci-fi visual world created as key visual art for a multimedia music & entertainment release.',
      challenge: 'Guiding generative AI models to adhere to exact composition, atmospheric lighting, and architectural continuity while removing artifacts.',
      solution: 'Combined multi-prompt iterative conditioning with extensive manual digital retouching, cinematic color grading, custom volumetric fog, and lens flares in Photoshop.',
      impact: 'Featured on prominent design curation channels with 150k+ global impressions.'
    },
    {
      id: 'zenith-coffee',
      title: 'ZENITH | Specialty Artisanal Roasters',
      category: 'Brand Identity & Print Collateral',
      categorySlug: 'brand-identity',
      year: '2023',
      client: 'Zenith Specialty Coffee',
      heroTag: 'Artisanal Roasters',
      bgGradient: 'from-amber-950 via-stone-900 to-black',
      image: '/images/zenith.jpg',
      deliverables: 'Logo Mark, Coffee Pouch Bags, Cafe Menus, Stamp Marks, Custom Signage',
      tools: ['Adobe Illustrator', 'Adobe InDesign', 'Print Packaging'],
      palette: ['#0c0a09', '#451a03', '#78350f', '#f59e0b', '#fed7aa'],
      overview: 'Single-origin coffee roastery needing a grounded, warm, and sophisticated identity system celebrating the craft of specialty coffee.',
      challenge: 'Balancing heritage craft appeal with contemporary specialty coffee cafe culture.',
      solution: 'Created an iconic geometric "Z" monogram inspired by coffee tree topography, paired with warm kraft paper pouch labels and gold-embossed typography.',
      impact: 'Opened 3 flagship coffee shops with consistent brand identity across packaging and interior collateral.'
    },
    {
      id: 'festival-campaign',
      title: 'LUMINA | Grand Festive Seasonal Campaign',
      category: 'Social Media & Promotional Campaigns',
      categorySlug: 'social-media',
      year: '2023',
      client: 'Lumina Lifestyle & Retail',
      heroTag: 'Festive Blitz',
      bgGradient: 'from-yellow-950 via-orange-950 to-black',
      image: '/images/festival.jpg',
      deliverables: 'Festive Greeting Creatives, Promotional Offer Banners, WhatsApp Flyers, Digital Billboards',
      tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Social Creatives'],
      palette: ['#180d07', '#7c2d12', '#b45309', '#f59e0b', '#fef08a'],
      overview: 'An elaborate festival visual campaign celebrating light, joy, and festive gifting for a major lifestyle brand.',
      challenge: 'Standing out during crowded holiday periods with authentic cultural warmth and luxury aesthetic appeal.',
      solution: 'Designed ornate modern mandala motifs with golden luminous lighting effects, celebratory typography, and modular discount layouts.',
      impact: 'Drove 220% increase in social media engagement and festive promotional voucher redemptions.'
    },
    {
      id: 'kinetic-typography',
      title: 'KINETIC | Experimental Type & Editorial',
      category: 'Typography & Editorial Art',
      categorySlug: 'posters-ads',
      year: '2024',
      client: 'Design Vanguard Publication',
      heroTag: 'Editorial & Type',
      bgGradient: 'from-slate-900 via-zinc-900 to-black',
      image: '/images/kinetic.jpg',
      deliverables: 'Editorial Magazine Spreads, Typography Posters, Exhibition Catalog',
      tools: ['Adobe InDesign', 'Adobe Illustrator', 'Experimental Typography'],
      palette: ['#090d16', '#1e293b', '#64748b', '#cbd5e1', '#ffffff'],
      overview: 'A self-initiated and published design exploration exploring the boundaries of Swiss grid typography and modern kinetic layout rhythm.',
      challenge: 'Demonstrating how extreme typographic hierarchy and intentional negative space can evoke strong emotional tension.',
      solution: 'Engineered custom distorted glyphs, architectural grid arrangements, and micro-typography details inspired by brutalist Swiss graphic design.',
      impact: 'Honored in several digital design galleries and exhibited at regional creative portfolio events.'
    },
    {
      id: 'nova-wear',
      title: 'NOVA WEAR | High-Street Fashion Campaign',
      category: 'Posters & Digital Advertising',
      categorySlug: 'posters-ads',
      year: '2024',
      client: 'Nova Streetwear Label',
      heroTag: 'Fashion Advertising',
      bgGradient: 'from-neutral-900 via-gray-950 to-black',
      image: '/images/novawear.jpg',
      deliverables: 'Lookbook Banners, Mall Display Billboards, E-Commerce Banners, Instagram Reels Covers',
      tools: ['Adobe Photoshop', 'Digital Marketing Design', 'High-End Retouching'],
      palette: ['#030712', '#111827', '#374151', '#9ca3af', '#f3f4f6'],
      overview: 'Fall/Winter seasonal launch campaign for a contemporary urban streetwear apparel brand.',
      challenge: 'Showcasing apparel textures, streetwear silhouettes, and high-fashion attitude while maintaining clean promotional messaging.',
      solution: 'Integrated gritty urban photography with clean minimalist editorial type overlays, editorial tape accents, and high-contrast color balancing.',
      impact: 'Winter collection achieved a 92% sell-out rate within the first 14 days of campaign rollout.'
    }
  ] as Project[],

  timeline: [
    {
      year: '2022 - Present',
      role: 'Senior Creative Visual Designer',
      company: 'Independent & Brand Collaborations',
      description: 'Spearheading end-to-end visual branding, creative campaigns, packaging systems, and digital ad suites for high-growth startups and established brands. Integrating AI visual pipelines for accelerated concept generation.'
    },
    {
      year: '2020 - 2022',
      role: 'Graphic & Brand Identity Designer',
      company: 'Creative Studio & Marketing Agencies',
      description: 'Crafted complete brand identities, social media visual systems, high-converting PPC advertising banners, and print marketing collateral across diverse industry verticals.'
    },
    {
      year: '2019 - 2020',
      role: 'Visual Designer & Production Specialist',
      company: 'Design & Digital Media Agency',
      description: 'Produced high-volume event posters, social media creatives, festival greetings, digital brochures, and print-ready production files with meticulous typographic precision.'
    }
  ] as TimelineItem[],

  skills: [
    { name: 'Adobe Photoshop', percent: 98 },
    { name: 'Adobe Illustrator', percent: 96 },
    { name: 'Adobe InDesign', percent: 90 },
    { name: 'Figma & UI Visuals', percent: 88 },
    { name: 'AI Visuals (Midjourney / Firefly)', percent: 92 },
    { name: 'Typography & Pre-Press Production', percent: 95 },
  ] as SkillMeter[],

  toolPills: [
    'Photoshop', 'Illustrator', 'InDesign', 'Figma', 'Midjourney', 'CorelDRAW',
    'Color Grading', 'Brand Strategy', 'Packaging Specs', 'CMYK / RGB Prepress', 'Social Carousels', 'Motion Assets'
  ],

  testimonials: [
    {
      name: 'Anand Kapoor',
      role: 'Founder',
      company: 'Aura Skincare',
      avatar: 'AK',
      quote: '“Kalyan has an extraordinary gift for taking a complex brief and turning it into a visual identity that immediately commands attention. His turnaround speed, creativity, and precision are world-class.”'
    },
    {
      name: 'Sneha Reddy',
      role: 'Marketing Director',
      company: 'Velocity Fit',
      avatar: 'SR',
      quote: '“Our social media campaign engagement doubled after Kalyan took over our creative visuals. He truly understands modern aesthetics, storytelling, and what makes people stop scrolling.”'
    },
    {
      name: 'Rahul Verma',
      role: 'Creative Lead',
      company: 'Apex Media',
      avatar: 'RV',
      quote: '“From logo guidelines to retail packaging and AI-assisted key visuals, Kalyan delivered beyond our highest expectations. He’s our go-to creative thinker for every big project.”'
    }
  ] as Testimonial[],

  videos: [
    // 📱 Short Videos / Reels (9:16 Vertical)
    {
      id: 'kinetic-type-reel',
      title: 'Kinetic Typography & Glitch Motion',
      type: 'short',
      aspectRatio: '9:16',
      duration: '0:15',
      category: 'Typography & Motion Reel',
      client: 'Creative Lab Showcase',
      year: '2024',
      thumbnail: '/images/kinetic.jpg',
      videoUrl: '/videos/sample-reel.mp4',
      viewsCount: '124K Views',
      description: 'An electrifying vertical reel showcasing high-speed kinetic typography, distorted Swiss grid transitions, dynamic sound design, and experimental motion graphics.',
      tags: ['Kinetic Type', 'After Effects', 'Sound Sync', '9:16 Reel'],
      tools: ['Adobe After Effects', 'Adobe Illustrator', 'Custom SFX'],
      gradient: 'from-slate-900 via-indigo-950 to-black',
    },
    {
      id: 'aura-cosmetic-reel',
      title: 'AURA 3D Skincare Bottle Rotation & Liquid Sim',
      type: 'short',
      aspectRatio: '9:16',
      duration: '0:20',
      category: '3D Product Motion Reel',
      client: 'Aura Organics Laboratories',
      year: '2024',
      thumbnail: '/images/aura.jpg',
      videoUrl: '/videos/sample-reel.mp4',
      viewsCount: '89K Views',
      description: 'Velvet soft studio lighting simulation with tactile cosmetic bottle rotation, gold-foil monogram glint, and macro botanical liquid droplet interactions.',
      tags: ['3D Product Reel', 'Liquid Simulation', 'Lighting & Textures'],
      tools: ['Blender 3D', 'After Effects', 'Premiere Pro'],
      gradient: 'from-indigo-950 via-slate-900 to-black',
    },
    {
      id: 'velocity-fitness-reel',
      title: 'Velocity 30-Day Fitness Blitz Dynamic Ad Reel',
      type: 'short',
      aspectRatio: '9:16',
      duration: '0:25',
      category: 'Social Ad Reel',
      client: 'Velocity Fitness Global',
      year: '2024',
      thumbnail: '/images/velocity.jpg',
      videoUrl: '/videos/sample-reel.mp4',
      viewsCount: '210K Views',
      description: 'High-octane mobile ad reel built with dynamic typography, neon athlete framing, speed ramping, and high-CTR call-to-action badges for Instagram Reels.',
      tags: ['Speed Ramping', 'Social Ads', 'Dynamic Zoom', 'Instagram Reels'],
      tools: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
      gradient: 'from-red-950 via-zinc-900 to-black',
    },
    {
      id: 'cyberdusk-ai-reel',
      title: 'Cyber Dusk AI Metacity Animated Concept Art',
      type: 'short',
      aspectRatio: '9:16',
      duration: '0:18',
      category: 'AI Motion Art Reel',
      client: 'Dusk Entertainment',
      year: '2024',
      thumbnail: '/images/cyberdusk.jpg',
      videoUrl: '/videos/sample-reel.mp4',
      viewsCount: '165K Views',
      description: '2.5D parallax depth-mapped anime metacity with moving neon rain volumetric lighting, floating holographic billboards, and synthwave atmosphere.',
      tags: ['Parallax Motion', 'AI Matte Painting', 'Neon Rain', 'Looping Art'],
      tools: ['Midjourney AI', 'Photoshop 2.5D', 'After Effects'],
      gradient: 'from-fuchsia-950 via-indigo-950 to-black',
    },

    // 🎬 Long Videos & Commercials (16:9 Widescreen)
    {
      id: 'neopulse-brand-film',
      title: 'NEO PULSE 2024 Global Tech Summit Official Brand Film',
      type: 'long',
      aspectRatio: '16:9',
      duration: '1:45',
      category: 'Brand Film & Keynote Visuals',
      client: 'NeoPulse Technology Forum',
      year: '2024',
      thumbnail: '/images/neopulse.jpg',
      videoUrl: '/videos/sample-film.mp4',
      viewsCount: '45K Views',
      description: 'The flagship keynote opener and brand motion film for an international 3,500-attendee tech conference. Features holographic 3D typography, cybernetic grid visuals, and thunderous audio sync.',
      tags: ['4K Keynote Film', 'Stage Visuals', '3D Motion Graphics', 'Event Opener'],
      tools: ['After Effects', 'Cinema 4D', 'Premiere Pro', 'Audio Mastering'],
      gradient: 'from-purple-950 via-gray-900 to-black',
    },
    {
      id: 'lumen-commercial',
      title: 'LÚMEN Organic Sparkling Elixir Cinematic Commercial',
      type: 'long',
      aspectRatio: '16:9',
      duration: '1:15',
      category: 'TV Commercial & Product CGI',
      client: 'Lúmen Botanicals Inc.',
      year: '2023',
      thumbnail: '/images/lumen.jpg',
      videoUrl: '/videos/sample-film.mp4',
      viewsCount: '62K Views',
      description: 'A broadcast-ready commercial highlighting organic sparkling botanicals, macro aluminum can condensation, golden hour sun flares, and crisp nature cinematography.',
      tags: ['TV Commercial', 'Product CGI', 'Color Grading', 'Macro Fluid'],
      tools: ['DaVinci Resolve', 'Blender', 'After Effects'],
      gradient: 'from-emerald-950 via-teal-950 to-black',
    },
    {
      id: 'zenith-roasters-film',
      title: 'Zenith Specialty Coffee: The Art of Artisanal Roasting',
      type: 'long',
      aspectRatio: '16:9',
      duration: '2:10',
      category: 'Brand Documentary & Story Film',
      client: 'Zenith Specialty Coffee',
      year: '2023',
      thumbnail: '/images/zenith.jpg',
      videoUrl: '/videos/sample-film.mp4',
      viewsCount: '38K Views',
      description: 'A warm, sensorial brand documentary capturing the craftsmanship of single-origin coffee roasting, packaging label topography, and cafe atmosphere.',
      tags: ['Brand Storytelling', 'Cinematic Grain', 'Visual Identity in Motion'],
      tools: ['Premiere Pro', 'DaVinci Resolve', 'Custom Typography'],
      gradient: 'from-amber-950 via-stone-900 to-black',
    },
  ] as VideoItem[],
};
