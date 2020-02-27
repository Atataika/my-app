import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StoreBaseService } from '../../store-base.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorStoreService implements StoreBaseService {
  private storeValue: any[] = [];

  public get getStoreSnapshot(): any[] {
    return this.storeValue;
  }

  public get getStoreValue$(): Observable<any[]> {
    // FIXME: Неправильно работает подписка. При изменении стора не обновляется подписка
    return of(this.storeValue);
  }

  public setStoreValue(value: any): void {
    this.storeValue.push(value);
    console.log(this.storeValue);
  }
}
