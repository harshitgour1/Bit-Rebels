
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Accessibility, Search, Bell } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-accessible-blue hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accessible-blue focus:ring-offset-2 rounded-lg"
            aria-label="Sahaay AI - Go to homepage"
          >
            <Accessibility className="h-8 w-8" aria-hidden="true" />
            <span className="text-xl font-bold">Sahaay AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accessible-blue focus:ring-offset-2 ${
                    isActive(item.href)
                      ? 'bg-accessible-blue text-white'
                      : 'text-accessible-gray-700 hover:bg-accessible-gray-100 hover:text-accessible-gray-900'
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-accessible-gray-100 inline-flex items-center justify-center p-2 rounded-md text-accessible-gray-700 hover:text-accessible-gray-900 hover:bg-accessible-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accessible-blue"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label="Toggle main menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-accessible-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accessible-blue focus:ring-offset-2 ${
                isActive(item.href)
                  ? 'bg-accessible-blue text-white'
                  : 'text-accessible-gray-700 hover:bg-accessible-gray-100 hover:text-accessible-gray-900'
              }`}
              aria-current={isActive(item.href) ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
