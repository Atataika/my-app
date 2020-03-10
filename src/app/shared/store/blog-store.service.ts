import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StoreBaseService } from 'src/app/core/store/store-base.service';
import { PostModel } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogStoreService implements StoreBaseService {
  private storeState = new BehaviorSubject<PostModel[]>([]);
  public isStoreLoading = new BehaviorSubject<boolean>(false);

  public get storeValueSnapshot(): PostModel[] {
    return this.storeState.value;
  }

  public get storeValue$(): Observable<PostModel[]> {
    return this.storeState;
  }

  public setStoreValue(res: any): void {
    this.storeState.next([...this.storeState.value, res]);
  }

  public setStoreStateLoading(state: boolean): void {
    this.isStoreLoading.next(state);
  }
}
