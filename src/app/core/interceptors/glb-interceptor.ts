import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { InterceptorStoreService } from '../services/store/impl/interceptor-store/interceptor-store.service';

@Injectable()
export class GlbInterceptor implements HttpInterceptor {
  constructor(private store: InterceptorStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(e => {
        if (e instanceof HttpResponse) {
          console.log('status:', e.status);
          console.log('body:', e.body);
        }
      }),
      catchError(err => {
        this.store.setStoreValue(err);
        // FIXME: Ошибка обработки. Нужно поправить типизацию
        return of(err);
      })
    );
  }
}

// TODO: Сделать вывод попапа при ошибке. Сохранять все данные в сервис для последующего вывода данных в нужном компоненте.
