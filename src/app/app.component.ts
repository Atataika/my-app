import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faBars, faHome, faInfo, faMarker, faPlay, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav, { static: true })
  private sidenav: MatSidenav;

  public faIcon: IconDefinition = faBars;
  public headerTitle: string;

  public navigationsRoutes = [
    { title: 'Home', link: '', icon: faHome },
    { title: 'Posts', link: 'posts', icon: faMarker },
    { title: 'Sandbox', link: 'sandbox', icon: faPlay },
    { title: 'About me', link: 'about', icon: faInfo }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data)
      )
      .subscribe(event => {
        this.titleService.setTitle(event.title);
        this.headerTitle = event.title;
      });
  }

  public changeSidebarState() {
    this.sidenav.toggle();
    this.faIcon = this.faIcon.iconName === 'bars' ? faTimes : faBars;
  }
}
