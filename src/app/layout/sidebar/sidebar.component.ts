import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    document.querySelector('app-sidebar')?.classList.toggle('collapsed', this.isCollapsed);
    document.querySelector('app-navbar')?.classList.toggle('collapsed', this.isCollapsed);
    document.querySelector('.content')?.classList.toggle('collapsed', this.isCollapsed);
  }
}
