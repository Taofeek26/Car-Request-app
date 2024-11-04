import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, ClipboardList, LayoutDashboard, LogOut } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-6 w-6" />
              <span className="font-bold text-lg">CarRequest</span>
            </Link>
            
            <div className="flex space-x-4">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${isActive(
                  '/'
                )}`}
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              
              <Link
                to="/requests"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${isActive(
                  '/requests'
                )}`}
              >
                <ClipboardList className="h-4 w-4" />
                <span>Requests</span>
              </Link>
              
              <Link
                to="/vehicles"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${isActive(
                  '/vehicles'
                )}`}
              >
                <Car className="h-4 w-4" />
                <span>Vehicles</span>
              </Link>
            </div>
          </div>
          
          <button className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}