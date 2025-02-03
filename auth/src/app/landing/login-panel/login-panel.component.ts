import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-panel',
  standalone: false,

  templateUrl: './login-panel.component.html',
  styleUrl: './login-panel.component.scss'
})
export class LoginPanelComponent {

  constructor(private router: Router) {
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
