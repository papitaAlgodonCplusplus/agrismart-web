
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MockDataService } from '../../core/services/mock-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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