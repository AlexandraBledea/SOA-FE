import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  {


  constructor(private router: Router) {
  }

  goToTasks() {
    this.router.navigate(['/main/tasks']);
  }

  goToMyTasks() {
    this.router.navigate(['/main/tasks/my-tasks']);
  }
}
