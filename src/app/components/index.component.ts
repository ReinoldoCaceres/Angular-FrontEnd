import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})

export class IndexComponent {
    public title: string = "Index Page"
  constructor() { }
}