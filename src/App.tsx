import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Social from './components/Social';
import Features from './components/Features';
import Navbar from './components/Navbar';
import UseCases from './components/UseCases';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Implementation from './components/Implementation';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DownloadPage from './pages/DownloadPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import ResetPasswordPage from './components/ResetPasswordPage';
import OTPVerificationPage from './components/OTPVerificationPage';
import { Helmet } from 'react-helmet-async';
import DocsPage from './components/DocsPage';

import LandingPageV2 from './v2/LandingPage';


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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<><Helmet><title>Download ml forge Desktop</title></Helmet><DownloadPage /></>} />
        <Route path="/login" element={<><Helmet><title>Log In | ml forge</title></Helmet><LoginPage /></>} />
        <Route path="/signup" element={<><Helmet><title>Create Account | ml forge</title></Helmet><SignupPage /></>} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/otp-verification" element={<OTPVerificationPage />} />
        <Route path="/home" element={<LandingPageV2 />} />
        <Route path="/docs/*" element={<DocsPage />} />

      </Routes>
    </Router>
  );
}

export default App;
