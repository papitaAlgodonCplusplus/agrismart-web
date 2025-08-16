import { Component } from '@angular/core';
import { DashboardRoutingModule } from "./features/dashboard/dashboard-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [DashboardRoutingModule]
})
export class AppComponent {
  title = 'AgriSmart Web';
}