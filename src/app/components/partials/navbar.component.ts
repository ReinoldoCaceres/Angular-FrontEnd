import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/models/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
   
  constructor(public auth: AuthService, private router: Router) { }

  logout() {
    if (confirm('Are you sure?')) {
      this.auth.clear();
      this.router.navigateByUrl("/");
    }
  }
}