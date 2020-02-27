import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { SandboxModule } from './components/sandbox/sandbox.module';
import { GlbInterceptor } from './core/interceptors/glb-interceptor';
import { SharedModule } from './shared/shared.module';

const components = [AppComponent, MainPageComponent, PostsComponent, AboutComponent];

@NgModule({
  declarations: [...components],
  imports: [
    HttpClientModule,
    SharedModule,
    SandboxModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: GlbInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
