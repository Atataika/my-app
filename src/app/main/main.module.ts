import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { HostListenerComponent } from './components/sandbox/components/host-listener/host-listener.component';
import { InterceptorLoggerComponent } from './components/sandbox/components/interceptor-logger/interceptor-logger.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  {
    path: 'sandbox',
    children: [
      { path: 'host-listener', component: HostListenerComponent },
      { path: 'interceptor-logger', component: InterceptorLoggerComponent }
    ],
    component: SandboxComponent
  },
  { path: 'about', component: AboutComponent }
];

const components = [MainPageComponent, PostsComponent, AboutComponent];
@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class MainModule {}
