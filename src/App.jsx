import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SquareLogo from './components/SquareLogo'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import AboutPage from './pages/AboutPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PortfolioDetailPage from './pages/PortfolioDetailPage'
import FloatingButtons from './components/FloatingButtons'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/Blogdetailpage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <SquareLogo />
      <FloatingButtons />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        {/* Services list and detail pages */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />

        {/* Portfolio list and detail pages */}
        <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />

        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />

        <Route path="/contact" element={<ContactPage />} />

        {/* Legacy slugs redirect to clean ones */}
        <Route path="/home-a" element={<Navigate to="/" replace />} />
        <Route path="/about/about-c" element={<Navigate to="/about" replace />} />
        <Route path="/about/about-a" element={<Navigate to="/about" replace />} />
        <Route path="/about/about-b" element={<Navigate to="/about" replace />} />
        <Route path="/services/services-a" element={<Navigate to="/services" replace />} />

        {/* Anything else → home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}