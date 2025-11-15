'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Plus, Heart, Activity, Droplet, Weight, Ruler, Calendar, TrendingUp, Download } from 'lucide-react';
import Link from 'next/link';

export default function HealthRecordsPage() {
  const vitalStats = [
    { icon: Heart, label: 'Heart Rate', value: '72', unit: 'bpm', color: 'text-error', bg: 'bg-error/10' },
    { icon: Activity, label: 'Blood Pressure', value: '120/80', unit: 'mmHg', color: 'text-primary', bg: 'bg-primary/10' },
    { icon: Droplet, label: 'Blood Sugar', value: '95', unit: 'mg/dL', color: 'text-warning', bg: 'bg-warning/10' },
    { icon: Weight, label: 'Weight', value: '70', unit: 'kg', color: 'text-success', bg: 'bg-success/10' },
    { icon: Ruler, label: 'Height', value: '175', unit: 'cm', color: 'text-secondary-green', bg: 'bg-secondary-green/10' },
    { icon: Activity, label: 'BMI', value: '22.9', unit: 'Normal', color: 'text-primary', bg: 'bg-primary/10' },
  ];

  const healthHistory = [
    {
      id: 1,
      type: 'Checkup',
      title: 'Annual Health Checkup',
      doctor: 'Dr. Sarah Johnson',
      date: 'Dec 10, 2024',
      notes: 'All vitals normal. Continue current medication.',
      icon: '🏥',
    },
    {
      id: 2,
      type: 'Lab Test',
      title: 'Complete Blood Count',
      lab: 'City Diagnostics',
      date: 'Nov 28, 2024',
      notes: 'All parameters within normal range.',
      icon: '🔬',
    },
    {
      id: 3,
      type: 'Vaccination',
      title: 'Flu Shot',
      doctor: 'Dr. Michael Chen',
      date: 'Nov 15, 2024',
      notes: 'Annual flu vaccination administered.',
      icon: '💉',
    },
    {
      id: 4,
      type: 'Prescription',
      title: 'Blood Pressure Medication',
      doctor: 'Dr. Sarah Johnson',
      date: 'Oct 20, 2024',
      notes: 'Prescribed Amlodipine 5mg - Once daily',
      icon: '💊',
    },
  ];

  const conditions = [
    { name: 'Hypertension', status: 'Managed', since: '2020' },
    { name: 'Vitamin D Deficiency', status: 'Under Treatment', since: '2024' },
  ];

  const allergies = ['Penicillin', 'Pollen', 'Dust'];

  return (
    <div className="mobile-container">
      <div className="screen-padding bottom-nav-space">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Link href="/profile" className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
              <ArrowLeft size={20} className="text-text-primary" />
            </Link>
            <h1 className="text-heading-md text-text-primary">Health Records</h1>
          </div>
          <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <Plus size={24} className="text-white" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {vitalStats.slice(0, 3).map((stat) => (
            <div key={stat.label} className={`${stat.bg} rounded-card p-4`}>
              <stat.icon size={20} className={`${stat.color} mb-2`} />
              <p className="text-heading-sm text-text-primary mb-1">{stat.value}</p>
              <p className="text-xs text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Vital Signs Card */}
        <div className="bg-white rounded-card border border-gray-100 p-4 mb-6 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-heading-sm text-text-primary">Vital Signs</h3>
            <button className="text-caption text-primary font-semibold">Update</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {vitalStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-input ${stat.bg} flex items-center justify-center ${stat.color}`}>
                  <stat.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-caption text-text-secondary">{stat.label}</p>
                  <p className="text-body font-semibold text-text-primary">
                    {stat.value} <span className="text-caption text-text-secondary font-normal">{stat.unit}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Conditions */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-3">Medical Conditions</h3>
          <div className="bg-white rounded-card border border-gray-100 p-4 shadow-card">
            {conditions.map((condition, index) => (
              <div
                key={condition.name}
                className={`flex items-center justify-between ${
                  index !== conditions.length - 1 ? 'pb-3 mb-3 border-b border-gray-100' : ''
                }`}
              >
                <div>
                  <h4 className="text-body font-semibold text-text-primary mb-1">{condition.name}</h4>
                  <p className="text-caption text-text-secondary">Since {condition.since}</p>
                </div>
                <span className={`px-3 py-1 rounded-chip text-xs font-medium ${
                  condition.status === 'Managed'
                    ? 'bg-success/10 text-success'
                    : 'bg-warning/10 text-warning'
                }`}>
                  {condition.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Allergies */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-3">Allergies</h3>
          <div className="bg-white rounded-card border border-gray-100 p-4 shadow-card">
            <div className="flex flex-wrap gap-2">
              {allergies.map((allergy) => (
                <span key={allergy} className="px-4 py-2 bg-error/10 text-error rounded-chip text-body font-medium">
                  {allergy}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Health History */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-heading-sm text-text-primary">Health History</h3>
            <button className="text-caption text-primary font-semibold">See All</button>
          </div>
          <div className="space-y-3">
            {healthHistory.map((record) => (
              <div key={record.id} className="bg-white rounded-card border border-gray-100 p-4 shadow-card">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-input bg-background flex items-center justify-center text-2xl flex-shrink-0">
                    {record.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex-1">
                        <h4 className="text-body font-semibold text-text-primary mb-1">{record.title}</h4>
                        <p className="text-caption text-text-secondary">
                          {record.doctor || record.lab}
                        </p>
                      </div>
                      <button className="ml-2 w-8 h-8 rounded-input bg-background flex items-center justify-center flex-shrink-0">
                        <Download size={16} className="text-primary" />
                      </button>
                    </div>
                    <p className="text-caption text-text-secondary mb-2">{record.notes}</p>
                    <div className="flex items-center gap-1 text-text-secondary">
                      <Calendar size={14} />
                      <span className="text-xs">{record.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
