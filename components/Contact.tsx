import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-12 md:p-16 bg-teal-800 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold mb-8">Let's Connect</h2>
              <p className="text-teal-50/80 mb-12 leading-relaxed text-lg font-light">
                We are based in Kilifi County and are always open to connecting with community members and partners. Reach out to us to learn more about our work.
              </p>
              
              <div className="space-y-10">
                {CONTACT_INFO.map((info, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="bg-teal-700 p-4 rounded-xl mr-5 border border-teal-600 shadow-lg group-hover:bg-orange-500 group-hover:border-orange-400 transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-teal-300 font-bold mb-1">{info.label}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-xl font-medium hover:text-orange-400 transition-colors">
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
            
            <div className="mt-16 pt-8 border-t border-teal-700">
               <div className="flex space-x-4">
                 <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                   <span className="sr-only">Social</span>
                   <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                   <div className="w-5 h-5 border-2 border-white rounded-full"></div>
                 </div>
               </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-12 md:p-16 bg-white">
             <h3 className="text-3xl font-extrabold mb-10 text-slate-900">Send us a message</h3>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Full Name</label>
                      <input type="text" id="name" className="w-full px-6 py-4 bg-slate-50 border-0 border-b-2 border-slate-200 rounded-xl focus:ring-0 focus:border-teal-600 outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" />
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Email Address</label>
                      <input type="email" id="email" className="w-full px-6 py-4 bg-slate-50 border-0 border-b-2 border-slate-200 rounded-xl focus:ring-0 focus:border-teal-600 outline-none transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Subject</label>
                    <input type="text" id="subject" className="w-full px-6 py-4 bg-slate-50 border-0 border-b-2 border-slate-200 rounded-xl focus:ring-0 focus:border-teal-600 outline-none transition-all placeholder:text-slate-400" placeholder="How can we help?" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Message</label>
                    <textarea id="message" rows={4} className="w-full px-6 py-4 bg-slate-50 border-0 border-b-2 border-slate-200 rounded-xl focus:ring-0 focus:border-teal-600 outline-none transition-all resize-none placeholder:text-slate-400" placeholder="Tell us more about your inquiry..."></textarea>
                </div>
                <button type="submit" className="w-full bg-teal-700 hover:bg-teal-800 text-white font-extrabold py-5 px-8 rounded-2xl transition-all shadow-xl shadow-teal-700/20 transform hover:-translate-y-1 active:scale-95 text-lg">
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