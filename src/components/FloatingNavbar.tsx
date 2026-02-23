import { useState, useEffect } from 'react'
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'w-[95%] lg:w-[90%]' : 'w-[95%] lg:w-[95%]'
      }`}
    >
      <nav
        className={`relative rounded-2xl border shadow-lg transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-gray-200/80 shadow-xl'
            : 'bg-white/90 backdrop-blur-lg border-gray-200/60'
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-7 h-7 text-blue-600" />
              <span className="text-xl lg:text-2xl font-bold text-gray-900">
                Shield Vault
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  {navigationItems.map((item, idx) => (
                    <NavigationMenuItem key={idx}>
                      {item.dropdown ? (
                        <>
                          <NavigationMenuTrigger className="text-sm font-medium text-gray-600 hover:text-gray-900">
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="w-64 p-4">
                              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                {item.dropdown.title}
                              </h4>
                              <ul className="space-y-1">
                                {item.dropdown.items.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <NavigationMenuLink asChild>
                                      {subItem.link ? (
                                        <Link
                                          to={subItem.link}
                                          className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                                        >
                                          {subItem.name}
                                        </Link>
                                      ) : (
                                        <a
                                          href="#"
                                          className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                                        >
                                          {subItem.name}
                                        </a>
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
                            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
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

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-sm">
                Request Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-600 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 space-y-2 border-t border-gray-200 mt-2">
              {navigationItems.map((item, idx) => (
                <div key={idx} className="px-2">
                  <button className="w-full text-left py-2 px-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors font-medium flex items-center justify-between">
                    <span>{item.title}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              ))}
              <div className="px-2 pt-4 space-y-2 border-t border-gray-200 mt-2">
                <button className="w-full py-2.5 px-3 text-left text-gray-600 hover:bg-gray-50 rounded transition-colors font-medium">
                  Sign In
                </button>
                <button className="w-full py-2.5 px-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Request Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
