import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Alert } from '../../../core/models/agrismart.models';
import { f } from "../../../../../node_modules/@angular/material/icon-module.d-COXCrhrh";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss'],
  imports: [f, DatePipe]
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