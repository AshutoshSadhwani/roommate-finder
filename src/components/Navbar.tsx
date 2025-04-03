import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, LogIn, Menu, X, Moon, Sun, MessageCircle, User, Settings as SettingsIcon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-blue-900/80 backdrop-blur-lg dark:bg-gray-900/80' 
        : 'bg-blue-900 dark:bg-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">RoomieHub</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition">Home</Link>
            <Link to="/find-roommate" className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition">Find Roommate</Link>
            <Link to="/expenses" className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition">Expenses</Link>
            <Link to="/chat" className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition flex items-center">
              <MessageCircle className="h-5 w-5 mr-1" />
              <span>Chat</span>
            </Link>
            <Link to="/profile" className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition flex items-center">
              <User className="h-5 w-5 mr-1" />
              <span>Profile</span>
            </Link>
            <Link to="/settings" className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition flex items-center">
              <SettingsIcon className="h-5 w-5 mr-1" />
              <span>Settings</span>
            </Link>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link to="/auth" className="flex items-center space-x-2 bg-white dark:bg-gray-800 text-blue-900 dark:text-white px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-blue-800 dark:bg-gray-800 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition">Home</Link>
              <Link to="/find-roommate" className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition">Find Roommate</Link>
              <Link to="/expenses" className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition">Expenses</Link>
              <Link to="/chat" className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                <span>Chat</span>
              </Link>
              <Link to="/profile" className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>Profile</span>
              </Link>
              <Link to="/settings" className="text-white hover:text-blue-200 dark:hover:text-gray-300 transition flex items-center">
                <SettingsIcon className="h-5 w-5 mr-2" />
                <span>Settings</span>
              </Link>
              <Link to="/auth" className="flex items-center space-x-2 bg-white dark:bg-gray-700 text-blue-900 dark:text-white px-4 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;