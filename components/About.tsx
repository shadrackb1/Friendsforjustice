import React from 'react';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import { VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-teal-700 text-sm font-bold tracking-widest uppercase mb-3">Our Identity</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Advocating for the People</h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Friends for Justice (FFJ) is a grassroots civil society organization based in Kilifi County. 
            We work closely with communities to strengthen access to justice, promote human rights, 
            and encourage active citizen participation in governance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="group bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all duration-300">
            <div className="bg-teal-700 p-4 rounded-2xl mb-8 w-fit shadow-lg shadow-teal-700/20 text-white group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              A just and equitable society where all people enjoy their rights, dignity, and freedoms.
            </p>
          </div>
          
          <div className="group bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300">
             <div className="bg-orange-500 p-4 rounded-2xl mb-8 w-fit shadow-lg shadow-orange-500/20 text-white group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              To empower communities through legal awareness, advocacy, and partnerships that promote access to justice and human dignity.
            </p>
          </div>
        </div>

        <div className="bg-teal-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full -mr-20 -mt-20 opacity-50"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-12">
              <ShieldCheck className="w-10 h-10 text-orange-400 mr-4" />
              <h3 className="text-3xl font-bold">Our Core Values</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {VALUES.map((val, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                  <h4 className="font-bold text-orange-400 text-xl mb-3">{val.title}</h4>
                  <p className="text-teal-50/80 leading-relaxed font-light">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;