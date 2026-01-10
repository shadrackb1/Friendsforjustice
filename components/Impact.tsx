import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-teal-500 to-orange-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4">Our Impact</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Making a Difference in <span className="text-teal-400">Our Community</span></h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
              Over the years, Friends for Justice has engaged communities across Kilifi County through forums, trainings, and advocacy initiatives aimed at promoting justice and human rights.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-10 font-light">
              We focus on building sustainable mechanisms for dispute resolution and ensuring that even the most vulnerable members of society have a voice.
            </p>
            <Link 
              to="/get-involved" 
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full transition-all shadow-xl shadow-orange-500/20 transform hover:-translate-y-1 active:scale-95"
            >
              Support Our Mission
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Community Dialogues", desc: "Facilitating open forums for conflict resolution and civic education." },
              { title: "Legal Awareness", desc: "Demystifying the law for everyday citizens through accessible workshops." },
              { title: "Local Partnerships", desc: "Collaborating with local administration and diverse stakeholders." },
              { title: "Policy Advocacy", desc: "Championing policies that protect the rights of the marginalized." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-teal-500/50 transition-all group">
                <CheckCircle2 className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-xl mb-3 text-white">{item.title}</h4>
                <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;