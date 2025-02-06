import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  {

  notifications: { message: string }[] = [{message: 'notif'}, {message: 'notif'}, {message: 'notif'}, {message: 'notif'}]; // Notifications array
  showNotifications: boolean = false;

  constructor(private router: Router) {
    this.loadNotifications();
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  loadNotifications(): void {
    // Mock notifications
    this.notifications = [
      { message: 'Task "Test DB2" has been assigned to you' },
      { message: 'Task "Test Email" is due soon' },
    ];
  }

  goToTasks() {
    this.router.navigate(['/main/tasks']);
  }

  goToMyTasks() {
    this.router.navigate(['/main/tasks/my-tasks']);
  }
}
