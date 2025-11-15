'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Calendar, MessageCircle, FileText, Package, Clock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');

  const notifications = [
    {
      id: 1,
      type: 'appointment',
      icon: Calendar,
      title: 'Appointment Reminder',
      message: 'Your appointment with Dr. Sarah Johnson is tomorrow at 2:30 PM',
      time: '2 hours ago',
      read: false,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      id: 2,
      type: 'message',
      icon: MessageCircle,
      title: 'New Message',
      message: 'Dr. Michael Chen sent you a message about your test results',
      time: '5 hours ago',
      read: false,
      color: 'text-secondary-green',
      bg: 'bg-secondary-green/10',
    },
    {
      id: 3,
      type: 'report',
      icon: FileText,
      title: 'Lab Report Ready',
      message: 'Your Complete Blood Count report is now available',
      time: '1 day ago',
      read: true,
      color: 'text-warning',
      bg: 'bg-warning/10',
    },
    {
      id: 4,
      type: 'delivery',
      icon: Package,
      title: 'Order Delivered',
      message: 'Your medicine order #12345 has been delivered',
      time: '2 days ago',
      read: true,
      color: 'text-success',
      bg: 'bg-success/10',
    },
    {
      id: 5,
      type: 'appointment',
      icon: Calendar,
      title: 'Appointment Confirmed',
      message: 'Your appointment with Dr. Emily Rodriguez has been confirmed',
      time: '3 days ago',
      read: true,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      id: 6,
      type: 'reminder',
      icon: Clock,
      title: 'Medication Reminder',
      message: 'Time to take your Blood Pressure medication',
      time: '3 days ago',
      read: true,
      color: 'text-error',
      bg: 'bg-error/10',
    },
  ];

  const filteredNotifications = activeTab === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications;

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="mobile-container">
      <div className="screen-padding bottom-nav-space">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Link href="/profile" className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
              <ArrowLeft size={20} className="text-text-primary" />
            </Link>
            <h1 className="text-heading-md text-text-primary">Notifications</h1>
          </div>
          <button className="text-caption text-primary font-semibold">Mark All Read</button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-3 rounded-button text-button transition-all ${
              activeTab === 'all'
                ? 'bg-primary text-white'
                : 'bg-background text-text-secondary'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('unread')}
            className={`flex-1 py-3 rounded-button text-button transition-all relative ${
              activeTab === 'unread'
                ? 'bg-primary text-white'
                : 'bg-background text-text-secondary'
            }`}
          >
            Unread
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-error text-white text-xs rounded-full flex items-center justify-center font-bold">
                {unreadCount}
              </span>
            )}
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white rounded-card border p-4 shadow-card transition-all ${
                notification.read ? 'border-gray-100' : 'border-primary/30 bg-primary/5'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-input ${notification.bg} flex items-center justify-center ${notification.color} flex-shrink-0`}>
                  <notification.icon size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="text-body font-semibold text-text-primary">{notification.title}</h4>
                    {!notification.read && (
                      <span className="ml-2 w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5"></span>
                    )}
                  </div>
                  <p className="text-caption text-text-secondary mb-2 leading-relaxed">{notification.message}</p>
                  <div className="flex items-center gap-1 text-text-secondary">
                    <Clock size={12} />
                    <span className="text-xs">{notification.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center mb-4">
              <MessageCircle size={40} className="text-text-secondary" />
            </div>
            <h3 className="text-heading-sm text-text-primary mb-2">No Notifications</h3>
            <p className="text-caption text-text-secondary text-center">
              You're all caught up! No {activeTab === 'unread' ? 'unread' : ''} notifications
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
