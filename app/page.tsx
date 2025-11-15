'use client';

import BottomNav from '@/components/BottomNav';
import { Bell, Search, Activity, Stethoscope, FlaskConical, Hospital, Pill, FileText, ChevronRight, Clock, MapPin, Star } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const quickActions = [
    { icon: Stethoscope, label: 'Find Doctor', href: '/doctors', color: 'bg-primary' },
    { icon: FlaskConical, label: 'Lab Tests', href: '/labs', color: 'bg-secondary-green' },
    { icon: Hospital, label: 'Hospitals', href: '/hospitals', color: 'bg-primary' },
    { icon: Pill, label: 'Pharmacy', href: '/pharmacy', color: 'bg-secondary-green' },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      doctorName: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: 'Today',
      time: '2:30 PM',
      location: 'City Hospital',
      avatar: '👩‍⚕️',
    },
    {
      id: 2,
      doctorName: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      date: 'Tomorrow',
      time: '10:00 AM',
      location: 'Skin Care Clinic',
      avatar: '👨‍⚕️',
    },
  ];

  return (
    <div className="mobile-container">
      <div className="screen-padding bottom-nav-space">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-heading-lg text-text-primary">Hello, John</h1>
            <p className="text-caption text-text-secondary mt-1">How are you feeling today?</p>
          </div>
          <button className="w-12 h-12 rounded-full bg-background flex items-center justify-center relative">
            <Bell size={24} className="text-text-primary" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
        </div>

        {/* Search Bar */}
        <Link href="/search" className="block mb-6">
          <div className="flex items-center gap-3 bg-background rounded-input px-4 py-4">
            <Search size={20} className="text-text-secondary" />
            <span className="text-body text-text-secondary">Search doctors, hospitals, labs...</span>
          </div>
        </Link>

        {/* Health Status Card */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-card p-6 mb-6 shadow-card">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-caption text-white/80 mb-1">Health Score</p>
              <h2 className="text-heading-md text-white">Excellent</h2>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Activity size={24} className="text-white" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="text-xs text-white/70 mb-1">Heart Rate</p>
              <p className="text-lg font-semibold text-white">72 bpm</p>
            </div>
            <div className="flex-1">
              <p className="text-xs text-white/70 mb-1">Blood Pressure</p>
              <p className="text-lg font-semibold text-white">120/80</p>
            </div>
            <div className="flex-1">
              <p className="text-xs text-white/70 mb-1">Weight</p>
              <p className="text-lg font-semibold text-white">70 kg</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-4">Quick Actions</h3>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((action) => (
              <Link key={action.label} href={action.href}>
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-16 h-16 rounded-card ${action.color} flex items-center justify-center shadow-card`}>
                    <action.icon size={28} className="text-white" />
                  </div>
                  <span className="text-xs text-text-primary text-center font-medium">{action.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-heading-sm text-text-primary">Upcoming Appointments</h3>
            <Link href="/appointments" className="text-caption text-primary font-semibold">
              See All
            </Link>
          </div>
          <div className="space-y-3">
            {upcomingAppointments.map((appointment) => (
              <Link key={appointment.id} href={`/appointments/${appointment.id}`}>
                <div className="bg-white rounded-card border border-gray-100 p-4 shadow-card">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-2xl">
                      {appointment.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-body font-semibold text-text-primary">{appointment.doctorName}</h4>
                      <p className="text-caption text-text-secondary">{appointment.specialty}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <Clock size={14} className="text-text-secondary" />
                          <span className="text-xs text-text-secondary">{appointment.date}, {appointment.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} className="text-text-secondary" />
                          <span className="text-xs text-text-secondary">{appointment.location}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-text-secondary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* AI Health Assistant */}
        <Link href="/ai-assistant">
          <div className="bg-secondary-green rounded-card p-5 flex items-center justify-between shadow-card">
            <div className="flex-1">
              <h4 className="text-body font-semibold text-text-primary mb-1">AI Health Assistant</h4>
              <p className="text-caption text-text-secondary">Get instant health advice</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
          </div>
        </Link>
      </div>

      <BottomNav />
    </div>
  );
}
