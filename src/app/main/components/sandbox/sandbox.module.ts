import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/shared/material.module";
import { HostListenerComponent } from "./components/host-listener/host-listener.component";
import { SandboxComponent } from "./sandbox.component";
import { InterceptorLoggerComponent } from './components/interceptor-logger/interceptor-logger.component';

@NgModule({
  declarations: [SandboxComponent, HostListenerComponent, InterceptorLoggerComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  providers: [SandboxComponent]
})
export class SandboxModule {}
