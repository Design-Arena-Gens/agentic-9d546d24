'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Search, SlidersHorizontal, MapPin, Clock, Star, ChevronRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LabsPage() {
  const [activeTab, setActiveTab] = useState<'tests' | 'results'>('tests');

  const popularTests = [
    { id: 1, name: 'Complete Blood Count', price: 25, duration: '24 hours', icon: '🩸' },
    { id: 2, name: 'Lipid Profile', price: 35, duration: '24 hours', icon: '❤️' },
    { id: 3, name: 'Thyroid Function', price: 45, duration: '48 hours', icon: '🔬' },
    { id: 4, name: 'Vitamin D Test', price: 30, duration: '24 hours', icon: '☀️' },
  ];

  const labs = [
    {
      id: 1,
      name: 'City Diagnostics Center',
      address: '123 Medical Ave, New York',
      rating: 4.8,
      reviews: 245,
      tests: 150,
      distance: '1.2 km',
      availability: 'Open Now',
    },
    {
      id: 2,
      name: 'HealthCare Lab Services',
      address: '456 Health St, New York',
      rating: 4.7,
      reviews: 189,
      tests: 120,
      distance: '2.5 km',
      availability: 'Open Now',
    },
  ];

  const testResults = [
    {
      id: 1,
      testName: 'Complete Blood Count',
      date: 'Dec 10, 2024',
      status: 'Ready',
      lab: 'City Diagnostics',
      result: 'Normal',
    },
    {
      id: 2,
      testName: 'Lipid Profile',
      date: 'Nov 28, 2024',
      status: 'Ready',
      lab: 'HealthCare Lab',
      result: 'Normal',
    },
    {
      id: 3,
      testName: 'Vitamin D Test',
      date: 'Nov 15, 2024',
      status: 'Ready',
      lab: 'City Diagnostics',
      result: 'Low',
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
          <h1 className="text-heading-md text-text-primary">Lab Tests</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-background rounded-button p-1">
          <button
            onClick={() => setActiveTab('tests')}
            className={`flex-1 py-3 rounded-button text-button transition-all ${
              activeTab === 'tests'
                ? 'bg-primary text-white'
                : 'text-text-secondary'
            }`}
          >
            Book Test
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`flex-1 py-3 rounded-button text-button transition-all ${
              activeTab === 'results'
                ? 'bg-primary text-white'
                : 'text-text-secondary'
            }`}
          >
            My Results
          </button>
        </div>

        {activeTab === 'tests' && (
          <>
            {/* Search */}
            <div className="flex gap-2 mb-6">
              <div className="flex-1 flex items-center gap-3 bg-background rounded-input px-4 py-3">
                <Search size={20} className="text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search tests..."
                  className="flex-1 bg-transparent text-body text-text-primary outline-none placeholder:text-text-secondary"
                />
              </div>
              <button className="w-12 h-12 rounded-input bg-primary flex items-center justify-center">
                <SlidersHorizontal size={20} className="text-white" />
              </button>
            </div>

            {/* Popular Tests */}
            <div className="mb-6">
              <h3 className="text-heading-sm text-text-primary mb-4">Popular Tests</h3>
              <div className="grid grid-cols-2 gap-3">
                {popularTests.map((test) => (
                  <Link key={test.id} href={`/labs/tests/${test.id}`}>
                    <div className="bg-white rounded-card border border-gray-100 p-4 shadow-card hover:border-primary/20 transition-all">
                      <div className="text-4xl mb-3">{test.icon}</div>
                      <h4 className="text-body font-semibold text-text-primary mb-2">{test.name}</h4>
                      <div className="flex items-center gap-1 text-text-secondary mb-2">
                        <Clock size={14} />
                        <span className="text-xs">{test.duration}</span>
                      </div>
                      <p className="text-heading-sm text-primary">${test.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Nearby Labs */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-heading-sm text-text-primary">Nearby Labs</h3>
                <button className="text-caption text-primary font-semibold">View All</button>
              </div>
              <div className="space-y-3">
                {labs.map((lab) => (
                  <Link key={lab.id} href={`/labs/${lab.id}`}>
                    <div className="bg-white rounded-card border border-gray-100 p-4 shadow-card">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-body font-semibold text-text-primary mb-1">{lab.name}</h4>
                          <div className="flex items-center gap-1 mb-2">
                            <Star size={14} className="text-warning fill-warning" />
                            <span className="text-caption font-semibold text-text-primary">{lab.rating}</span>
                            <span className="text-caption text-text-secondary">({lab.reviews})</span>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-chip font-medium">
                          {lab.availability}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <MapPin size={14} className="text-text-secondary" />
                        <span className="text-caption text-text-secondary">{lab.address}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-caption text-text-secondary">{lab.tests}+ tests available</span>
                        <div className="flex items-center gap-1">
                          <span className="text-caption text-primary font-semibold">{lab.distance}</span>
                          <ChevronRight size={16} className="text-text-secondary" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'results' && (
          <div className="space-y-3">
            {testResults.map((result) => (
              <Link key={result.id} href={`/labs/results/${result.id}`}>
                <div className="bg-white rounded-card border border-gray-100 p-4 shadow-card">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-body font-semibold text-text-primary mb-1">{result.testName}</h4>
                      <p className="text-caption text-text-secondary">{result.lab}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-chip text-xs font-medium ${
                        result.result === 'Normal'
                          ? 'bg-success/10 text-success'
                          : result.result === 'Low'
                          ? 'bg-warning/10 text-warning'
                          : 'bg-error/10 text-error'
                      }`}
                    >
                      {result.result}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-caption text-text-secondary">{result.date}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-caption text-primary font-semibold">View Report</span>
                      <ChevronRight size={16} className="text-primary" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Empty State */}
            {testResults.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center mb-4 text-5xl">
                  🔬
                </div>
                <h3 className="text-heading-sm text-text-primary mb-2">No Test Results</h3>
                <p className="text-caption text-text-secondary text-center mb-6">
                  You haven't taken any lab tests yet
                </p>
                <button
                  onClick={() => setActiveTab('tests')}
                  className="px-6 py-3 bg-primary text-white rounded-button text-button"
                >
                  Book a Test
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
