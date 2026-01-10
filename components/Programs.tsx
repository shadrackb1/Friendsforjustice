import React from 'react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our comprehensive approach combines legal support, education, and advocacy to create lasting change in Kilifi County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROGRAMS.map((program, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start">
                <div className="bg-teal-50 p-3 rounded-lg mr-6 flex-shrink-0">
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
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