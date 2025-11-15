'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Send, Mic } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function AIAssistantPage() {
  const [message, setMessage] = useState('');

  const quickQuestions = [
    'What are the symptoms of flu?',
    'How to reduce blood pressure?',
    'When should I see a doctor?',
    'Tips for better sleep',
  ];

  const chatHistory = [
    {
      id: 1,
      type: 'ai',
      message: 'Hello! I\'m your AI Health Assistant. How can I help you today?',
      time: '10:00 AM',
    },
    {
      id: 2,
      type: 'user',
      message: 'I have a headache and feeling tired. What should I do?',
      time: '10:05 AM',
    },
    {
      id: 3,
      type: 'ai',
      message: 'I understand you\'re experiencing a headache and fatigue. Here are some suggestions:\n\n1. Stay hydrated - drink plenty of water\n2. Rest in a quiet, dark room\n3. Apply a cold compress to your forehead\n4. Avoid screens and bright lights\n\nIf symptoms persist for more than 24 hours or worsen, please consult a doctor. Would you like me to help you find nearby doctors?',
      time: '10:06 AM',
    },
    {
      id: 4,
      type: 'user',
      message: 'Yes, please help me find a doctor.',
      time: '10:08 AM',
    },
    {
      id: 5,
      type: 'ai',
      message: 'I\'ve found several doctors near you who specialize in general medicine. Would you like to:\n\n1. View available doctors\n2. Book an appointment\n3. Get more health advice',
      time: '10:09 AM',
      suggestions: ['View Doctors', 'Book Appointment', 'More Advice'],
    },
  ];

  return (
    <div className="mobile-container">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary/80 px-6 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <ArrowLeft size={20} className="text-white" />
          </Link>
          <div className="flex-1">
            <h1 className="text-heading-sm text-white">AI Health Assistant</h1>
            <p className="text-caption text-white/80">Always here to help</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
            🤖
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 px-6 py-6 space-y-4 overflow-y-auto pb-32">
        {chatHistory.map((chat) => (
          <div key={chat.id} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] ${chat.type === 'user' ? 'order-2' : 'order-1'}`}>
              {chat.type === 'ai' && (
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-sm">
                    🤖
                  </div>
                  <span className="text-xs text-text-secondary">AI Assistant</span>
                </div>
              )}
              <div
                className={`rounded-card px-4 py-3 ${
                  chat.type === 'user'
                    ? 'bg-primary text-white rounded-br-sm'
                    : 'bg-white border border-gray-100 text-text-primary rounded-bl-sm shadow-card'
                }`}
              >
                <p className="text-body leading-relaxed whitespace-pre-line">{chat.message}</p>
              </div>
              {chat.suggestions && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {chat.suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 bg-secondary-green text-text-primary rounded-chip text-caption font-medium hover:bg-primary hover:text-white transition-all"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              <p className={`text-xs text-text-secondary mt-1 ${chat.type === 'user' ? 'text-right' : 'text-left'}`}>
                {chat.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Questions */}
      <div className="fixed bottom-24 left-0 right-0 px-6 max-w-[428px] mx-auto">
        <div className="bg-background rounded-card p-4 shadow-card mb-3">
          <p className="text-caption text-text-secondary mb-3 font-medium">Quick Questions</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                className="px-3 py-2 bg-white border border-gray-200 text-text-primary rounded-chip text-xs hover:border-primary transition-all"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 max-w-[428px] mx-auto">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about your health..."
            className="flex-1 px-4 py-3 bg-background rounded-input text-body text-text-primary outline-none placeholder:text-text-secondary"
          />
          <button className="w-12 h-12 bg-background rounded-input flex items-center justify-center">
            <Mic size={20} className="text-text-secondary" />
          </button>
          <button className="w-12 h-12 bg-primary rounded-input flex items-center justify-center">
            <Send size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
