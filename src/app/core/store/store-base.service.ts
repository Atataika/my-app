import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class StoreBaseService {
  abstract get storeValueSnapshot(): any[];

  abstract get storeValue$(): Observable<any[]>;

  abstract set storeValue(value: any);
}
