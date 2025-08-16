import { Component } from '@angular/core';
import { f } from "../../../../node_modules/@angular/material/icon-module.d-COXCrhrh";
import { MatNavList } from "@angular/material/list";
import { MatDivider } from "../../../../node_modules/@angular/material/divider/index";

@Component({
  selector: 'app-sidebar',
  imports: [f, MatNavList, MatDivider],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
