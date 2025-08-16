export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
  isActive: boolean;
}

export interface Company {
  id: string;
  name: string;
  clientId: string;
  location: string;
  contactPerson: string;
  catalogId: string;
}

export interface Farm {
  id: string;
  name: string;
  companyId: string;
  location: {
    district: string;
    canton: string;
    province: string;
    coordinates?: { lat: number; lng: number; };
  };
  area: number; // hectáreas
}

export interface ProductionUnit {
  id: string;
  name: string;
  farmId: string;
  type: 'greenhouse' | 'field';
  crop: string;
  area: number; // m²
  installationDate: Date;
}

export interface Station {
  id: string;
  name: string;
  productionUnitId: string;
  type: 'climate' | 'soil' | 'irrigation';
  location: string;
  isOnline: boolean;
  lastReading: Date;
}

export interface Sensor {
  id: string;
  name: string;
  stationId: string;
  type: 'temperature' | 'humidity' | 'ph' | 'ec' | 'flow' | 'pressure';
  unit: string;
  currentValue: number;
  minValue: number;
  maxValue: number;
  status: 'normal' | 'warning' | 'critical';
}

export interface SensorReading {
  id: string;
  sensorId: string;
  value: number;
  timestamp: Date;
  quality: 'good' | 'fair' | 'poor';
}

export interface IrrigationEvent {
  id: string;
  productionUnitId: string;
  startTime: Date;
  endTime?: Date;
  volume: number; // litros
  duration: number; // minutos
  type: 'scheduled' | 'manual' | 'automatic';
}

export interface NutrientFormulation {
  id: string;
  name: string;
  crop: string;
  growthStage: string;
  waterQuality: {
    ph: number;
    ec: number;
    hardness: number;
  };
  fertilizers: {
    id: string;
    name: string;
    concentration: number; // ppm
    cost: number;
  }[];
  totalCost: number;
  createdAt: Date;
  createdBy: string;
}

export interface Alert {
  id: string;
  type: 'warning' | 'critical' | 'info';
  title: string;
  message: string;
  sensorId?: string;
  productionUnitId: string;
  timestamp: Date;
  isRead: boolean;
  isResolved: boolean;
}

export interface KPI {
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
  period: string;
}