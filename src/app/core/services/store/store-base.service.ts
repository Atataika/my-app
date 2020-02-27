import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class StoreBaseService {
  abstract get getStoreSnapshot(): any[];

  abstract get getStoreValue$(): Observable<any[]>;

  abstract setStoreValue(value: any): void;
}
