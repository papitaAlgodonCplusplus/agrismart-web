import { Component, Input } from '@angular/core';
import { Sensor } from '../../../core/models/agrismart.models';
import { f } from "../../../../../node_modules/@angular/material/icon-module.d-COXCrhrh";

@Component({
  selector: 'app-sensor-status',
  templateUrl: './sensor-status.component.html',
  styleUrls: ['./sensor-status.component.scss'],
  imports: [f]
})
export class SensorStatusComponent {
  @Input() sensors: Sensor[] = [];

  getStatusIcon(status: string): string {
    switch (status) {
      case 'normal': return 'check_circle';
      case 'warning': return 'warning';
      case 'critical': return 'error';
      default: return 'help';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'normal': return 'Normal';
      case 'warning': return 'Advertencia';
      case 'critical': return 'Crítico';
      default: return 'Desconocido';
    }
  }
}