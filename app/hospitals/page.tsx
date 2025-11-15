'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Search, SlidersHorizontal, MapPin, Phone, Star, ChevronRight, Navigation, Ambulance } from 'lucide-react';
import Link from 'next/link';

export default function HospitalsPage() {
  const hospitals = [
    {
      id: 1,
      name: 'City General Hospital',
      type: 'Multi-Specialty',
      address: '123 Medical Ave, New York, NY',
      rating: 4.8,
      reviews: 512,
      distance: '1.5 km',
      emergency: true,
      departments: ['Cardiology', 'Neurology', 'Orthopedics', 'Emergency'],
      beds: 350,
    },
    {
      id: 2,
      name: 'St. Mary\'s Medical Center',
      type: 'Multi-Specialty',
      address: '456 Health St, New York, NY',
      rating: 4.7,
      reviews: 389,
      distance: '2.8 km',
      emergency: true,
      departments: ['Pediatrics', 'Maternity', 'Surgery', 'ICU'],
      beds: 280,
    },
    {
      id: 3,
      name: 'Children\'s Health Hospital',
      type: 'Pediatric Specialty',
      address: '789 Care Blvd, New York, NY',
      rating: 4.9,
      reviews: 645,
      distance: '3.2 km',
      emergency: true,
      departments: ['Pediatrics', 'Neonatal', 'Child Surgery'],
      beds: 150,
    },
    {
      id: 4,
      name: 'Heart & Vascular Institute',
      type: 'Cardiac Specialty',
      address: '321 Cardiac Ave, New York, NY',
      rating: 4.9,
      reviews: 423,
      distance: '4.1 km',
      emergency: false,
      departments: ['Cardiology', 'Cardiac Surgery', 'Vascular'],
      beds: 120,
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
          <h1 className="text-heading-md text-text-primary">Hospitals</h1>
        </div>

        {/* Emergency Banner */}
        <div className="bg-error rounded-card p-4 mb-6 shadow-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Ambulance size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-body font-semibold text-white mb-1">Emergency Services</h3>
              <p className="text-caption text-white/90">24/7 ambulance available</p>
            </div>
          </div>
          <button className="w-full py-3 bg-white text-error rounded-button text-button font-bold">
            Call Emergency: 911
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-2 mb-6">
          <div className="flex-1 flex items-center gap-3 bg-background rounded-input px-4 py-3">
            <Search size={20} className="text-text-secondary" />
            <input
              type="text"
              placeholder="Search hospitals..."
              className="flex-1 bg-transparent text-body text-text-primary outline-none placeholder:text-text-secondary"
            />
          </div>
          <button className="w-12 h-12 rounded-input bg-primary flex items-center justify-center">
            <SlidersHorizontal size={20} className="text-white" />
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {['All', 'Emergency', 'Multi-Specialty', 'Pediatric', 'Cardiac'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-chip text-caption whitespace-nowrap ${
                filter === 'All'
                  ? 'bg-primary text-white'
                  : 'bg-background text-text-secondary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-caption text-text-secondary mb-4">
          {hospitals.length} hospitals nearby
        </p>

        {/* Hospitals List */}
        <div className="space-y-4">
          {hospitals.map((hospital) => (
            <Link key={hospital.id} href={`/hospitals/${hospital.id}`}>
              <div className="bg-white rounded-card border border-gray-100 p-4 shadow-card">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-body font-semibold text-text-primary mb-1">{hospital.name}</h4>
                    <p className="text-caption text-text-secondary mb-2">{hospital.type}</p>
                    <div className="flex items-center gap-1 mb-2">
                      <Star size={14} className="text-warning fill-warning" />
                      <span className="text-caption font-semibold text-text-primary">{hospital.rating}</span>
                      <span className="text-caption text-text-secondary">({hospital.reviews} reviews)</span>
                    </div>
                  </div>
                  {hospital.emergency && (
                    <span className="px-2 py-1 bg-error/10 text-error text-xs rounded-chip font-medium flex items-center gap-1">
                      <Ambulance size={12} />
                      Emergency
                    </span>
                  )}
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 mb-3">
                  <MapPin size={16} className="text-text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-caption text-text-secondary">{hospital.address}</span>
                </div>

                {/* Departments */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {hospital.departments.slice(0, 3).map((dept) => (
                    <span key={dept} className="px-2 py-1 bg-background text-text-primary text-xs rounded-chip">
                      {dept}
                    </span>
                  ))}
                  {hospital.departments.length > 3 && (
                    <span className="px-2 py-1 bg-background text-text-secondary text-xs rounded-chip">
                      +{hospital.departments.length - 3} more
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Navigation size={14} className="text-primary" />
                      <span className="text-caption text-primary font-semibold">{hospital.distance}</span>
                    </div>
                    <span className="text-caption text-text-secondary">{hospital.beds} beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-9 h-9 rounded-input bg-primary flex items-center justify-center">
                      <Phone size={16} className="text-white" />
                    </button>
                    <button className="w-9 h-9 rounded-input bg-background flex items-center justify-center">
                      <Navigation size={16} className="text-primary" />
                    </button>
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
