import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseLog } from 'src/app/core/models/response-log.model';
import { StoreBaseService } from '../store-base.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorStoreService implements StoreBaseService {
  private storeState = new BehaviorSubject<ResponseLog[]>([]);
  public isStoreLoading = new BehaviorSubject<boolean>(false);

  public get storeValueSnapshot(): ResponseLog[] {
    return this.storeState.value;
  }

  public get storeValue$(): Observable<ResponseLog[]> {
    return this.storeState;
  }

  public setStoreValue(res: HttpResponse<any> | HttpErrorResponse): void {
    this.storeState.next([...this.storeState.value, this.mapResponse(res)]);
  }

  public setStoreStateLoading(state: boolean): void {
    this.isStoreLoading.next(state);
  }

  private mapResponse(response: HttpResponse<any> | HttpErrorResponse): ResponseLog {
    const dateCreated = new Date().toISOString();

    return { dateCreated, response };
  }
}
