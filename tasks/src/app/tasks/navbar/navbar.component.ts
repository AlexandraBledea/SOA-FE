import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {StompService} from '../../service/stomp.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  // notifications: { message: string }[] = [{message: 'notif'}, {message: 'notif'}, {message: 'notif'}, {message: 'notif'}]; // Notifications array
  // showNotifications: boolean = false;

  // ngOnInit() {
  //   // Initialize WebSocket only after component is fully loaded
  //   this.stompSerice.initialize();
  //
  //   // Subscribe to WebSocket messages
  //   this.stompSerice.messages$.subscribe(() => {
  //     console.log("s-a emis notif");
  //     this.notifications = [...this.notifications, {message: 'notif emisa noua'}];
  //   });
  // }

  constructor(private router: Router, private stompSerice: StompService) {
    // this.loadNotifications();
  }
  //
  // toggleNotifications(): void {
  //   this.showNotifications = !this.showNotifications;
  // }
  //
  // loadNotifications(): void {
  //   // Mock notifications
  //   this.notifications = [
  //     { message: 'Task "Test DB2" has been assigned to you' },
  //     { message: 'Task "Test Email" is due soon' },
  //   ];
  // }

  goToTasks() {
    this.router.navigate(['/main/tasks']);
  }

  goToMyTasks() {
    this.router.navigate(['/main/tasks/my-tasks']);
  }
}
