import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk, Syne } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/Toast';
import CustomCursor from '@/components/CustomCursor';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Madishetti Kalyan | Graphic Designer & Creative Visual Designer',
  description:
    'Portfolio of Madishetti Kalyan - Passionate Graphic Designer with 5+ years of experience in brand identity, social media creatives, posters, product packaging, and AI visuals.',
  keywords: [
    'Madishetti Kalyan',
    'Graphic Designer',
    'Creative Visual Designer',
    'Brand Identity',
    'Logo Design',
    'Social Media Creatives',
    'Packaging Design',
    'AI Visuals',
  ],
  authors: [{ name: 'Madishetti Kalyan' }],
  openGraph: {
    title: 'Madishetti Kalyan | Graphic Designer & Creative Visual Designer',
    description: 'Transforming ideas into impossible-to-ignore visual experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${space.variable} ${syne.variable}`}>
      <body className="bg-dark-bg text-slate-100 antialiased selection:bg-primary selection:text-white">
        {/* Background Ambient Glow Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
          <div className="ambient-orb w-[600px] h-[600px] -top-[10%] -left-[10%] bg-gradient-to-br from-primary to-indigo-950 animate-orb-float" />
          <div className="ambient-orb w-[550px] h-[550px] top-[45%] -right-[8%] bg-gradient-to-br from-secondary to-purple-950 animate-orb-float [animation-delay:-5s]" />
          <div className="ambient-orb w-[500px] h-[500px] -bottom-[10%] left-[30%] bg-gradient-to-br from-coral to-rose-950 animate-orb-float [animation-delay:-10s]" />
          
          {/* Subtle Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <ToastProvider>
          <CustomCursor />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
