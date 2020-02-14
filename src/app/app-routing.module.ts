import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { PostsComponent } from "./components/posts/posts.component";

const routes: Routes = [
  { path: "home", component: MainPageComponent },
  { path: "posts", component: PostsComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
