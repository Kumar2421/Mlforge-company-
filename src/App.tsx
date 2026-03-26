import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Social from './components/Social';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Implementation from './components/Implementation';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';

// Lazy loading secondary routes
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const SignupPage = lazy(() => import('./components/SignupPage'));
const ForgotPasswordPage = lazy(() => import('./components/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('./components/ResetPasswordPage'));
const OTPVerificationPage = lazy(() => import('./components/OTPVerificationPage'));
const DocsPage = lazy(() => import('./components/DocsPage'));
const LandingPageV2 = lazy(() => import('./v2/LandingPage'));

// High-performance loading fallback
const Loader = () => (
  <div className="h-screen w-full bg-black flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

const Home = () => (
  <main className="min-h-screen bg-black text-white relative font-inter overflow-x-hidden">
    <Helmet>
      <title>ml forge | Build, Audit, and Ship Mission-Critical Vision Systems</title>
      <meta name="description" content="Ship ML with confidence. The high-performance vision IDE for building, serving, and scaling machine learning models with deterministic precision." />
    </Helmet>
    <Navbar />
    <Header />
    <Social />
    <Features />
    <UseCases />
    <Benefits />
    <Testimonials />
    <Pricing />
    <Implementation />
    <FAQ />
    <FinalCTA />
    <Footer />
  </main>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/download" 
            element={
              <Suspense fallback={<Loader />}>
                <Helmet><title>Download ml forge Desktop</title></Helmet>
                <DownloadPage />
              </Suspense>
            } 
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/otp-verification" element={<OTPVerificationPage />} />
          <Route path="/home" element={<LandingPageV2 />} />
          <Route path="/docs/*" element={<DocsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

