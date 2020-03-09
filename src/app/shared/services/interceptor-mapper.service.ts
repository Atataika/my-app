import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InterceptorStoreService } from 'src/app/core/store/impl/interceptor-store.service';

@Injectable()
export class InterceptorMapperService {
  constructor(private interceptorLogger: InterceptorStoreService) {}

  public get sucsessedResponses$(): Observable<any> {
    return this.interceptorLogger.storeValue$.pipe(
      map(responses => {
        return responses
          .filter(res => res.response instanceof HttpResponse)
          .map(res => ({
            dateCreated: res.dateCreated,
            ...res.response
          }));
      })
    );
  }

  public get failedResponses$(): Observable<any> {
    return this.interceptorLogger.storeValue$.pipe(
      map(responses => {
        return responses
          .filter(res => res.response instanceof HttpErrorResponse)
          .map(res => ({
            dateCreated: res.dateCreated,
            ...res.response
          }));
      })
    );
  }
}
