
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Sensor } from '../../../core/models/agrismart.models';

@Component({
  selector: 'app-sensor-status',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sensor-status.component.html',
  styleUrls: ['./sensor-status.component.scss']
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
