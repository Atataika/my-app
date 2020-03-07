import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostListenerComponent } from './components/host-listener/host-listener.component';
import { InterceptorLoggerComponent } from './components/interceptor-logger/interceptor-logger.component';
import { MockHttpComponent } from './components/mock-http/mock-http.component';
import { SandboxComponent } from './sandbox.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'mock-http', component: MockHttpComponent, data: { title: 'Mock http requests' } },
      { path: 'host-listener', component: HostListenerComponent, data: { title: 'Host listener' } },
      { path: 'interceptor-logger', component: InterceptorLoggerComponent, data: { title: 'Interceptor logs' } }
    ],
    component: SandboxComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule {}
