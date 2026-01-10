import React from 'react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-teal-700 text-sm font-bold tracking-widest uppercase mb-3">Programs</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Core Areas of Work</h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Our comprehensive approach combines legal support, education, and advocacy to create lasting change in Kilifi County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {PROGRAMS.map((program, idx) => (
            <div key={idx} className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-2xl hover:shadow-teal-900/5 hover:-translate-y-2 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="bg-teal-50 p-5 rounded-2xl flex-shrink-0 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300 shadow-inner">
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors">{program.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light text-lg">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;