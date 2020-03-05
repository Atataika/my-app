import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ErrorDialogService } from 'src/app/shared/services/error-dialog.service';
import { InterceptorStoreService } from '../store/impl/interceptor-store.service';

@Injectable()
export class GlbInterceptor implements HttpInterceptor {
  constructor(private interceptorStore: InterceptorStoreService, private errorDialog: ErrorDialogService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        res => {
          if (res instanceof HttpResponse) {
            this.interceptorStore.setStoreValue(res);
          }
        },
        (err: HttpErrorResponse) => {
          this.interceptorStore.setStoreValue(err);
          this.errorDialog.openDialog(err);
        }
      )
    );
  }
}
