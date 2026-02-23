import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Shield, ChevronDown, Menu, X } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

interface DropdownItem {
  title: string
  items: { name: string; link?: string }[]
}

interface NavigationItem {
  title: string
  dropdown?: DropdownItem
}

interface FloatingNavbarProps {
  navigationItems: NavigationItem[]
}

export default function FloatingNavbar({ navigationItems }: FloatingNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Record<number, boolean>>({})
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
        setOpenDropdowns({})
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const toggleDropdown = (idx: number) => {
    setOpenDropdowns(prev => ({ ...prev, [idx]: !prev[idx] }))
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenDropdowns({})
  }

  return (
    <>
      <header
        className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? 'w-[98%] lg:w-[90%]' : 'w-[98%] lg:w-[95%]'
        }`}
      >
        <nav
          className={`relative rounded-xl sm:rounded-2xl border shadow-lg transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl border-gray-200/80 shadow-xl'
              : 'bg-white/90 backdrop-blur-lg border-gray-200/60'
          }`}
        >
          <div className="px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 shrink-0" onClick={closeMobileMenu}>
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                  Shield Vault
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center flex-1 justify-center overflow-hidden mx-2">
                <NavigationMenu viewport={false}>
                  <NavigationMenuList className="flex-wrap gap-0">
                    {navigationItems.map((item, idx) => (
                      <NavigationMenuItem key={idx}>
                        {item.dropdown ? (
                          <>
                            <NavigationMenuTrigger className="text-xs xl:text-sm font-medium text-gray-600 hover:text-gray-900 px-2 xl:px-4">
                              {item.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <div className="w-60 xl:w-64 p-3 xl:p-4">
                                <h4 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                                  {item.dropdown.title}
                                </h4>
                                <ul className="space-y-0.5">
                                  {item.dropdown.items.map((subItem, subIdx) => (
                                    <li key={subIdx}>
                                      <NavigationMenuLink asChild>
                                        {subItem.link ? (
                                          <Link
                                            to={subItem.link}
                                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                          >
                                            {subItem.name}
                                          </Link>
                                        ) : (
                                          <span className="block px-3 py-2 text-sm text-gray-400 rounded cursor-default">
                                            {subItem.name}
                                          </span>
                                        )}
                                      </NavigationMenuLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <NavigationMenuLink asChild>
                            <Link
                              to="#"
                              className="px-2 xl:px-4 py-2 text-xs xl:text-sm font-medium text-gray-600 hover:text-gray-900"
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* CTA Buttons — Desktop */}
              <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 shrink-0">
                <button className="px-3 xl:px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Sign In
                </button>
                <button className="px-4 xl:px-6 py-2 xl:py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-sm whitespace-nowrap">
                  Request Demo
                </button>
              </div>

              {/* Mobile / Tablet Menu Button */}
              <button
                className="lg:hidden text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors ml-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile / Tablet Overlay Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-full sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <Shield className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-bold text-gray-900">Shield Vault</span>
          </Link>
          <button
            className="text-gray-500 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Nav Items */}
        <div className="flex-1 overflow-y-auto py-3">
          {navigationItems.map((item, idx) => (
            <div key={idx} className="border-b border-gray-50 last:border-0">
              {item.dropdown ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                    onClick={() => toggleDropdown(idx)}
                    aria-expanded={!!openDropdowns[idx]}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        openDropdowns[idx] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openDropdowns[idx] && (
                    <div className="bg-gray-50/70 pb-1">
                      <p className="px-5 pt-2 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {item.dropdown.title}
                      </p>
                      {item.dropdown.items.map((subItem, subIdx) => (
                        subItem.link ? (
                          <Link
                            key={subIdx}
                            to={subItem.link}
                            className="flex items-center px-6 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            onClick={closeMobileMenu}
                          >
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 shrink-0" />
                            {subItem.name}
                          </Link>
                        ) : (
                          <span
                            key={subIdx}
                            className="flex items-center px-6 py-2.5 text-sm text-gray-400"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 shrink-0" />
                            {subItem.name}
                          </span>
                        )
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to="#"
                  className="flex items-center px-5 py-3.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons — Mobile */}
        <div className="shrink-0 px-5 py-4 border-t border-gray-100 space-y-3 bg-white">
          <button className="w-full py-2.5 px-4 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Sign In
          </button>
          <button className="w-full py-2.5 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
            Request Demo
          </button>
        </div>
      </div>
    </>
  )
}
