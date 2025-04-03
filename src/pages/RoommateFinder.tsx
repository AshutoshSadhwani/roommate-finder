import React, { useState } from 'react';
import { Search, Filter, MapPin, DollarSign, Coffee, Music, Dog, MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockRoommates = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 25,
    location: 'Downtown',
    budget: 1200,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    traits: ['Non-smoker', 'Pet-friendly', 'Early bird'],
    bio: "Hi! I'm a software developer looking for a quiet and clean living space. I love cooking and occasionally have friends over for dinner parties.",
    interests: ['Cooking', 'Reading', 'Hiking'],
    occupation: 'Software Developer',
    moveInDate: '2025-04-01'
  },
  {
    id: 2,
    name: 'Michael Chen',
    age: 28,
    location: 'Westside',
    budget: 1500,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    traits: ['Quiet', 'Clean', 'Professional'],
    bio: 'Graduate student in architecture. I keep to myself mostly but enjoy good conversations over coffee.',
    interests: ['Architecture', 'Photography', 'Coffee'],
    occupation: 'Graduate Student',
    moveInDate: '2025-05-01'
  }
];

function RoommateFinder() {
  const [filters, setFilters] = useState({
    location: '',
    minBudget: '',
    maxBudget: '',
    lifestyle: [] as string[]
  });

  const [selectedRoommate, setSelectedRoommate] = useState<typeof mockRoommates[0] | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by location..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            
            <button className="flex items-center justify-center px-4 py-2 bg-blue-900 dark:bg-blue-800 text-white rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
              Budget: $800-$1500
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
              Non-smoker
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
              Pet-friendly
            </span>
          </div>
        </div>

        {/* Roommate Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRoommates.map((roommate) => (
            <div key={roommate.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={roommate.image}
                alt={roommate.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{roommate.name}</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  {roommate.location}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <DollarSign className="h-4 w-4 mr-2" />
                  ${roommate.budget}/month
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {roommate.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setSelectedRoommate(roommate)}
                    className="flex-1 bg-blue-900 dark:bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition"
                  >
                    View Profile
                  </button>
                  <Link 
                    to={`/chat?user=${roommate.id}`}
                    className="flex items-center justify-center px-4 py-2 bg-green-600 dark:bg-green-700 text-white rounded-lg hover:bg-green-500 dark:hover:bg-green-600 transition"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Modal */}
      {selectedRoommate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedRoommate(null)}
                className="absolute right-4 top-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <X className="h-6 w-6" />
              </button>
              
              <img
                src={selectedRoommate.image}
                alt={selectedRoommate.name}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedRoommate.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">{selectedRoommate.age} years old</p>
                  </div>
                  <Link 
                    to={`/chat?user=${selectedRoommate.id}`}
                    className="flex items-center space-x-2 bg-green-600 dark:bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-500 dark:hover:bg-green-600 transition"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Message</span>
                  </Link>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">About Me</h3>
                    <p className="text-gray-600 dark:text-gray-300">{selectedRoommate.bio}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">Location</p>
                        <p className="text-gray-900 dark:text-white">{selectedRoommate.location}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">Occupation</p>
                        <p className="text-gray-900 dark:text-white">{selectedRoommate.occupation}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">Budget</p>
                        <p className="text-gray-900 dark:text-white">${selectedRoommate.budget}/month</p>
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-gray-400">Move-in Date</p>
                        <p className="text-gray-900 dark:text-white">{selectedRoommate.moveInDate}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRoommate.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lifestyle</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedRoommate.traits.map((trait, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoommateFinder;