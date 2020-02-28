import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StoreBaseService } from '../../store-base.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorStoreService implements StoreBaseService {
  private storeState = new BehaviorSubject<any[]>([]);
  public storeStateLoading = new BehaviorSubject<boolean>(false);
  public get storeValueSnapshot(): any[] {
    return this.storeState.value;
  }

  public get storeValue$(): Observable<any[]> {
    return this.storeState;
  }

  public set storeValue(value: HttpResponse<any> | HttpErrorResponse) {
    this.storeState.next([...this.storeState.value, value]);
  }

  public setStoreStateLoading(): any {
    this.storeStateLoading.next(true);
  }
}
