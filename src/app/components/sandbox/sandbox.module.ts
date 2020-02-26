import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/shared/material.module";
import { HostListenerComponent } from "./components/host-listener/host-listener.component";
import { SandboxComponent } from "./sandbox.component";

@NgModule({
  declarations: [SandboxComponent, HostListenerComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  providers: [SandboxComponent]
})
export class SandboxModule {}
