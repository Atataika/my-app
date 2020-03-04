import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlbInterceptor } from './core/interceptors/glb-interceptor';
import { SandboxModule } from './main/components/sandbox/sandbox.module';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';

const components = [AppComponent];

@NgModule({
  declarations: [...components],
  imports: [
    HttpClientModule,
    SharedModule,
    SandboxModule,
    MainModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: GlbInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
