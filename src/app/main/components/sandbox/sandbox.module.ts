import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HostListenerComponent } from './components/host-listener/host-listener.component';
import { InterceptorLoggerComponent } from './components/interceptor-logger/interceptor-logger.component';
import { MockHttpComponent } from './components/mock-http/mock-http.component';
import { SandboxRoutingModule } from './sandbox-routing.module';
import { SandboxComponent } from './sandbox.component';

@NgModule({
  declarations: [SandboxComponent, HostListenerComponent, InterceptorLoggerComponent, MockHttpComponent],
  imports: [CommonModule, SandboxRoutingModule, SharedModule],
  exports: [SandboxComponent]
})
export class SandboxModule {}
