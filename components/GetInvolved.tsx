import React from 'react';
import { HeartHandshake, Users, Megaphone } from 'lucide-react';

const GetInvolved: React.FC = () => {
  return (
    <section id="involved" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get Involved</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
             We welcome partnerships with individuals and organizations committed to justice and human rights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-700">
                    <HeartHandshake className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Partner With Us</h3>
                <p className="text-slate-600">Collaborate with us on programs and initiatives that serve the community.</p>
            </div>
            <div className="p-6">
                 <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-700">
                    <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Volunteer</h3>
                <p className="text-slate-600">Lend your skills and time to support our civic education and outreach efforts.</p>
            </div>
            <div className="p-6">
                 <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-700">
                    <Megaphone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Advocacy Support</h3>
                <p className="text-slate-600">Join our campaigns to raise awareness on critical human rights issues.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;