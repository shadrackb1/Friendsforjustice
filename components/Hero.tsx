import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-teal-50 to-white pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-teal-100/80 text-teal-800 text-xs sm:text-sm font-bold tracking-wider uppercase border border-teal-200">
          <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
          Based in Kilifi County, Kenya
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
          Promoting Justice & <span className="text-teal-700 underline decoration-orange-500/30 decoration-8 underline-offset-8">Empowerment</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Friends for Justice is a community-based organization dedicated to access to justice, legal awareness, and social accountability for vulnerable and marginalized communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link 
            to="/programs" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-teal-700 hover:bg-teal-800 transition-all shadow-xl hover:shadow-teal-900/20 transform hover:-translate-y-1 active:scale-95"
          >
            Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link 
            to="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border-2 border-slate-200 text-lg font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-teal-200 transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;