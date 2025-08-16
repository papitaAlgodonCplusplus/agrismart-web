
// Fix for src/app/layout/layout/layout.component.ts
import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [
    MatSidenavContainer, 
    MatSidenav, 
    MatSidenavContent,
    HeaderComponent, 
    SidebarComponent, 
    RouterOutlet
  ]
})
export class LayoutComponent {
}
