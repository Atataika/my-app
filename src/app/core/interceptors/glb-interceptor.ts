import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorDialogService } from 'src/app/shared/error-dialog/services/error-dialog.service';
import { InterceptorStoreService } from '../store/impl/interceptor-store/interceptor-store.service';

@Injectable()
export class GlbInterceptor implements HttpInterceptor {
  constructor(private interceptorStore: InterceptorStoreService, private errorDialog: ErrorDialogService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          this.interceptorStore.setStoreValue(res);
        }
      }),
      catchError(err => {
        this.interceptorStore.setStoreValue(err);
        this.errorDialog.openDialog(err);
        return throwError(err);
      })
    );
  }
}
