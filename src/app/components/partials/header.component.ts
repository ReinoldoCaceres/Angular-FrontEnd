import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/models/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Input() title?: string;
  constructor() { }
}