import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { 
  Client, Company, Farm, ProductionUnit, Station, 
  Sensor, SensorReading, IrrigationEvent, Alert, KPI 
} from '../models/agrismart.models';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private clients: Client[] = [
    {
      id: 'CLI_UCR_001',
      name: 'UCR Validación',
      email: 'admin@ucr.ac.cr',
      phone: '+506 2511-2000',
      address: 'San José, Costa Rica',
      createdAt: new Date('2024-01-15'),
      isActive: true
    }
  ];

  private companies: Company[] = [
    {
      id: 'COMP_UCR_EEFBM',
      name: 'UCR-EEFBM',
      clientId: 'CLI_UCR_001',
      location: 'Alajuela, Costa Rica',
      contactPerson: 'Dr. Jesús Bejarano',
      catalogId: 'CAT_UCR_VALID_GEN'
    }
  ];

  private farms: Farm[] = [
    {
      id: 'FINCA_EEFBM',
      name: 'Estación Experimental Agrícola EEFBM',
      companyId: 'COMP_UCR_EEFBM',
      location: {
        district: 'San Carlos',
        canton: 'San Carlos',
        province: 'Alajuela',
        coordinates: { lat: 10.3880, lng: -84.4317 }
      },
      area: 50.5
    }
  ];

  private productionUnits: ProductionUnit[] = [
    {
      id: 'UP_INV_01',
      name: 'Invernadero 1',
      farmId: 'FINCA_EEFBM',
      type: 'greenhouse',
      crop: 'Tomate',
      area: 1000,
      installationDate: new Date('2024-02-01')
    }
  ];

  private stations: Station[] = [
    {
      id: 'EST_CLIMA_01',
      name: 'Estación Climática 01',
      productionUnitId: 'UP_INV_01',
      type: 'climate',
      location: 'Centro del invernadero',
      isOnline: true,
      lastReading: new Date()
    },
    {
      id: 'EST_RIEGO_01',
      name: 'Estación de Riego 01',
      productionUnitId: 'UP_INV_01',
      type: 'irrigation',
      location: 'Sistema de fertirrigación',
      isOnline: true,
      lastReading: new Date()
    }
  ];

  private sensors: Sensor[] = [
    {
      id: 'SNS_TEMP_01',
      name: 'Temperatura Ambiente',
      stationId: 'EST_CLIMA_01',
      type: 'temperature',
      unit: '°C',
      currentValue: 24.5,
      minValue: 18.0,
      maxValue: 35.0,
      status: 'normal'
    },
    {
      id: 'SNS_HUM_01',
      name: 'Humedad Relativa',
      stationId: 'EST_CLIMA_01',
      type: 'humidity',
      unit: '%',
      currentValue: 65.2,
      minValue: 40.0,
      maxValue: 90.0,
      status: 'normal'
    },
    {
      id: 'SNS_PH_RIEGO',
      name: 'pH Solución Nutritiva',
      stationId: 'EST_RIEGO_01',
      type: 'ph',
      unit: 'pH',
      currentValue: 6.2,
      minValue: 5.5,
      maxValue: 6.8,
      status: 'normal'
    },
    {
      id: 'SNS_EC_RIEGO',
      name: 'CE Solución Nutritiva',
      stationId: 'EST_RIEGO_01',
      type: 'ec',
      unit: 'dS/m',
      currentValue: 2.1,
      minValue: 1.8,
      maxValue: 2.5,
      status: 'warning'
    }
  ];

  private alerts: Alert[] = [
    {
      id: 'ALERT_001',
      type: 'warning',
      title: 'CE Elevada',
      message: 'La conductividad eléctrica está por encima del rango óptimo',
      sensorId: 'SNS_EC_RIEGO',
      productionUnitId: 'UP_INV_01',
      timestamp: new Date(),
      isRead: false,
      isResolved: false
    },
    {
      id: 'ALERT_002',
      type: 'info',
      title: 'Riego Completado',
      message: 'Ciclo de riego automático finalizado - 45L aplicados',
      productionUnitId: 'UP_INV_01',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 min ago
      isRead: true,
      isResolved: true
    }
  ];

  private kpis: KPI[] = [
    {
      name: 'Consumo Agua Diario',
      value: 150.5,
      unit: 'L/m²',
      trend: 'up',
      change: 5.2,
      period: 'últimas 24h'
    },
    {
      name: 'Eficiencia Riego',
      value: 87.3,
      unit: '%',
      trend: 'stable',
      change: 0.1,
      period: 'promedio semanal'
    },
    {
      name: 'Temperatura Promedio',
      value: 23.8,
      unit: '°C',
      trend: 'down',
      change: -1.2,
      period: 'últimas 24h'
    },
    {
      name: 'Costo Fertilizantes',
      value: 45.60,
      unit: '$/m²',
      trend: 'up',
      change: 8.5,
      period: 'este mes'
    }
  ];

  // Métodos del servicio
  getClients(): Observable<Client[]> {
    return of(this.clients).pipe(delay(500));
  }

  getCompanies(): Observable<Company[]> {
    return of(this.companies).pipe(delay(500));
  }

  getFarms(): Observable<Farm[]> {
    return of(this.farms).pipe(delay(500));
  }

  getProductionUnits(): Observable<ProductionUnit[]> {
    return of(this.productionUnits).pipe(delay(500));
  }

  getStations(): Observable<Station[]> {
    return of(this.stations).pipe(delay(500));
  }

  getSensors(): Observable<Sensor[]> {
    return of(this.sensors).pipe(delay(500));
  }

  getSensorsByStation(stationId: string): Observable<Sensor[]> {
    const filtered = this.sensors.filter(s => s.stationId === stationId);
    return of(filtered).pipe(delay(300));
  }

  getAlerts(): Observable<Alert[]> {
    return of(this.alerts).pipe(delay(500));
  }

  getUnreadAlerts(): Observable<Alert[]> {
    const unread = this.alerts.filter(a => !a.isRead);
    return of(unread).pipe(delay(300));
  }

  getKPIs(): Observable<KPI[]> {
    return of(this.kpis).pipe(delay(500));
  }

  // Simulación de datos históricos para gráficos
  getSensorReadings(sensorId: string, hours: number = 24): Observable<SensorReading[]> {
    const readings: SensorReading[] = [];
    const now = new Date();
    
    for (let i = hours; i >= 0; i--) {
      const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000);
      let value = this.generateMockValue(sensorId, i);
      
      readings.push({
        id: `reading_${sensorId}_${i}`,
        sensorId,
        value,
        timestamp,
        quality: 'good'
      });
    }
    
    return of(readings).pipe(delay(800));
  }

  private generateMockValue(sensorId: string, hoursAgo: number): number {
    // Generar valores realistas basados en el tipo de sensor
    const baseValues: { [key: string]: number } = {
      'SNS_TEMP_01': 24.5,
      'SNS_HUM_01': 65.0,
      'SNS_PH_RIEGO': 6.2,
      'SNS_EC_RIEGO': 2.1
    };

    const base = baseValues[sensorId] || 20;
    const variation = Math.sin(hoursAgo * 0.5) * 2 + Math.random() * 1.5 - 0.75;
    
    return Math.round((base + variation) * 100) / 100;
  }
}