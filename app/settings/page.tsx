'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, ChevronRight, User, Lock, Bell, Globe, Moon, Shield, Database, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [biometric, setBiometric] = useState(true);

  const settingSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Personal Information', href: '/settings/personal', toggle: false },
        { icon: Lock, label: 'Change Password', href: '/settings/password', toggle: false },
        { icon: Shield, label: 'Privacy & Security', href: '/settings/privacy', toggle: false },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', toggle: true, value: notifications, onChange: setNotifications },
        { icon: Moon, label: 'Dark Mode', toggle: true, value: darkMode, onChange: setDarkMode },
        { icon: Globe, label: 'Language', href: '/settings/language', toggle: false },
      ],
    },
    {
      title: 'Security',
      items: [
        { icon: Shield, label: 'Biometric Login', toggle: true, value: biometric, onChange: setBiometric },
        { icon: Database, label: 'Data & Storage', href: '/settings/data', toggle: false },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', href: '/settings/help', toggle: false },
        { icon: HelpCircle, label: 'About Avicure', href: '/settings/about', toggle: false },
      ],
    },
  ];

  return (
    <div className="mobile-container">
      <div className="screen-padding bottom-nav-space">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link href="/profile" className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
            <ArrowLeft size={20} className="text-text-primary" />
          </Link>
          <h1 className="text-heading-md text-text-primary">Settings</h1>
        </div>

        {/* Settings Sections */}
        {settingSections.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-heading-sm text-text-primary mb-3">{section.title}</h3>
            <div className="bg-white rounded-card border border-gray-100 overflow-hidden shadow-card">
              {section.items.map((item, index) => (
                <div key={item.label}>
                  {item.toggle ? (
                    <div className={`flex items-center gap-3 p-4 ${
                      index !== section.items.length - 1 ? 'border-b border-gray-100' : ''
                    }`}>
                      <div className="w-10 h-10 rounded-input bg-background flex items-center justify-center text-text-secondary">
                        <item.icon size={20} />
                      </div>
                      <span className="flex-1 text-body text-text-primary">{item.label}</span>
                      <button
                        onClick={() => item.onChange && item.onChange(!item.value)}
                        className={`w-12 h-7 rounded-full transition-colors relative ${
                          item.value ? 'bg-primary' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            item.value ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ) : (
                    <Link href={item.href || '#'}>
                      <div className={`flex items-center gap-3 p-4 hover:bg-background transition-colors ${
                        index !== section.items.length - 1 ? 'border-b border-gray-100' : ''
                      }`}>
                        <div className="w-10 h-10 rounded-input bg-background flex items-center justify-center text-text-secondary">
                          <item.icon size={20} />
                        </div>
                        <span className="flex-1 text-body text-text-primary">{item.label}</span>
                        <ChevronRight size={20} className="text-text-secondary" />
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* App Version */}
        <div className="text-center space-y-2 mt-8">
          <p className="text-caption text-text-secondary">App Version</p>
          <p className="text-body font-semibold text-text-primary">1.0.0</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
