import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public faBars = faBars;
  public isSidebarOpened: boolean;

  public changeSidebarState() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }
}
