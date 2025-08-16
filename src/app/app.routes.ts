
// Fix for src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'monitoring/charts',
        loadComponent: () => import('./features/monitoring/charts/charts.component').then(m => m.ChartsComponent)
      },
      {
        path: 'monitoring/sensor-detail',
        loadComponent: () => import('./features/monitoring/sensor-detail/sensor-detail.component').then(m => m.SensorDetailComponent)
      },
      {
        path: 'formulation/nutrition-calculator',
        loadComponent: () => import('./features/formulation/nutrition-calculator/nutrition-calculator.component').then(m => m.NutritionCalculatorComponent)
      },
      {
        path: 'irrigation/irrigation-control',
        loadComponent: () => import('./features/irrigation/irrigation-control/irrigation-control.component').then(m => m.IrrigationControlComponent)
      },
      {
        path: 'admin/client-management',
        loadComponent: () => import('./features/admin/client-management/client-management.component').then(m => m.ClientManagementComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
