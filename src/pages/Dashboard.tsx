import React from 'react';
import { Car, Clock, CheckCircle, XCircle } from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Available Vehicles"
          value="5"
          icon={<Car className="h-8 w-8 text-green-500" />}
          color="bg-green-50"
        />
        <DashboardCard
          title="Pending Requests"
          value="3"
          icon={<Clock className="h-8 w-8 text-yellow-500" />}
          color="bg-yellow-50"
        />
        <DashboardCard
          title="Approved Requests"
          value="8"
          icon={<CheckCircle className="h-8 w-8 text-blue-500" />}
          color="bg-blue-50"
        />
        <DashboardCard
          title="Rejected Requests"
          value="2"
          icon={<XCircle className="h-8 w-8 text-red-500" />}
          color="bg-red-50"
        />
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Requests</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Staff
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Sample data - replace with actual data */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Toyota Camry</td>
                <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap">2024-03-15</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, icon, color }: { title: string; value: string; icon: React.ReactNode; color: string }) {
  return (
    <div className={`${color} rounded-lg shadow p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}

export default Dashboard;