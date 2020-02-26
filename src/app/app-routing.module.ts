import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { PostsComponent } from "./components/posts/posts.component";
import { HostListenerComponent } from "./components/sandbox/components/host-listener/host-listener.component";
import { SandboxComponent } from "./components/sandbox/sandbox.component";

const routes: Routes = [
  { path: "home", component: MainPageComponent },
  { path: "posts", component: PostsComponent },
  {
    path: "sandbox",
    children: [{ path: "host-listener", component: HostListenerComponent }],
    component: SandboxComponent
  },
  { path: "about", component: AboutComponent },
  { path: "**", component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
