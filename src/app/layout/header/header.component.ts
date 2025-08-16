import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MockDataService } from '../../core/services/mock-data.service';
import { MatToolbar } from "@angular/material/toolbar";
import { MatBadgeModule } from '@angular/material/badge';
import { f } from "../../../../node_modules/@angular/material/icon-module.d-COXCrhrh";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatToolbar, MatBadgeModule, f]
})
export class HeaderComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  
  unreadAlerts = 0;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.loadUnreadAlerts();
  }

  onMenuToggle() {
    this.menuToggle.emit();
  }

  private loadUnreadAlerts() {
    this.mockDataService.getUnreadAlerts().subscribe(alerts => {
      this.unreadAlerts = alerts.length;
    });
  }
}