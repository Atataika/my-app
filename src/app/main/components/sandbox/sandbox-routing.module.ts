import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostListenerComponent } from './components/host-listener/host-listener.component';
import { InterceptorLoggerComponent } from './components/interceptor-logger/interceptor-logger.component';
import { SandboxComponent } from './sandbox.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'host-listener', component: HostListenerComponent },
      { path: 'interceptor-logger', component: InterceptorLoggerComponent }
    ],
    component: SandboxComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule {}
