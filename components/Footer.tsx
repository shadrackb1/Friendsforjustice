import React from 'react';
import { NavLink } from 'react-router-dom';
import { APP_NAME, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <NavLink to="/" className="text-3xl font-extrabold text-white mb-6 block tracking-tight">
              {APP_NAME}
            </NavLink>
            <p className="text-lg text-slate-500 font-light leading-relaxed max-w-sm">
              Promoting justice, equality, and human rights for the communities of Kilifi County through legal empowerment and civic action.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <NavLink to={item.href} className="hover:text-orange-500 transition-colors font-medium">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <p className="text-slate-500 font-medium mb-4">Kilifi County, Kenya</p>
            <p className="text-slate-500 font-medium mb-4">info@friendsforjustice.org</p>
            <p className="text-orange-500 font-bold">+254 700 000 000</p>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-light">&copy; {year} {APP_NAME}. All rights reserved.</p>
          <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;