import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Products', path: '/products', icon: '💡' },
    { name: 'Services', path: '/services', icon: '⚡' },
    { name: 'About', path: '/about', icon: '🔧' },
    { name: 'Contact', path: '/contact', icon: '📞' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="electric-bg backdrop-blur-md border-b border-blue-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mr-4 glow-icon lightning">
                <span className="text-white font-bold text-2xl">⚡</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold neon-text text-cyan-400" style={{fontFamily: 'Orbitron'}}>
                  ENGENIX
                </span>
                <span className="text-sm text-purple-400 font-medium tracking-wider">
                  
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-cyan-500/10'
                  }`}
                  style={{fontFamily: 'Exo 2'}}
                >
                  <span className="glow-icon">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link
                to="/admin-login"
                className="ml-4 btn-electric-outline text-sm"
              >
                🔑 Admin
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6 glow-icon`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6 glow-icon`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden electric-bg border-t border-cyan-500/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                }`}
                style={{fontFamily: 'Exo 2'}}
              >
                <span className="glow-icon text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium btn-electric-outline mt-4"
            >
              <span className="glow-icon">🔐</span>
              <span>Login</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
