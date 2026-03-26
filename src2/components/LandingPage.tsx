import { NavBar } from './NavBar';
import { HeroSection } from './HeroSection';
import { ClientsSection } from './ClientsSection';
import { FeaturesSection } from './FeaturesSection';
import { HowItWorksSection } from './HowItWorksSection';
import { BenefitsSection } from './BenefitsSection';
import { MetricsSection } from './MetricsSection';
import { PricingSection } from './PricingSection';
import { FAQSection } from './FAQSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';
import { ScrollReveal } from './ScrollReveal';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans text-[#202020] bg-white selection:bg-[#0a3eff] selection:text-white overflow-x-hidden">
      
      <NavBar />
      
      <main className="w-full">
        <ScrollReveal delay={0.1}><HeroSection /></ScrollReveal>
        
        <ScrollReveal><FeaturesSection /></ScrollReveal>
        
        <ScrollReveal><HowItWorksSection /></ScrollReveal>
        
        <ScrollReveal><BenefitsSection /></ScrollReveal>

        <ScrollReveal><MetricsSection /></ScrollReveal>
        
        <PricingSection />
        
        <ScrollReveal delay={0.3}><ClientsSection /></ScrollReveal>
        
        <ScrollReveal><FAQSection /></ScrollReveal>
        
        <ScrollReveal><ContactSection /></ScrollReveal>
      </main>

      <ScrollReveal delay={0.1}><Footer /></ScrollReveal>
      
    </div>
  );
}
