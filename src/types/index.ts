export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'staff' | 'manager';
}

export interface Vehicle {
  _id: string;
  model: string;
  plateNumber: string;
  status: 'available' | 'in-use';
  currentUser?: string;
}

export interface Request {
  _id: string;
  userId: string;
  vehicleId: string;
  purpose: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}