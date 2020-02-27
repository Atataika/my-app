import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { InterceptorStoreService } from '../store/impl/interceptor-store/interceptor-store.service';

@Injectable()
export class GlbInterceptor implements HttpInterceptor {
  constructor(private store: InterceptorStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          this.store.storeValue = res;
        }
      }),
      catchError(err => {
        this.store.storeValue = err;
        return of(err);
      })
    );
  }
}

// TODO: Сделать вывод попапа при ошибке. Сохранять все данные в сервис для последующего вывода данных в нужном компоненте.
