'use client';

import BottomNav from '@/components/BottomNav';
import { Bell, ChevronRight, Heart, FileText, CreditCard, Settings, HelpCircle, LogOut, Edit, User as UserIcon } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const menuSections = [
    {
      title: 'Health',
      items: [
        { icon: Heart, label: 'My Health Records', href: '/health-records', color: 'text-error' },
        { icon: FileText, label: 'Medical Reports', href: '/reports', color: 'text-primary' },
        { icon: UserIcon, label: 'Family Members', href: '/family', color: 'text-secondary-green' },
      ],
    },
    {
      title: 'Account',
      items: [
        { icon: CreditCard, label: 'Payment Methods', href: '/payment', color: 'text-warning' },
        { icon: Bell, label: 'Notifications', href: '/notifications', color: 'text-primary' },
        { icon: Settings, label: 'Settings', href: '/settings', color: 'text-text-secondary' },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', href: '/support', color: 'text-primary' },
        { icon: FileText, label: 'Terms & Privacy', href: '/terms', color: 'text-text-secondary' },
      ],
    },
  ];

  return (
    <div className="mobile-container">
      <div className="screen-padding bottom-nav-space">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-heading-md text-text-primary">Profile</h1>
        </div>

        {/* User Info Card */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-card p-6 mb-6 shadow-card">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl">
                👨‍💼
              </div>
              <div>
                <h2 className="text-heading-sm text-white mb-1">John Smith</h2>
                <p className="text-caption text-white/80">john.smith@email.com</p>
                <p className="text-caption text-white/80 mt-1">+1 (555) 123-4567</p>
              </div>
            </div>
            <Link href="/profile/edit" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Edit size={18} className="text-white" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/20">
            <div className="text-center">
              <p className="text-heading-sm text-white mb-1">28</p>
              <p className="text-xs text-white/70">Age</p>
            </div>
            <div className="text-center">
              <p className="text-heading-sm text-white mb-1">A+</p>
              <p className="text-xs text-white/70">Blood Type</p>
            </div>
            <div className="text-center">
              <p className="text-heading-sm text-white mb-1">70kg</p>
              <p className="text-xs text-white/70">Weight</p>
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        {menuSections.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-heading-sm text-text-primary mb-3">{section.title}</h3>
            <div className="bg-white rounded-card border border-gray-100 overflow-hidden shadow-card">
              {section.items.map((item, index) => (
                <Link key={item.label} href={item.href}>
                  <div
                    className={`flex items-center gap-3 p-4 hover:bg-background transition-colors ${
                      index !== section.items.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-input bg-background flex items-center justify-center ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <span className="flex-1 text-body text-text-primary">{item.label}</span>
                    <ChevronRight size={20} className="text-text-secondary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <button className="w-full flex items-center justify-center gap-2 py-4 bg-white rounded-card border border-error text-error shadow-card">
          <LogOut size={20} />
          <span className="text-button">Logout</span>
        </button>

        {/* Version */}
        <p className="text-center text-caption text-text-secondary mt-4">
          Avicure v1.0.0
        </p>
      </div>

      <BottomNav />
    </div>
  );
}
