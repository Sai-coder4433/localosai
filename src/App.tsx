import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { CoreFeatures } from './components/CoreFeatures';
import { ReviewOnlineSection } from './components/ReviewOnlineSection';
import { AiSection } from './components/AiSection';
import { AutomationCenter } from './components/AutomationCenter';
import { MultiLocationAgency } from './components/MultiLocationAgency';
import { SecuritySection } from './components/SecuritySection';
import { HowItWorks } from './components/HowItWorks';
import { PricingPreview } from './components/PricingPreview';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { ContactPage } from './pages/ContactPage';
import { AuthPlaceholder } from './pages/AuthPlaceholder';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>('/');

  // Initialize and listen to popstate for browser navigation
  useEffect(() => {
    const parsePath = () => {
      const path = window.location.pathname as RoutePath;
      if (['/', '/privacy', '/terms', '/contact', '/login', '/signup'].includes(path)) {
        setCurrentRoute(path);
      } else {
        setCurrentRoute('/');
      }
    };

    parsePath();
    window.addEventListener('popstate', parsePath);
    return () => window.removeEventListener('popstate', parsePath);
  }, []);

  const navigateTo = (route: RoutePath, hash?: string) => {
    setCurrentRoute(route);
    const newUrl = hash ? `${route}#${hash}` : route;
    window.history.pushState({}, '', newUrl);

    if (route === '/' && hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#202124] flex flex-col font-sans selection:bg-[#E8F0FE] selection:text-[#1A73E8]">
      {/* Sticky Header */}
      <Header currentRoute={currentRoute} navigateTo={navigateTo} />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentRoute === '/' && (
          <>
            <Hero navigateTo={navigateTo} />
            <TrustStrip />
            <ProblemSection />
            <SolutionSection />
            <CoreFeatures />
            <ReviewOnlineSection />
            <AiSection />
            <AutomationCenter />
            <MultiLocationAgency navigateTo={navigateTo} />
            <SecuritySection />
            <HowItWorks />
            <PricingPreview navigateTo={navigateTo} />
            <FaqSection />
            <CtaSection navigateTo={navigateTo} />
          </>
        )}

        {currentRoute === '/privacy' && <PrivacyPolicy navigateTo={navigateTo} />}
        {currentRoute === '/terms' && <TermsOfService navigateTo={navigateTo} />}
        {currentRoute === '/contact' && <ContactPage navigateTo={navigateTo} />}
        {currentRoute === '/login' && <AuthPlaceholder mode="login" navigateTo={navigateTo} />}
        {currentRoute === '/signup' && <AuthPlaceholder mode="signup" navigateTo={navigateTo} />}
      </main>

      {/* Global Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
