'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Plus, Calendar as CalendarIcon, Clock, MapPin, Video, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingAppointments = [
    {
      id: 1,
      doctorName: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: 'Today',
      time: '2:30 PM',
      location: 'City Hospital',
      type: 'In-person',
      avatar: '👩‍⚕️',
      status: 'confirmed',
    },
    {
      id: 2,
      doctorName: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      date: 'Tomorrow',
      time: '10:00 AM',
      location: 'Skin Care Clinic',
      type: 'Video Call',
      avatar: '👨‍⚕️',
      status: 'confirmed',
    },
    {
      id: 3,
      doctorName: 'Dr. Emily Rodriguez',
      specialty: 'General Physician',
      date: 'Dec 18, 2024',
      time: '4:00 PM',
      location: 'Health Center',
      type: 'In-person',
      avatar: '👩‍⚕️',
      status: 'pending',
    },
  ];

  const pastAppointments = [
    {
      id: 4,
      doctorName: 'Dr. James Wilson',
      specialty: 'Orthopedic',
      date: 'Dec 10, 2024',
      time: '11:00 AM',
      location: 'Bone & Joint Clinic',
      type: 'In-person',
      avatar: '👨‍⚕️',
      status: 'completed',
    },
    {
      id: 5,
      doctorName: 'Dr. Lisa Park',
      specialty: 'Dentist',
      date: 'Nov 28, 2024',
      time: '3:30 PM',
      location: 'Dental Care Center',
      type: 'In-person',
      avatar: '👩‍⚕️',
      status: 'completed',
    },
  ];

  const appointments = activeTab === 'upcoming' ? upcomingAppointments : pastAppointments;

  return (
    <div className="mobile-container">
      <div className="screen-padding bottom-nav-space">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
              <ArrowLeft size={20} className="text-text-primary" />
            </Link>
            <h1 className="text-heading-md text-text-primary">Appointments</h1>
          </div>
          <Link href="/appointments/book" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <Plus size={24} className="text-white" />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-background rounded-button p-1">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-3 rounded-button text-button transition-all ${
              activeTab === 'upcoming'
                ? 'bg-primary text-white'
                : 'text-text-secondary'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-3 rounded-button text-button transition-all ${
              activeTab === 'past'
                ? 'bg-primary text-white'
                : 'text-text-secondary'
            }`}
          >
            Past
          </button>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-card border border-gray-100 p-4 shadow-card">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-3xl">
                  {appointment.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="text-body font-semibold text-text-primary">{appointment.doctorName}</h4>
                  <p className="text-caption text-text-secondary">{appointment.specialty}</p>
                  {appointment.status === 'pending' && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-warning/10 text-warning text-xs rounded-chip font-medium">
                      Pending Confirmation
                    </span>
                  )}
                  {appointment.status === 'confirmed' && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-success/10 text-success text-xs rounded-chip font-medium">
                      Confirmed
                    </span>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <CalendarIcon size={16} className="text-text-secondary" />
                  <span className="text-caption text-text-primary">{appointment.date}</span>
                  <Clock size={16} className="text-text-secondary ml-2" />
                  <span className="text-caption text-text-primary">{appointment.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  {appointment.type === 'Video Call' ? (
                    <Video size={16} className="text-text-secondary" />
                  ) : (
                    <MapPin size={16} className="text-text-secondary" />
                  )}
                  <span className="text-caption text-text-primary">{appointment.location}</span>
                  <span className="ml-auto px-2 py-1 bg-background rounded-chip text-xs text-text-secondary">
                    {appointment.type}
                  </span>
                </div>
              </div>

              {/* Actions */}
              {activeTab === 'upcoming' && (
                <div className="flex gap-2">
                  <Link href={`/appointments/${appointment.id}`} className="flex-1">
                    <button className="w-full py-3 bg-primary text-white rounded-button text-button">
                      View Details
                    </button>
                  </Link>
                  <button className="w-12 h-12 border border-error text-error rounded-button flex items-center justify-center">
                    <X size={20} />
                  </button>
                </div>
              )}

              {activeTab === 'past' && (
                <div className="flex gap-2">
                  <button className="flex-1 py-3 bg-background text-text-primary rounded-button text-button">
                    View Report
                  </button>
                  <button className="flex-1 py-3 bg-primary text-white rounded-button text-button">
                    Book Again
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {appointments.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center mb-4">
              <CalendarIcon size={40} className="text-text-secondary" />
            </div>
            <h3 className="text-heading-sm text-text-primary mb-2">No Appointments</h3>
            <p className="text-caption text-text-secondary text-center mb-6">
              You don't have any {activeTab} appointments
            </p>
            <Link href="/appointments/book">
              <button className="px-6 py-3 bg-primary text-white rounded-button text-button">
                Book Appointment
              </button>
            </Link>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
