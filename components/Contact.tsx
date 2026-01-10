import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
              We are based in Kilifi County and are always open to connecting with community members and partners. Reach out to us to learn more about our work.
            </p>
            
            <div className="space-y-6">
              {CONTACT_INFO.map((info, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="bg-slate-800 p-3 rounded-lg mr-4 border border-slate-700">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-1">{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-xl font-medium hover:text-teal-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                       <span className="text-xl font-medium">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 text-slate-800 shadow-xl">
             <h3 className="text-2xl font-bold mb-6 text-slate-900">Send us a message</h3>
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-shadow" placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-shadow" placeholder="you@example.com" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-shadow" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-4 rounded-md transition-colors">
                    Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;