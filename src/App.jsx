import { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Services from './pages/Services.jsx'
import Resources from './pages/Resources.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Post from './pages/Post.jsx'
import { pageMeta } from './data/seo.js'

function NotFound() {
  return (
    <section className="hero">
      <div className="wrap stack" style={{ gap: 20 }}>
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>
        <p className="lead">This page doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-gold" style={{ alignSelf: 'flex-start' }}>← Back to home</Link>
      </div>
    </section>
  )
}

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const page = pageMeta(pathname)
    document.title = page.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description)
  }, [pathname])

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
