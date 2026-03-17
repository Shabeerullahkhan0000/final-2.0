import { useDocumentTitle } from '../../src/hooks/useDocumentTitle';
import { HeroSection, DemoSection, FeaturesSection, SocialProofSection, PricingTeaser, CTASection } from '../../src/components/home';

export default function HomePage() {
  useDocumentTitle('Professional Online CAD Viewer');

  return (
    <div className="w-full">
      <HeroSection />
      <SocialProofSection />
      <DemoSection />
      <FeaturesSection />
      <PricingTeaser />
      <CTASection />
    </div>
  );
}

