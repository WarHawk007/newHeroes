import {Component, OnInit} from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myheroes';
  url: string;
  currentUrl: string;
  constructor(private router: Router) {
    router.events.subscribe((nav: NavigationEnd) => this.currentUrl = nav.url);
    console.log(this.currentUrl);
  }
  ngOnInit() {
    this.url = location.pathname;
    console.log(this.url);
}
}
