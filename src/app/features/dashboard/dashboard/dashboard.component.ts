import { Component, OnInit, Inject } from '@angular/core';
import { MockDataService } from '../../../core/services/mock-data.service';
import { Sensor, Alert, KPI } from '../../../core/models/agrismart.models';
import { KpiCardComponent } from "../../../shared/components/kpi-card/kpi-card.component";
import { MatCardContent } from "@angular/material/card";
import { SensorStatusComponent } from "../../../shared/components/sensor-status/sensor-status.component";
import { MatCardHeader, MatCardTitle, MatCardSubtitle, MatCard } from "../../../../../node_modules/@angular/material/card/index";
import { AlertListComponent } from "../../../shared/components/alert-list/alert-list.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [KpiCardComponent, MatCardContent, SensorStatusComponent, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCard, AlertListComponent, DatePipe]
})
export class DashboardComponent implements OnInit {
  sensors: Sensor[] = [];
  alerts: Alert[] = [];
  kpis: KPI[] = [];
  lastUpdate = new Date();
  unreadAlerts = 0;

  constructor(@Inject(MockDataService) private mockDataService: MockDataService) {}

  ngOnInit() {
    this.loadDashboardData();
    
    // Simular actualizaciones cada 30 segundos
    setInterval(() => {
      this.updateSensorData();
    }, 30000);
  }

  private loadDashboardData() {
    this.mockDataService.getSensors().subscribe(sensors => {
      this.sensors = sensors;
    });

    this.mockDataService.getAlerts().subscribe(alerts => {
      this.alerts = alerts.slice(0, 5); // Últimas 5 alertas
      this.unreadAlerts = alerts.filter(a => !a.isRead).length;
    });

    this.mockDataService.getKPIs().subscribe(kpis => {
      this.kpis = kpis;
    });
  }

  private updateSensorData() {
    // Simular cambios en los valores de sensores
    this.sensors.forEach(sensor => {
      const variation = (Math.random() - 0.5) * 0.5;
      sensor.currentValue = Math.round((sensor.currentValue + variation) * 10) / 10;
      
      // Actualizar estado basado en rangos
      if (sensor.currentValue < sensor.minValue || sensor.currentValue > sensor.maxValue) {
        sensor.status = 'warning';
      } else {
        sensor.status = 'normal';
      }
    });
    
    this.lastUpdate = new Date();
  }
}