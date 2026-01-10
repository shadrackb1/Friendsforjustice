import React from 'react';
import { Link } from 'react-router-dom';

const Impact: React.FC = () => {
  return (
    <section className="py-20 bg-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Making a Difference in Our Community</h2>
            <p className="text-teal-100 text-lg leading-relaxed mb-6">
              Over the years, Friends for Justice has engaged communities across Kilifi County through forums, trainings, and advocacy initiatives aimed at promoting justice and human rights.
            </p>
            <p className="text-teal-100 text-lg leading-relaxed mb-8">
              We focus on building sustainable mechanisms for dispute resolution and ensuring that even the most vulnerable members of society have a voice.
            </p>
            <Link 
              to="/get-involved" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-colors shadow-lg"
            >
              Support Our Mission
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-teal-700 p-6 rounded-lg border border-teal-600">
              <h4 className="font-bold text-xl mb-2 text-white">Community Dialogues</h4>
              <p className="text-teal-200">Facilitating open forums for conflict resolution and civic education.</p>
            </div>
            <div className="bg-teal-700 p-6 rounded-lg border border-teal-600">
              <h4 className="font-bold text-xl mb-2 text-white">Legal Awareness</h4>
              <p className="text-teal-200">Demystifying the law for everyday citizens through accessible workshops.</p>
            </div>
            <div className="bg-teal-700 p-6 rounded-lg border border-teal-600">
              <h4 className="font-bold text-xl mb-2 text-white">Local Partnerships</h4>
              <p className="text-teal-200">Collaborating with local administration and diverse stakeholders.</p>
            </div>
            <div className="bg-teal-700 p-6 rounded-lg border border-teal-600">
              <h4 className="font-bold text-xl mb-2 text-white">Advocacy</h4>
              <p className="text-teal-200">Championing policies that protect the rights of the marginalized.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;