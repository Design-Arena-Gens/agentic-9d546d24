'use client';

import { Home, Calendar, MessageCircle, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Calendar, label: 'Appointments', href: '/appointments' },
    { icon: MessageCircle, label: 'Chat', href: '/chat' },
    { icon: User, label: 'Profile', href: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-20 max-w-[428px] mx-auto z-50">
      <div className="flex items-center justify-around h-full px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 gap-1"
            >
              <Icon
                size={24}
                className={isActive ? 'text-accent-brown' : 'text-text-secondary'}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`text-xs font-medium ${
                  isActive ? 'text-accent-brown' : 'text-text-secondary'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
