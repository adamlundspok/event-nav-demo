import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-root',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Navigation Event Demo';

  // Need access to the angular (SPA) router
  constructor(router: Router) {

    // Listen for the router-nav event on document
    document.addEventListener('router-nav', (evt: CustomEvent) => {
      console.log('AppComponent: data-router event triggered, value: ', evt.detail);

      // get the value of event.detail and push it to the angular router
      router.navigateByUrl(evt.detail);
    });

  }
}
