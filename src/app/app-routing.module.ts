import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
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
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'monitoring',
        loadChildren: () => import('./features/monitoring/monitoring.module').then(m => m.MonitoringModule)
      },
      {
        path: 'formulation',
        loadChildren: () => import('./features/formulation/formulation.module').then(m => m.FormulationModule)
      },
      {
        path: 'irrigation',
        loadChildren: () => import('./features/irrigation/irrigation.module').then(m => m.IrrigationModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }