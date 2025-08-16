import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { SensorStatusComponent } from './components/sensor-status/sensor-status.component';
import { AlertListComponent } from './components/alert-list/alert-list.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    KpiCardComponent,
    SensorStatusComponent,
    AlertListComponent
  ],
  exports: [
    KpiCardComponent,
    SensorStatusComponent,
    AlertListComponent
  ]
})
export class SharedModule { }