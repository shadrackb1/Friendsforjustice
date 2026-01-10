import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-teal-50 pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold tracking-wide">
          Based in Kilifi County, Kenya
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          Promoting Justice, Human Rights, and <span className="text-teal-700">Community Empowerment</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Friends for Justice is a community-based organization dedicated to access to justice, legal awareness, and social accountability for vulnerable and marginalized communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/programs" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-700 hover:bg-teal-800 md:text-lg transition-transform hover:scale-105"
          >
            Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-slate-200 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 md:text-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;