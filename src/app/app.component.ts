import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public isSidebarOpened: boolean;

  public changeSidebarState() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }
}
