
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { KPI } from '../../../core/models/agrismart.models';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss']
})
export class KpiCardComponent {
  @Input() kpi!: KPI;

  getTrendIcon(): string {
    switch (this.kpi.trend) {
      case 'up': return 'trending_up';
      case 'down': return 'trending_down';
      default: return 'trending_flat';
    }
  }

  getTrendClass(): string {
    return `trend-${this.kpi.trend}`;
  }

  getChangeClass(): string {
    if (this.kpi.change > 0) return 'change-positive';
    if (this.kpi.change < 0) return 'change-negative';
    return 'change-neutral';
  }

  getChangeText(): string {
    const sign = this.kpi.change > 0 ? '+' : '';
    return `${sign}${this.kpi.change}%`;
  }
}