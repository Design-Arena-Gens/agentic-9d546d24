'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Search, MoreVertical, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Cardiologist',
      lastMessage: 'Your test results look good. Let me know if you have any questions.',
      time: '10:30 AM',
      unread: 2,
      avatar: '👩‍⚕️',
      online: true,
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Dermatologist',
      lastMessage: 'Please apply the cream twice daily for two weeks.',
      time: 'Yesterday',
      unread: 0,
      avatar: '👨‍⚕️',
      online: false,
    },
    {
      id: 3,
      name: 'City Hospital',
      role: 'Hospital',
      lastMessage: 'Your appointment has been confirmed for tomorrow at 2:30 PM.',
      time: '2 days ago',
      unread: 0,
      avatar: '🏥',
      online: false,
    },
    {
      id: 4,
      name: 'AI Health Assistant',
      role: 'Virtual Assistant',
      lastMessage: 'How can I help you today?',
      time: '3 days ago',
      unread: 0,
      avatar: '🤖',
      online: true,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'doctor',
      text: 'Hello John! I\'ve reviewed your recent test results.',
      time: '10:15 AM',
    },
    {
      id: 2,
      sender: 'doctor',
      text: 'Your cholesterol levels have improved significantly. Great job on following the diet plan!',
      time: '10:16 AM',
    },
    {
      id: 3,
      sender: 'user',
      text: 'That\'s great to hear! Thank you for the update.',
      time: '10:25 AM',
    },
    {
      id: 4,
      sender: 'user',
      text: 'Should I continue with the same medication?',
      time: '10:26 AM',
    },
    {
      id: 5,
      sender: 'doctor',
      text: 'Yes, please continue with the same dosage. We\'ll review again in 3 months.',
      time: '10:30 AM',
    },
    {
      id: 6,
      sender: 'doctor',
      text: 'Your test results look good. Let me know if you have any questions.',
      time: '10:30 AM',
    },
  ];

  if (activeChat) {
    const chat = chats.find(c => c.id === activeChat)!;

    return (
      <div className="mobile-container">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => setActiveChat(null)} className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
              <ArrowLeft size={20} className="text-text-primary" />
            </button>
            <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-2xl relative">
              {chat.avatar}
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-white"></span>
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-body font-semibold text-text-primary">{chat.name}</h3>
              <p className="text-caption text-text-secondary">{chat.online ? 'Online' : chat.role}</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
              <MoreVertical size={20} className="text-text-primary" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 px-6 py-6 space-y-4 overflow-y-auto pb-24">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] ${msg.sender === 'user' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`rounded-card px-4 py-3 ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white rounded-br-sm'
                      : 'bg-background text-text-primary rounded-bl-sm'
                  }`}
                >
                  <p className="text-body leading-relaxed">{msg.text}</p>
                </div>
                <p className={`text-xs text-text-secondary mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 max-w-[428px] mx-auto">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 bg-background rounded-input text-body text-text-primary outline-none placeholder:text-text-secondary"
            />
            <button className="w-12 h-12 bg-primary rounded-input flex items-center justify-center">
              <Send size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-container">
      <div className="screen-padding bottom-nav-space">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-heading-md text-text-primary">Messages</h1>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 bg-background rounded-input px-4 py-3 mb-6">
          <Search size={20} className="text-text-secondary" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="flex-1 bg-transparent text-body text-text-primary outline-none placeholder:text-text-secondary"
          />
        </div>

        {/* Chat List */}
        <div className="space-y-2">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className="w-full bg-white rounded-card border border-gray-100 p-4 shadow-card hover:border-primary/20 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-2xl relative flex-shrink-0">
                  {chat.avatar}
                  {chat.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-white"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h4 className="text-body font-semibold text-text-primary">{chat.name}</h4>
                      <p className="text-xs text-text-secondary">{chat.role}</p>
                    </div>
                    <span className="text-xs text-text-secondary whitespace-nowrap ml-2">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-caption text-text-secondary truncate flex-1">{chat.lastMessage}</p>
                    {chat.unread > 0 && (
                      <span className="ml-2 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
