import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ErrorsLogsTableComponent } from './components/errors-logs-table/errors-logs-table.component';
import { SuccessedLogsTableComponent } from './components/successed-logs-table/successed-logs-table.component';
import { HostListenerDirective } from './directives/host-listener.directive';
import { MarkerDirective } from './directives/marker.directive';
import { MaterialModule } from './material.module';
import { ErrorDialogService } from './services/error-dialog.service';
import { InterceptorMapperService } from './services/interceptor-mapper.service';

const components = [
  ErrorDialogComponent,
  MarkerDirective,
  ErrorsLogsTableComponent,
  SuccessedLogsTableComponent,
  HostListenerDirective
];

@NgModule({
  providers: [ErrorDialogService, InterceptorMapperService],
  declarations: [...components],
  imports: [CommonModule, MaterialModule],
  exports: [...components, MaterialModule]
})
export class SharedModule {}
