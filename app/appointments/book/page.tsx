'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, Video, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function BookAppointmentPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentType, setAppointmentType] = useState<'in-person' | 'video'>('in-person');
  const [reason, setReason] = useState('');

  const dates = [
    { day: 'Mon', date: '15', month: 'Dec' },
    { day: 'Tue', date: '16', month: 'Dec' },
    { day: 'Wed', date: '17', month: 'Dec' },
    { day: 'Thu', date: '18', month: 'Dec' },
    { day: 'Fri', date: '19', month: 'Dec' },
    { day: 'Sat', date: '20', month: 'Dec' },
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const doctor = {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    hospital: 'City Hospital',
    price: 150,
    avatar: '👩‍⚕️',
  };

  return (
    <div className="mobile-container">
      <div className="screen-padding bottom-nav-space">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link href="/doctors/1" className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
            <ArrowLeft size={20} className="text-text-primary" />
          </Link>
          <h1 className="text-heading-md text-text-primary">Book Appointment</h1>
        </div>

        {/* Doctor Info */}
        <div className="bg-white rounded-card border border-gray-100 p-4 mb-6 shadow-card">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-card bg-background flex items-center justify-center text-3xl">
              {doctor.avatar}
            </div>
            <div className="flex-1">
              <h3 className="text-body font-semibold text-text-primary">{doctor.name}</h3>
              <p className="text-caption text-text-secondary">{doctor.specialty}</p>
              <div className="flex items-center gap-1 mt-1">
                <MapPin size={14} className="text-text-secondary" />
                <span className="text-xs text-text-secondary">{doctor.hospital}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-heading-sm text-primary">${doctor.price}</p>
              <p className="text-xs text-text-secondary">per visit</p>
            </div>
          </div>
        </div>

        {/* Appointment Type */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-3">Appointment Type</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setAppointmentType('in-person')}
              className={`p-4 rounded-card border-2 transition-all ${
                appointmentType === 'in-person'
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <MapPin size={24} className={appointmentType === 'in-person' ? 'text-primary' : 'text-text-secondary'} />
              <p className={`text-body font-semibold mt-2 ${appointmentType === 'in-person' ? 'text-primary' : 'text-text-primary'}`}>
                In-Person
              </p>
              <p className="text-caption text-text-secondary mt-1">Visit clinic</p>
            </button>
            <button
              onClick={() => setAppointmentType('video')}
              className={`p-4 rounded-card border-2 transition-all ${
                appointmentType === 'video'
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <Video size={24} className={appointmentType === 'video' ? 'text-primary' : 'text-text-secondary'} />
              <p className={`text-body font-semibold mt-2 ${appointmentType === 'video' ? 'text-primary' : 'text-text-primary'}`}>
                Video Call
              </p>
              <p className="text-caption text-text-secondary mt-1">Online consultation</p>
            </button>
          </div>
        </div>

        {/* Select Date */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-3">Select Date</h3>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(`${date.month} ${date.date}`)}
                className={`flex-shrink-0 w-20 p-3 rounded-card border-2 transition-all ${
                  selectedDate === `${date.month} ${date.date}`
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <p className={`text-xs mb-1 ${selectedDate === `${date.month} ${date.date}` ? 'text-white/80' : 'text-text-secondary'}`}>
                  {date.day}
                </p>
                <p className={`text-heading-sm ${selectedDate === `${date.month} ${date.date}` ? 'text-white' : 'text-text-primary'}`}>
                  {date.date}
                </p>
                <p className={`text-xs mt-1 ${selectedDate === `${date.month} ${date.date}` ? 'text-white/80' : 'text-text-secondary'}`}>
                  {date.month}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Select Time */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-3">Select Time</h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 rounded-button border transition-all ${
                  selectedTime === time
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 bg-white text-text-primary'
                }`}
              >
                <p className="text-caption font-medium">{time}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Reason for Visit */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-3">Reason for Visit</h3>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Describe your symptoms or reason for consultation..."
            className="w-full h-32 px-4 py-3 bg-background rounded-input text-body text-text-primary outline-none resize-none placeholder:text-text-secondary"
          />
        </div>

        {/* Summary */}
        <div className="bg-background rounded-card p-4 mb-6">
          <h3 className="text-body font-semibold text-text-primary mb-3">Booking Summary</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-caption text-text-secondary">Consultation Fee</span>
              <span className="text-body font-semibold text-text-primary">${doctor.price}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-caption text-text-secondary">Service Fee</span>
              <span className="text-body font-semibold text-text-primary">$10</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-body font-semibold text-text-primary">Total</span>
                <span className="text-heading-sm text-primary">${doctor.price + 10}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Book Button */}
        <Link href="/appointments/confirmation">
          <button
            className="w-full py-4 bg-primary text-white rounded-button text-button shadow-card disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!selectedDate || !selectedTime}
          >
            Confirm & Pay
          </button>
        </Link>
      </div>

      <BottomNav />
    </div>
  );
}
