import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { GetElemRefDirective } from './directives/get-elem-ref.directive';
import { MaterialModule } from './material.module';
import { ErrorDialogService } from './services/error-dialog.service';

@NgModule({
  providers: [ErrorDialogService],
  declarations: [ErrorDialogComponent, GetElemRefDirective],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule]
})
export class SharedModule {}
