import React from 'react';
import { Car, Users } from 'lucide-react';

function Vehicles() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Vehicle Fleet</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <VehicleCard
          model="Toyota Camry"
          plateNumber="ABC 123"
          status="available"
        />
        <VehicleCard
          model="Honda Civic"
          plateNumber="XYZ 789"
          status="in-use"
          currentUser="John Doe"
        />
        {/* Add more vehicle cards */}
      </div>
    </div>
  );
}

function VehicleCard({ 
  model, 
  plateNumber, 
  status, 
  currentUser 
}: { 
  model: string; 
  plateNumber: string; 
  status: 'available' | 'in-use'; 
  currentUser?: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <Car className="h-8 w-8 text-blue-600" />
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          status === 'available' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {status === 'available' ? 'Available' : 'In Use'}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900">{model}</h3>
      <p className="text-sm text-gray-500 mb-4">Plate: {plateNumber}</p>
      
      {currentUser && (
        <div className="flex items-center text-sm text-gray-600">
          <Users className="h-4 w-4 mr-2" />
          <span>Current User: {currentUser}</span>
        </div>
      )}
    </div>
  );
}

export default Vehicles;