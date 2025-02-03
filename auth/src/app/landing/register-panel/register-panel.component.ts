import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-panel',
  standalone: false,

  templateUrl: './register-panel.component.html',
  styleUrl: './register-panel.component.scss'
})
export class RegisterPanelComponent {

  constructor(private router: Router) {
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
