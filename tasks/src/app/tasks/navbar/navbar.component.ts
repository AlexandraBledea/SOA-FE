import {Component } from '@angular/core';
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
export class NavbarComponent {
  
  constructor(private router: Router) {
  }

  goToTasks() {
    this.router.navigate(['/main/tasks']);
  }

  goToMyTasks() {
    this.router.navigate(['/main/tasks/my-tasks']);
  }
}
