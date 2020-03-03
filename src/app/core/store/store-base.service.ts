import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class StoreBaseService {
  abstract isStoreLoading: any;

  abstract get storeValueSnapshot(): any[];

  abstract get storeValue$(): Observable<any[]>;

  abstract setStoreValue(value: any): void;

  abstract setStoreStateLoading(state: any): void;
}
