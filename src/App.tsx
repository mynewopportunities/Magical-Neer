import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Layouts
import Layout from './components/layout/Layout';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';
import DisclaimerPage from './pages/DisclaimerPage';
import FreeMasterclassPage from './pages/FreeMasterclassPage';
import BlogPage from './pages/BlogPage';
import BookCallPage from './pages/BookCallPage';
import DashboardPage from './pages/DashboardPage';
import CoursePlayerPage from './pages/CoursePlayerPage';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes with Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="programs" element={<ProgramsPage />} />
            <Route path="programs/:slug" element={<ProgramsPage />} />
            <Route path="success-stories" element={<SuccessStoriesPage />} />
            <Route path="free-resources" element={<ResourcesPage />} />
            <Route path="resources" element={<Navigate to="/free-resources" replace />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="book-call" element={<BookCallPage />} />
            <Route path="faq" element={<ContactPage />} />
            <Route path="free-masterclass" element={<FreeMasterclassPage />} />
            <Route path="terms-of-service" element={<TermsPage />} />
            <Route path="terms" element={<Navigate to="/terms-of-service" replace />} />
            <Route path="privacy-policy" element={<PrivacyPage />} />
            <Route path="privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="refund-policy" element={<RefundPage />} />
            <Route path="disclaimer" element={<DisclaimerPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="learn/:courseSlug/:lessonSlug" element={<CoursePlayerPage />} />
          </Route>

          {/* Auth Routes (No Layout) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* 404 - Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

// Simple 404 Page
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="text-center text-white p-8">
        <h1 className="text-9xl font-display font-bold mb-4 gradient-text-gold">404</h1>
        <p className="text-xl text-white/80 mb-8">The page you're looking for doesn't exist</p>
        <a href="/" className="btn btn-secondary">
          Return Home
        </a>
      </div>
    </div>
  );
}

export default App;
