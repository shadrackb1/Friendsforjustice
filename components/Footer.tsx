import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-500 py-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="text-lg font-bold text-slate-300 block mb-1">{APP_NAME}</span>
          <span className="text-sm">Promoting Justice in Kilifi County.</span>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; {year} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;