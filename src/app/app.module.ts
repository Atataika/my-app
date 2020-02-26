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
import { SandboxModule } from "./components/sandbox/sandbox.module";
import { MaterialModule } from "./shared/material.module";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { GlbInterceptor } from './main/interceptors/glb-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AComponent,
    PostsComponent,
    AboutComponent
  ],
  imports: [
    HttpClientModule,
    MaterialModule,
    SandboxModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GlbInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
