import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private cookieService: CookieService, private router: Router) {
  }

  logout(): void {
    this.cookieService.delete('Token');
    this.router.navigate(['/login']);
  }
}
