import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS, APP_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-teal-900/95 backdrop-blur-sm shadow-xl py-2' : 'bg-teal-800 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="font-bold text-2xl text-white tracking-tight flex items-center gap-2 group">
              <span className="bg-orange-500 w-2 h-8 rounded-full group-hover:bg-white transition-colors"></span>
              {APP_NAME}
            </NavLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive 
                        ? 'text-orange-400 font-bold' 
                        : 'text-teal-50 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg active:scale-95"
              >
                Partner With Us
              </NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-100 hover:text-white hover:bg-teal-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-teal-900 border-t border-teal-800 shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-teal-800 text-orange-400' 
                      : 'text-teal-50 hover:bg-teal-800 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
             <div className="pt-4 pb-2 px-3">
               <NavLink
                  to="/contact"
                  className="bg-orange-500 text-white block px-4 py-3 rounded-md text-center text-base font-bold shadow-lg"
                >
                  Partner With Us
                </NavLink>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;