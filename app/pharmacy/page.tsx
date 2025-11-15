'use client';

import BottomNav from '@/components/BottomNav';
import { ArrowLeft, Search, SlidersHorizontal, ShoppingCart, Plus, Minus, Pill, Clock, MapPin, Tag } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PharmacyPage() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const categories = ['All', 'Prescription', 'Vitamins', 'Pain Relief', 'First Aid', 'Personal Care'];

  const medicines = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      category: 'Pain Relief',
      price: 8.99,
      inStock: true,
      prescription: false,
      manufacturer: 'PharmaCo',
      image: '💊',
    },
    {
      id: 2,
      name: 'Vitamin D3 1000 IU',
      category: 'Vitamins',
      price: 12.50,
      inStock: true,
      prescription: false,
      manufacturer: 'HealthVit',
      image: '💊',
    },
    {
      id: 3,
      name: 'Amoxicillin 250mg',
      category: 'Prescription',
      price: 15.99,
      inStock: true,
      prescription: true,
      manufacturer: 'MediPharm',
      image: '💊',
    },
    {
      id: 4,
      name: 'First Aid Kit',
      category: 'First Aid',
      price: 24.99,
      inStock: true,
      prescription: false,
      manufacturer: 'CarePlus',
      image: '🩹',
    },
    {
      id: 5,
      name: 'Multivitamin Complex',
      category: 'Vitamins',
      price: 18.99,
      inStock: true,
      prescription: false,
      manufacturer: 'VitaLife',
      image: '💊',
    },
    {
      id: 6,
      name: 'Ibuprofen 400mg',
      category: 'Pain Relief',
      price: 9.99,
      inStock: false,
      prescription: false,
      manufacturer: 'PharmaCo',
      image: '💊',
    },
  ];

  const updateCart = (id: number, change: number) => {
    setCart(prev => {
      const current = prev[id] || 0;
      const newValue = current + change;
      if (newValue <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newValue };
    });
  };

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const medicine = medicines.find(m => m.id === parseInt(id));
    return sum + (medicine?.price || 0) * qty;
  }, 0);

  const cartItems = Object.keys(cart).length;

  return (
    <div className="mobile-container">
      <div className="screen-padding bottom-nav-space">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
              <ArrowLeft size={20} className="text-text-primary" />
            </Link>
            <h1 className="text-heading-md text-text-primary">Pharmacy</h1>
          </div>
          <Link href="/pharmacy/cart" className="relative">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <ShoppingCart size={24} className="text-white" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-error text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartItems}
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Search */}
        <div className="flex gap-2 mb-6">
          <div className="flex-1 flex items-center gap-3 bg-background rounded-input px-4 py-3">
            <Search size={20} className="text-text-secondary" />
            <input
              type="text"
              placeholder="Search medicines..."
              className="flex-1 bg-transparent text-body text-text-primary outline-none placeholder:text-text-secondary"
            />
          </div>
          <button className="w-12 h-12 rounded-input bg-primary flex items-center justify-center">
            <SlidersHorizontal size={20} className="text-white" />
          </button>
        </div>

        {/* Upload Prescription Banner */}
        <div className="bg-secondary-green rounded-card p-4 mb-6 flex items-center gap-3">
          <div className="text-3xl">📋</div>
          <div className="flex-1">
            <h3 className="text-body font-semibold text-text-primary mb-1">Have a Prescription?</h3>
            <p className="text-caption text-text-secondary">Upload and order medicines</p>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-button text-caption font-semibold">
            Upload
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-chip text-caption whitespace-nowrap ${
                category === 'All'
                  ? 'bg-primary text-white'
                  : 'bg-background text-text-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Delivery Info */}
        <div className="flex items-center gap-2 mb-6 p-3 bg-background rounded-input">
          <MapPin size={16} className="text-primary" />
          <span className="text-caption text-text-primary">Deliver to: 123 Main St, New York</span>
          <button className="ml-auto text-caption text-primary font-semibold">Change</button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-3">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="bg-white rounded-card border border-gray-100 p-3 shadow-card">
              {/* Badge */}
              {medicine.prescription && (
                <span className="inline-block px-2 py-1 bg-warning/10 text-warning text-xs rounded-chip font-medium mb-2">
                  Rx Required
                </span>
              )}

              {/* Image */}
              <div className="w-full h-24 bg-background rounded-input flex items-center justify-center text-4xl mb-3">
                {medicine.image}
              </div>

              {/* Info */}
              <h4 className="text-body font-semibold text-text-primary mb-1 line-clamp-2">{medicine.name}</h4>
              <p className="text-xs text-text-secondary mb-2">{medicine.manufacturer}</p>

              {/* Price & Stock */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-heading-sm text-primary">${medicine.price}</span>
                <span className={`text-xs font-medium ${medicine.inStock ? 'text-success' : 'text-error'}`}>
                  {medicine.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {/* Add to Cart */}
              {medicine.inStock && (
                <div>
                  {(cart[medicine.id] || 0) === 0 ? (
                    <button
                      onClick={() => updateCart(medicine.id, 1)}
                      className="w-full py-2 bg-primary text-white rounded-button text-caption font-semibold"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-primary rounded-button">
                      <button
                        onClick={() => updateCart(medicine.id, -1)}
                        className="w-10 h-9 flex items-center justify-center text-white"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-body font-semibold text-white">{cart[medicine.id]}</span>
                      <button
                        onClick={() => updateCart(medicine.id, 1)}
                        className="w-10 h-9 flex items-center justify-center text-white"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Cart Summary */}
        {cartItems > 0 && (
          <div className="fixed bottom-24 left-6 right-6 max-w-[428px] mx-auto">
            <Link href="/pharmacy/cart">
              <div className="bg-primary rounded-button p-4 shadow-card flex items-center justify-between">
                <div>
                  <p className="text-caption text-white/80">Cart Total</p>
                  <p className="text-heading-sm text-white">${cartTotal.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-button">View Cart</span>
                  <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">
                    {cartItems}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
