import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ErrorsLogsTableComponent } from './components/errors-logs-table/errors-logs-table.component';
import { SuccessedLogsTableComponent } from './components/successed-logs-table/successed-logs-table.component';
import { GetElemRefDirective } from './directives/get-elem-ref.directive';
import { MaterialModule } from './material.module';
import { ErrorDialogService } from './services/error-dialog.service';
import { InterceptorMapperService } from './services/interceptor-mapper.service';

const components = [ErrorDialogComponent, GetElemRefDirective, ErrorsLogsTableComponent, SuccessedLogsTableComponent];

@NgModule({
  providers: [ErrorDialogService, InterceptorMapperService],
  declarations: [...components, GetElemRefDirective],
  imports: [CommonModule, MaterialModule],
  exports: [...components, MaterialModule, GetElemRefDirective]
})
export class SharedModule {}
