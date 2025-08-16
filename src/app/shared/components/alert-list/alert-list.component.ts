
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Alert } from '../../../core/models/agrismart.models';

@Component({
  selector: 'app-alert-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent {
  @Input() alerts: Alert[] = [];
  @Output() alertRead = new EventEmitter<Alert>();

  getAlertIcon(type: string): string {
    switch (type) {
      case 'critical': return 'error';
      case 'warning': return 'warning';
      case 'info': return 'info';
      default: return 'notifications';
    }
  }

  markAsRead(alert: Alert) {
    alert.isRead = true;
    this.alertRead.emit(alert);
  }
}