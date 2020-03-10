import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InterceptorLogsApiService } from 'src/app/shared/api/interceptor-logs/interceptor-logs.service';
import { ResponseLog } from 'src/app/shared/models/response.model';
import { StoreBaseService } from '../store-base.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorStoreService implements StoreBaseService {
  private storeState = new BehaviorSubject<ResponseLog[]>([]);
  public isStoreLoading = new BehaviorSubject<boolean>(false);

  constructor(private interceptorLogsService: InterceptorLogsApiService) {}

  public get storeValueSnapshot(): ResponseLog[] {
    return this.storeState.value;
  }

  public get storeValue$(): Observable<ResponseLog[]> {
    return this.storeState;
  }

  public setStoreValue(res: HttpResponse<any> | HttpErrorResponse): void {
    const mappedResponse = this.mapResponse(res);

    this.storeState.next([...this.storeState.value, mappedResponse]);

    // FIXME: Рекурсивно сетится новый лог потому что мы принимаем ответ от сервера что все ок
    // Заглушил ответы на бэке
    this.interceptorLogsService.postInterceptorLog(mappedResponse).subscribe(response => console.log(response));
  }

  public setStoreValueViaApi(res: ResponseLog[]): void {
    this.storeState.next(res);
  }

  public setStoreStateLoading(state: boolean): void {
    this.isStoreLoading.next(state);
  }

  private mapResponse(response: HttpResponse<any> | HttpErrorResponse): ResponseLog {
    const dateCreated = new Date().toISOString();
    const { status, statusText, url, ok } = response;
    const result = {
      error: false,
      dateCreated,
      status,
      statusText,
      url,
      ok,
      type: response.type,
      name: null,
      message: null
    };

    if (response instanceof HttpErrorResponse) {
      return { ...result, error: true, type: null, name: response.name, message: response.message };
    }

    return result;
  }
}
