import { NavLink, Outlet } from 'react-router-dom'
import MainFooter from './Footer'
import { useIsScrollToDocTop } from '../lib/scroll-hooks'
import { assets } from '../assets/_static-assets'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isTopMost = useIsScrollToDocTop()

  const links = [
    { path: '/', name: 'Home' },
    { path: '/contact-us', name: 'Contact Us' },
    { path: '/about-us', name: 'About Us' },
    { path: '/team', name: 'Team' },
  ]

  const quickLinks = [
    { elementId: 'top', text: 'Top' },
    { elementId: 'problem', text: 'Problem' },
    { elementId: 'products', text: 'Products' },
    { elementId: 'validation', text: 'Validation' },
    { elementId: 'audience', text: 'Audience' },
    { elementId: 'partners', text: 'Partners' },
    { elementId: 'competitive-adv', text: 'Advantage' },
    { elementId: 'team', text: 'Team' },
    { elementId: 'directors', text: 'Directors' },
  ]

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector('#' + id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="w-full" id="top">
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isTopMost
            ? 'bg-white/80 backdrop-blur-md shadow-sm'
            : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <img
              src={assets.logo}
              alt="logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-semibold text-primary hidden sm:block">
              Songtaa
            </span>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all px-3 py-2 rounded-md ${
                    isActive
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right: Phone + Toggle */}
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-sm text-gray-700">
              +233 55 410 3571
            </span>

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2 shadow-sm">
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm px-3 py-2 rounded-md ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-gray-600 hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="text-sm pt-2 border-t text-gray-600">
              +233 55 410 3571
            </div>
          </div>
        )}
      </nav>

      {/* Quick Links Floating */}
      {window.location.pathname === '/' && (
        <section
          className={`fixed right-2 z-20 group pt-6 ${
            isTopMost ? 'top-[10vh]' : 'top-[4vh]'
          }`}
        >
          <button className="absolute right-2 bg-primary text-white px-3 py-1 rounded-full text-xs shadow-md">
            Go to
          </button>
          <ul className="bg-secondary/90 shadow-xl grid items-center overflow-x-auto rounded-lg h-0 group-hover:h-fit w-0 group-hover:w-fit group-hover:pt-2 transition-all duration-300 ease-in-out max-w-[80vw] p-2 space-y-1">
            {quickLinks.map((ql, index) => (
              <li
                onClick={() => handleScrollToSection(ql.elementId)}
                key={index}
                role="button"
                className="border border-primary rounded-full px-3 py-1 m-1 text-xs bg-white hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                {ql.text}
              </li>
            ))}
          </ul>
        </section>
      )}

      <main>
        <Outlet />
      </main>

      <MainFooter />
    </div>
  )
}

export default Navbar
