import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ErrorDialogService } from './error-dialog/services/error-dialog.service';
import { MaterialModule } from './material.module';

@NgModule({
  providers: [ErrorDialogService],
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule]
})
export class SharedModule {}
