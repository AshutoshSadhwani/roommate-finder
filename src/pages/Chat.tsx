import React, { useState } from 'react';
import { Send, Smile, Paperclip, Search } from 'lucide-react';

const mockChats = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    lastMessage: 'Hey, about the utility bills...',
    time: '2:30 PM',
    unread: 2
  },
  {
    id: 2,
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    lastMessage: "Sure, I'll clean the kitchen today",
    time: '11:45 AM',
    unread: 0
  },
  // Add more mock data as needed
];

const mockMessages = [
  {
    id: 1,
    sender: 'Sarah Johnson',
    content: 'Hey, about the utility bills for this month',
    time: '2:30 PM',
    isSender: false
  },
  {
    id: 2,
    sender: 'You',
    content: 'Yes, I was just about to ask about that. How much is it?',
    time: '2:31 PM',
    isSender: true
  },
  {
    id: 3,
    sender: 'Sarah Johnson',
    content: "It's $120 in total. Your share would be $60",
    time: '2:32 PM',
    isSender: false
  },
  // Add more mock messages as needed
];

function Chat() {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(mockChats[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-12 h-[calc(100vh-8rem)]">
            {/* Chat List */}
            <div className="col-span-4 border-r border-gray-200">
              {/* Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search chats..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Chat List */}
              <div className="overflow-y-auto h-[calc(100vh-12rem)]">
                {mockChats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat)}
                    className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                      selectedChat?.id === chat.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={chat.image}
                        alt={chat.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {chat.name}
                          </h4>
                          <span className="text-xs text-gray-500">{chat.time}</span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                      </div>
                      {chat.unread > 0 && (
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-900 rounded-full">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="col-span-8 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex items-center space-x-4">
                <img
                  src={selectedChat?.image}
                  alt={selectedChat?.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{selectedChat?.name}</h3>
                  <p className="text-sm text-gray-500">Online</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {mockMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isSender ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                        msg.isSender
                          ? 'bg-blue-900 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p className={`text-xs mt-1 ${msg.isSender ? 'text-blue-100' : 'text-gray-500'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Smile className="h-6 w-6" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Paperclip className="h-6 w-6" />
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-900 text-white p-2 rounded-lg hover:bg-blue-800 transition">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;