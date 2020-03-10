import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faHome, faInfo, faMarker, faPlay } from '@fortawesome/free-solid-svg-icons';
import { filter, map, mergeMap } from 'rxjs/operators';
import { InterceptorStoreService } from './core/store/impl/interceptor-store.service';
import { InterceptorLogsApiService } from './shared/api/interceptor-logs/interceptor-logs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public headerTitle: string;
  public navigationsRoutes = [
    { title: 'Home', link: '', icon: faHome },
    { title: 'Posts', link: 'posts', icon: faMarker },
    { title: 'Sandbox', link: 'sandbox', icon: faPlay },
    { title: 'About me', link: 'about', icon: faInfo }
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private interceptorStoreService: InterceptorStoreService,
    private interceptorLogsService: InterceptorLogsApiService
  ) {}

  ngOnInit() {
    this.interceptorLogsService
      .getInterceptorLogs()
      .subscribe(logs => this.interceptorStoreService.setStoreValueViaApi(logs));

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
}
