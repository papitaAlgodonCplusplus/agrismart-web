import { Component } from '@angular/core';
import { MatSidenavContainer } from "@angular/material/sidenav";
import { MatSidenav, MatSidenavContent } from "../../../../node_modules/@angular/material/sidenav/index";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { AppRoutingModule } from "../../app-routing.module";

@Component({
  selector: 'app-layout',
  imports: [MatSidenavContainer, MatSidenav, HeaderComponent, MatSidenavContent, SidebarComponent, AppRoutingModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
