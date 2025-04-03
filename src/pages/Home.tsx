import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, DollarSign, Search } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find the Perfect Roommate & Manage Expenses Effortlessly!
            </h1>
            <p className="text-xl text-blue-100 mb-12">
              Connect with compatible roommates and simplify your shared living experience with our all-in-one platform.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                to="/find-roommate"
                className="flex items-center justify-center space-x-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition text-lg font-semibold"
              >
                <Search className="h-5 w-5" />
                <span>Find a Roommate</span>
              </Link>
              <Link
                to="/expenses"
                className="flex items-center justify-center space-x-2 bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition text-lg font-semibold"
              >
                <DollarSign className="h-5 w-5" />
                <span>Manage Expenses</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose RoomieHub?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Matching</h3>
              <p className="text-gray-600">
                Find roommates that match your lifestyle, preferences, and budget with our intelligent matching system.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expense Tracking</h3>
              <p className="text-gray-600">
                Easily split bills, track shared expenses, and manage your monthly budget with your roommates.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Verified Listings</h3>
              <p className="text-gray-600">
                Browse through verified profiles and listings to ensure a safe and reliable roommate search experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;