import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
  ],
  imports: [
    SidebarComponent,
    LayoutComponent,
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    HeaderComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }