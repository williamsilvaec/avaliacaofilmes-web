import {Component, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isCollapsed = window.innerWidth <= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isCollapsed = window.innerWidth <= 768;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    document.querySelector('.sidebar')?.classList.toggle('collapsed', this.isCollapsed);
    document.querySelector('.navbar')?.classList.toggle('collapsed', this.isCollapsed);
    document.querySelector('.content')?.classList.toggle('collapsed', this.isCollapsed);
  }
}
