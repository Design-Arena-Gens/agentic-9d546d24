'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Calendar, Clock, MapPin, Video, Phone, MessageCircle, Navigation, X } from 'lucide-react';
import Link from 'next/link';

export default function AppointmentDetailPage() {
  const appointment = {
    id: 1,
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    date: 'Today',
    fullDate: 'December 15, 2024',
    time: '2:30 PM',
    location: 'City Hospital',
    address: '123 Medical Ave, New York, NY 10001',
    type: 'In-person',
    status: 'confirmed',
    avatar: '👩‍⚕️',
    price: 150,
    reason: 'Regular checkup and heart health consultation',
    notes: 'Please bring previous test reports if available',
  };

  return (
    <div className="mobile-container">
      <div className="screen-padding bottom-nav-space">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Link href="/appointments" className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
              <ArrowLeft size={20} className="text-text-primary" />
            </Link>
            <h1 className="text-heading-md text-text-primary">Appointment Details</h1>
          </div>
        </div>

        {/* Status Card */}
        <div className="bg-success/10 border border-success/20 rounded-card p-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center text-white">✓</div>
            <div>
              <p className="text-body font-semibold text-success">Appointment Confirmed</p>
              <p className="text-caption text-text-secondary">Your appointment has been confirmed</p>
            </div>
          </div>
        </div>

        {/* Doctor Card */}
        <div className="bg-white rounded-card border border-gray-100 p-5 mb-6 shadow-card">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center text-4xl">
              {appointment.avatar}
            </div>
            <div className="flex-1">
              <h3 className="text-heading-sm text-text-primary mb-1">{appointment.doctorName}</h3>
              <p className="text-body text-text-secondary mb-3">{appointment.specialty}</p>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-input bg-primary flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </button>
                <button className="w-10 h-10 rounded-input bg-secondary-green flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </button>
                <Link href={`/doctors/${appointment.id}`} className="flex-1">
                  <button className="w-full h-10 rounded-input bg-background text-primary text-caption font-semibold">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Info */}
        <div className="bg-white rounded-card border border-gray-100 p-5 mb-6 shadow-card">
          <h3 className="text-heading-sm text-text-primary mb-4">Appointment Information</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-input bg-primary/10 flex items-center justify-center text-primary">
                <Calendar size={20} />
              </div>
              <div className="flex-1">
                <p className="text-caption text-text-secondary mb-1">Date</p>
                <p className="text-body font-semibold text-text-primary">{appointment.fullDate}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-input bg-primary/10 flex items-center justify-center text-primary">
                <Clock size={20} />
              </div>
              <div className="flex-1">
                <p className="text-caption text-text-secondary mb-1">Time</p>
                <p className="text-body font-semibold text-text-primary">{appointment.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-input bg-primary/10 flex items-center justify-center text-primary">
                {appointment.type === 'Video Call' ? <Video size={20} /> : <MapPin size={20} />}
              </div>
              <div className="flex-1">
                <p className="text-caption text-text-secondary mb-1">Location</p>
                <p className="text-body font-semibold text-text-primary mb-1">{appointment.location}</p>
                <p className="text-caption text-text-secondary">{appointment.address}</p>
                <button className="flex items-center gap-1 mt-2 text-caption text-primary font-semibold">
                  <Navigation size={14} />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Visit Details */}
        <div className="bg-white rounded-card border border-gray-100 p-5 mb-6 shadow-card">
          <h3 className="text-heading-sm text-text-primary mb-4">Visit Details</h3>

          <div className="space-y-4">
            <div>
              <p className="text-caption text-text-secondary mb-2">Reason for Visit</p>
              <p className="text-body text-text-primary">{appointment.reason}</p>
            </div>

            <div>
              <p className="text-caption text-text-secondary mb-2">Doctor's Notes</p>
              <div className="bg-warning/10 border border-warning/20 rounded-input p-3">
                <p className="text-body text-text-primary">{appointment.notes}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-body text-text-secondary">Consultation Fee</span>
                <span className="text-heading-sm text-primary">${appointment.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button className="w-full py-4 bg-primary text-white rounded-button text-button shadow-card">
            Join Video Call
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 bg-background text-text-primary rounded-button text-button">
              Reschedule
            </button>
            <button className="py-3 border border-error text-error rounded-button text-button">
              Cancel
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-6 p-4 bg-background rounded-card">
          <p className="text-caption text-text-secondary text-center">
            Need help with your appointment?{' '}
            <Link href="/support" className="text-primary font-semibold">
              Contact Support
            </Link>
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
