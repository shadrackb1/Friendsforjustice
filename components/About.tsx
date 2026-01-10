import React from 'react';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import { VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who We Are</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Friends for Justice (FFJ) is a grassroots civil society organization based in Kilifi County. 
            We work closely with communities to strengthen access to justice, promote human rights, 
            and encourage active citizen participation in governance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 flex flex-col items-start">
            <div className="bg-teal-100 p-3 rounded-lg mb-6">
              <Eye className="w-8 h-8 text-teal-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-700 text-lg leading-relaxed">
              A just and equitable society where all people enjoy their rights, dignity, and freedoms.
            </p>
          </div>
          
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 flex flex-col items-start">
             <div className="bg-orange-100 p-3 rounded-lg mb-6">
              <Target className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-700 text-lg leading-relaxed">
              To empower communities through legal awareness, advocacy, and partnerships that promote access to justice and human dignity.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <ShieldCheck className="w-8 h-8 text-teal-700 mr-3" />
            <h3 className="text-2xl font-bold text-slate-900">Our Core Values</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h4 className="font-bold text-teal-800 mb-2">{val.title}</h4>
                <p className="text-slate-600 text-sm">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;