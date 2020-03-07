import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faBars, faHome, faInfo, faMarker, faPlay, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatSidenav, { static: true })
  private sidenav: MatSidenav;

  public faIcon: IconDefinition = faBars;
  public headerTitle = 'My Application';
  public navigationsRoutes = [
    { title: 'Home', link: '', icon: faHome },
    { title: 'Posts', link: 'posts', icon: faMarker },
    { title: 'Sandbox', link: 'sandbox', icon: faPlay },
    { title: 'About me', link: 'about', icon: faInfo }
  ];

  public changeSidebarState() {
    this.sidenav.toggle();
    this.faIcon = this.faIcon.iconName === 'bars' ? faTimes : faBars;
  }
}
