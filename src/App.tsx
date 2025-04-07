import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import RoommateFinder from './pages/RoommateFinder';
import Profile from './pages/Profile';
import ExpenseManager from './pages/ExpenseManager';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import { ClerkProvider } from '@clerk/clerk-react'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
   
    <Router>
      
      <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className="flex-grow dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/find-roommate" element={<RoommateFinder />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/expenses" element={<ExpenseManager />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  
   
  );
}

export default App;