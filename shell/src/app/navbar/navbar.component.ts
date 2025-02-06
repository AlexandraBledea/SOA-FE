import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  showTopNavBar = false;

  constructor(private cookieService: CookieService, private router: Router, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateNavBar(event.url);
      }
    });

    this.updateNavBar(this.router.url);
  }

  updateNavBar(url: string) {
    this.showTopNavBar = url.includes('/main/tasks');
  }

  goBackToMain() {
    this.router.navigate(['/main']);
  }

  goToTasks() {
    this.router.navigate(['/main/tasks']);
  }

  logout() {
    console.log("Logging out.....")
    this.cookieService.delete('Token');
    console.log("Deleted token.....")
    this.cookieService.delete('Username');
    console.log("Deleted username.....")
    this.cdRef.detectChanges();
    setTimeout(() => {
      window.location.href= '/login';
    }, 500);
  }
}
