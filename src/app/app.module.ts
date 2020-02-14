import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AComponent } from "./a/a.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { PostsComponent } from "./components/posts/posts.component";
import { MaterialModule } from "./shared/material.module";
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AComponent,
    PostsComponent,
    AboutComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
