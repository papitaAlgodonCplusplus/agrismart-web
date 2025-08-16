import { Component, Input } from '@angular/core';
import { KPI } from '../../../core/models/agrismart.models';
import { f } from "../../../../../node_modules/@angular/material/icon-module.d-COXCrhrh";
import { MatCard } from "@angular/material/card";
import { MatCardContent } from "../../../../../node_modules/@angular/material/card/index";

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
  imports: [f, MatCard, MatCardContent]
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