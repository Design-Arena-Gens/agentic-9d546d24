'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Search, SlidersHorizontal, Star, MapPin, Clock, Heart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const specialties = [
    'All', 'Cardiologist', 'Dermatologist', 'Neurologist', 'Pediatrician', 'Orthopedic', 'Dentist'
  ];

  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      hospital: 'City Hospital',
      rating: 4.9,
      reviews: 328,
      experience: '15 years',
      available: 'Today',
      price: 150,
      avatar: '👩‍⚕️',
      verified: true,
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      hospital: 'Skin Care Clinic',
      rating: 4.8,
      reviews: 256,
      experience: '12 years',
      available: 'Tomorrow',
      price: 120,
      avatar: '👨‍⚕️',
      verified: true,
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      hospital: 'Children\'s Health Center',
      rating: 4.9,
      reviews: 412,
      experience: '18 years',
      available: 'Today',
      price: 100,
      avatar: '👩‍⚕️',
      verified: true,
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic',
      hospital: 'Bone & Joint Clinic',
      rating: 4.7,
      reviews: 189,
      experience: '10 years',
      available: 'Dec 18',
      price: 180,
      avatar: '👨‍⚕️',
      verified: true,
    },
  ];

  return (
    <div className="mobile-container">
      <div className="screen-padding bottom-nav-space">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
            <ArrowLeft size={20} className="text-text-primary" />
          </Link>
          <h1 className="text-heading-md text-text-primary">Find Doctors</h1>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <div className="flex-1 flex items-center gap-3 bg-background rounded-input px-4 py-3">
            <Search size={20} className="text-text-secondary" />
            <input
              type="text"
              placeholder="Search doctors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-body text-text-primary outline-none placeholder:text-text-secondary"
            />
          </div>
          <button className="w-12 h-12 rounded-input bg-primary flex items-center justify-center">
            <SlidersHorizontal size={20} className="text-white" />
          </button>
        </div>

        {/* Specialty Filter */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-4 py-2 rounded-chip text-caption whitespace-nowrap transition-all ${
                  selectedSpecialty === specialty
                    ? 'bg-primary text-white'
                    : 'bg-background text-text-secondary'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-caption text-text-secondary mb-4">
          {doctors.length} doctors available
        </p>

        {/* Doctors List */}
        <div className="space-y-4">
          {doctors.map((doctor) => (
            <Link key={doctor.id} href={`/doctors/${doctor.id}`}>
              <div className="bg-white rounded-card border border-gray-100 p-4 shadow-card">
                <div className="flex gap-3">
                  <div className="w-20 h-20 rounded-card bg-background flex items-center justify-center text-4xl flex-shrink-0">
                    {doctor.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-body font-semibold text-text-primary">{doctor.name}</h4>
                          {doctor.verified && (
                            <span className="text-blue-500 text-xs">✓</span>
                          )}
                        </div>
                        <p className="text-caption text-text-secondary">{doctor.specialty}</p>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                        <Heart size={16} className="text-text-secondary" />
                      </button>
                    </div>

                    <div className="flex items-center gap-1 mb-2">
                      <Star size={14} className="text-warning fill-warning" />
                      <span className="text-caption font-semibold text-text-primary">{doctor.rating}</span>
                      <span className="text-caption text-text-secondary">({doctor.reviews} reviews)</span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-text-secondary" />
                        <span className="text-xs text-text-secondary">{doctor.hospital}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-text-secondary" />
                        <span className="text-xs text-text-secondary">{doctor.experience}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-chip font-medium">
                          Available {doctor.available}
                        </span>
                      </div>
                      <span className="text-body font-semibold text-primary">${doctor.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
