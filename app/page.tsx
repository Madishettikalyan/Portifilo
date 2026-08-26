import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import AboutPhilosophy from '@/components/AboutPhilosophy';
import Services from '@/components/Services';
import Strengths from '@/components/Strengths';
import PortfolioGallery from '@/components/PortfolioGallery';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Testimonials from '@/components/Testimonials';
import ContactHub from '@/components/ContactHub';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <Navbar />
      <Hero />
      <StatsBar />
      <AboutPhilosophy />
      <Services />
      <Strengths />
      <PortfolioGallery />
      <ExperienceTimeline />
      <Testimonials />
      <ContactHub />
      <Footer />
    </main>
  );
}
