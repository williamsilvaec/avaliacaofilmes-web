import {Component, HostListener, OnInit} from '@angular/core';
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
export class SidebarComponent implements OnInit {
  isCollapsed = false;

  ngOnInit(): void {
    this.isCollapsed = window.innerWidth <= 992;
    this.updateSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.window.innerWidth > 992) {
      this.isCollapsed = false;
      this.updateSidebar();
    } else {
      this.isCollapsed = true;
      this.updateSidebar();
    }
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.updateSidebar();
  }

  private updateSidebar() {
    document.querySelector('.sidebar')?.classList.toggle('collapsed', this.isCollapsed);
    document.querySelector('.navbar')?.classList.toggle('collapsed', this.isCollapsed);
    document.querySelector('.content')?.classList.toggle('collapsed', this.isCollapsed);
  }
}
