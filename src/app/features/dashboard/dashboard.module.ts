import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    DashboardComponent,
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DashboardModule { }