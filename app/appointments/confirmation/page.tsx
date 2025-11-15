'use client';

import BottomNav from '@/components/BottomNav';
import { Calendar, Clock, MapPin, CheckCircle, Download, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function AppointmentConfirmationPage() {
  const appointment = {
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    date: 'December 18, 2024',
    time: '10:00 AM',
    location: 'City Hospital',
    address: '123 Medical Ave, New York, NY 10001',
    type: 'In-person',
    price: 150,
    bookingId: 'APT-2024-12345',
    avatar: '👩‍⚕️',
  };

  return (
    <div className="mobile-container">
      <div className="flex flex-col items-center justify-center min-h-screen screen-padding bottom-nav-space">
        {/* Success Animation */}
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-success/10 flex items-center justify-center">
            <CheckCircle size={80} className="text-success" strokeWidth={2} />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-heading-lg text-text-primary text-center mb-2">Appointment Booked!</h1>
        <p className="text-body text-text-secondary text-center mb-8">
          Your appointment has been successfully confirmed
        </p>

        {/* Booking Details Card */}
        <div className="w-full bg-white rounded-card border border-gray-100 p-5 mb-6 shadow-card">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
            <span className="text-caption text-text-secondary">Booking ID</span>
            <span className="text-body font-semibold text-text-primary">{appointment.bookingId}</span>
          </div>

          {/* Doctor Info */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center text-3xl">
              {appointment.avatar}
            </div>
            <div>
              <h3 className="text-body font-semibold text-text-primary">{appointment.doctorName}</h3>
              <p className="text-caption text-text-secondary">{appointment.specialty}</p>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-primary" />
              <div>
                <p className="text-caption text-text-secondary">Date</p>
                <p className="text-body text-text-primary">{appointment.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock size={20} className="text-primary" />
              <div>
                <p className="text-caption text-text-secondary">Time</p>
                <p className="text-body text-text-primary">{appointment.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-primary mt-1" />
              <div>
                <p className="text-caption text-text-secondary">Location</p>
                <p className="text-body text-text-primary">{appointment.location}</p>
                <p className="text-caption text-text-secondary">{appointment.address}</p>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="mt-5 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-body text-text-secondary">Total Paid</span>
              <span className="text-heading-sm text-success">${appointment.price}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3 mb-6">
          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 bg-background text-text-primary rounded-button text-button flex items-center justify-center gap-2">
              <Download size={20} />
              Download
            </button>
            <button className="py-3 bg-background text-text-primary rounded-button text-button flex items-center justify-center gap-2">
              <Share2 size={20} />
              Share
            </button>
          </div>

          <Link href="/appointments" className="block">
            <button className="w-full py-4 bg-primary text-white rounded-button text-button">
              View All Appointments
            </button>
          </Link>

          <Link href="/" className="block">
            <button className="w-full py-3 bg-background text-text-primary rounded-button text-button">
              Back to Home
            </button>
          </Link>
        </div>

        {/* Reminder Note */}
        <div className="w-full bg-secondary-green/20 border border-secondary-green/30 rounded-card p-4">
          <p className="text-caption text-text-primary text-center">
            📱 We'll send you a reminder 1 hour before your appointment
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
