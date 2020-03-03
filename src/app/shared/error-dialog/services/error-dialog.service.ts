import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog.component';

@Injectable()
export class ErrorDialogService {
  constructor(public dialog: MatDialog) {}

  public openDialog(data: HttpErrorResponse): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '500px',
      data
    });
  }
}
