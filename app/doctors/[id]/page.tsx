'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Star, MapPin, Clock, GraduationCap, Award, Heart, Share2, Calendar, Video, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function DoctorDetailPage() {
  const [activeTab, setActiveTab] = useState<'about' | 'reviews'>('about');

  const doctor = {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    hospital: 'City Hospital',
    rating: 4.9,
    reviews: 328,
    experience: '15 years',
    patients: '2000+',
    price: 150,
    avatar: '👩‍⚕️',
    verified: true,
    about: 'Dr. Sarah Johnson is a renowned cardiologist with over 15 years of experience in treating heart conditions. She specializes in interventional cardiology and preventive heart care. Dr. Johnson is known for her compassionate approach and dedication to patient care.',
    education: [
      'MD - Harvard Medical School',
      'Fellowship - Johns Hopkins Hospital',
      'Board Certified - American Board of Internal Medicine'
    ],
    specializations: [
      'Heart Disease',
      'Arrhythmia',
      'Heart Failure',
      'Preventive Cardiology',
      'Interventional Cardiology'
    ],
    workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
    languages: ['English', 'Spanish'],
  };

  const reviewsList = [
    {
      id: 1,
      name: 'John Smith',
      rating: 5,
      date: '2 days ago',
      comment: 'Dr. Johnson is amazing! Very thorough and takes time to explain everything. Highly recommend!',
      avatar: '👨',
    },
    {
      id: 2,
      name: 'Emily Davis',
      rating: 5,
      date: '1 week ago',
      comment: 'Excellent doctor with great bedside manner. She really cares about her patients.',
      avatar: '👩',
    },
    {
      id: 3,
      name: 'Michael Brown',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Very knowledgeable and professional. The wait time was a bit long but worth it.',
      avatar: '👨',
    },
  ];

  return (
    <div className="mobile-container">
      <div className="bottom-nav-space">
        {/* Header Image */}
        <div className="relative h-64 bg-gradient-to-br from-primary to-primary/80">
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <Link href="/doctors" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ArrowLeft size={20} className="text-white" />
            </Link>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Heart size={20} className="text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Share2 size={20} className="text-white" />
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-7xl border-4 border-white translate-y-16">
              {doctor.avatar}
            </div>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="screen-padding pt-20">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-1">
              <h1 className="text-heading-md text-text-primary">{doctor.name}</h1>
              {doctor.verified && (
                <span className="text-blue-500">✓</span>
              )}
            </div>
            <p className="text-body text-text-secondary mb-2">{doctor.specialty}</p>
            <div className="flex items-center justify-center gap-1 mb-3">
              <Star size={18} className="text-warning fill-warning" />
              <span className="text-body font-semibold text-text-primary">{doctor.rating}</span>
              <span className="text-caption text-text-secondary">({doctor.reviews} reviews)</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-background rounded-card p-4 text-center">
              <p className="text-heading-sm text-primary mb-1">{doctor.experience}</p>
              <p className="text-caption text-text-secondary">Experience</p>
            </div>
            <div className="bg-background rounded-card p-4 text-center">
              <p className="text-heading-sm text-primary mb-1">{doctor.patients}</p>
              <p className="text-caption text-text-secondary">Patients</p>
            </div>
            <div className="bg-background rounded-card p-4 text-center">
              <p className="text-heading-sm text-primary mb-1">${doctor.price}</p>
              <p className="text-caption text-text-secondary">Consultation</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3 mb-6">
            <Link href={`/appointments/book?doctor=${doctor.id}`} className="flex-1">
              <button className="w-full py-4 bg-primary text-white rounded-button text-button flex items-center justify-center gap-2">
                <Calendar size={20} />
                Book Appointment
              </button>
            </Link>
            <button className="w-14 h-14 bg-secondary-green text-white rounded-button flex items-center justify-center">
              <MessageCircle size={24} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('about')}
              className={`flex-1 py-3 text-button transition-all relative ${
                activeTab === 'about'
                  ? 'text-primary'
                  : 'text-text-secondary'
              }`}
            >
              About
              {activeTab === 'about' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex-1 py-3 text-button transition-all relative ${
                activeTab === 'reviews'
                  ? 'text-primary'
                  : 'text-text-secondary'
              }`}
            >
              Reviews
              {activeTab === 'reviews' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
              )}
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              {/* About */}
              <div>
                <h3 className="text-heading-sm text-text-primary mb-3">About</h3>
                <p className="text-body text-text-secondary leading-relaxed">{doctor.about}</p>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={20} className="text-primary" />
                  <h3 className="text-heading-sm text-text-primary">Education</h3>
                </div>
                <div className="space-y-2">
                  {doctor.education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <p className="text-body text-text-secondary">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award size={20} className="text-primary" />
                  <h3 className="text-heading-sm text-text-primary">Specializations</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {doctor.specializations.map((spec) => (
                    <span key={spec} className="px-3 py-2 bg-background text-text-primary text-caption rounded-chip">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location & Hours */}
              <div>
                <h3 className="text-heading-sm text-text-primary mb-3">Location & Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-body text-text-primary font-medium">{doctor.hospital}</p>
                      <p className="text-caption text-text-secondary">123 Medical Drive, New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-primary mt-0.5" />
                    <p className="text-body text-text-primary">{doctor.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-heading-sm text-text-primary mb-3">Languages</h3>
                <div className="flex gap-2">
                  {doctor.languages.map((lang) => (
                    <span key={lang} className="px-3 py-2 bg-background text-text-primary text-caption rounded-chip">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {/* Rating Summary */}
              <div className="bg-background rounded-card p-5 text-center">
                <div className="text-heading-lg text-primary mb-2">{doctor.rating}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-warning fill-warning" />
                  ))}
                </div>
                <p className="text-caption text-text-secondary">Based on {doctor.reviews} reviews</p>
              </div>

              {/* Reviews List */}
              <div className="space-y-4">
                {reviewsList.map((review) => (
                  <div key={review.id} className="bg-white rounded-card border border-gray-100 p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-xl">
                        {review.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-body font-semibold text-text-primary">{review.name}</h4>
                        <p className="text-caption text-text-secondary">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-warning fill-warning" />
                        <span className="text-caption font-semibold text-text-primary">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-body text-text-secondary leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <button className="w-full py-3 bg-background text-text-primary rounded-button text-button">
                Load More Reviews
              </button>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
