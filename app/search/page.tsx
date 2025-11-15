'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Search as SearchIcon, Clock, TrendingUp, Stethoscope, FlaskConical, Hospital, Pill } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const recentSearches = [
    'Cardiologist near me',
    'Blood test prices',
    'City Hospital',
    'Vitamin D supplement',
  ];

  const trendingSearches = [
    'Flu symptoms',
    'COVID-19 test',
    'Dental cleaning',
    'Allergy specialist',
  ];

  const quickCategories = [
    { icon: Stethoscope, label: 'Doctors', href: '/doctors', color: 'bg-primary' },
    { icon: Hospital, label: 'Hospitals', href: '/hospitals', color: 'bg-secondary-green' },
    { icon: FlaskConical, label: 'Lab Tests', href: '/labs', color: 'bg-warning' },
    { icon: Pill, label: 'Medicines', href: '/pharmacy', color: 'bg-error' },
  ];

  const searchResults = query.length > 0 ? [
    {
      type: 'doctor',
      title: 'Dr. Sarah Johnson',
      subtitle: 'Cardiologist • City Hospital',
      href: '/doctors/1',
    },
    {
      type: 'hospital',
      title: 'City General Hospital',
      subtitle: 'Multi-Specialty Hospital • 1.5 km away',
      href: '/hospitals/1',
    },
    {
      type: 'test',
      title: 'Complete Blood Count',
      subtitle: 'Lab Test • $25',
      href: '/labs/tests/1',
    },
  ] : [];

  return (
    <div className="mobile-container">
      <div className="screen-padding bottom-nav-space">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Link href="/" className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
            <ArrowLeft size={20} className="text-text-primary" />
          </Link>
          <div className="flex-1 flex items-center gap-3 bg-background rounded-input px-4 py-3">
            <SearchIcon size={20} className="text-text-secondary" />
            <input
              type="text"
              placeholder="Search doctors, hospitals, labs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-body text-text-primary outline-none placeholder:text-text-secondary"
              autoFocus
            />
          </div>
        </div>

        {query.length === 0 ? (
          <>
            {/* Quick Categories */}
            <div className="mb-8">
              <h3 className="text-heading-sm text-text-primary mb-4">Browse by Category</h3>
              <div className="grid grid-cols-4 gap-3">
                {quickCategories.map((category) => (
                  <Link key={category.label} href={category.href}>
                    <div className="flex flex-col items-center gap-2">
                      <div className={`w-16 h-16 rounded-card ${category.color} flex items-center justify-center shadow-card`}>
                        <category.icon size={28} className="text-white" />
                      </div>
                      <span className="text-xs text-text-primary text-center font-medium">{category.label}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-heading-sm text-text-primary">Recent Searches</h3>
                <button className="text-caption text-primary font-semibold">Clear All</button>
              </div>
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(search)}
                    className="w-full flex items-center gap-3 p-3 bg-background rounded-input hover:bg-gray-200 transition-colors"
                  >
                    <Clock size={20} className="text-text-secondary" />
                    <span className="flex-1 text-left text-body text-text-primary">{search}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Trending */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={20} className="text-primary" />
                <h3 className="text-heading-sm text-text-primary">Trending Searches</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(search)}
                    className="px-4 py-2 bg-white border border-gray-200 text-text-primary rounded-chip text-caption hover:border-primary transition-all"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Search Results */}
            <div>
              <p className="text-caption text-text-secondary mb-4">
                {searchResults.length} results found for "{query}"
              </p>
              <div className="space-y-3">
                {searchResults.map((result, index) => (
                  <Link key={index} href={result.href}>
                    <div className="bg-white rounded-card border border-gray-100 p-4 shadow-card hover:border-primary/20 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                          {result.type === 'doctor' && <Stethoscope size={24} className="text-primary" />}
                          {result.type === 'hospital' && <Hospital size={24} className="text-secondary-green" />}
                          {result.type === 'test' && <FlaskConical size={24} className="text-warning" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-body font-semibold text-text-primary mb-1">{result.title}</h4>
                          <p className="text-caption text-text-secondary">{result.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* No Results */}
            {searchResults.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center mb-4">
                  <SearchIcon size={40} className="text-text-secondary" />
                </div>
                <h3 className="text-heading-sm text-text-primary mb-2">No Results Found</h3>
                <p className="text-caption text-text-secondary text-center">
                  Try searching with different keywords
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
