import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { InterceptorStoreService } from 'src/app/core/store/impl/interceptor-store/interceptor-store.service';

@Component({
  selector: 'app-interceptor-logger',
  templateUrl: './interceptor-logger.component.html',
  styleUrls: ['./interceptor-logger.component.scss']
})
export class InterceptorLoggerComponent implements OnInit {
  public httpResArr: Observable<HttpResponse<any[]>>;
  public httpErrResArr: HttpErrorResponse[];

  constructor(private interceptorStore: InterceptorStoreService) {}

  ngOnInit(): void {
    this.getResponsesFromStore$();
  }

  testStoreFunc() {
    this.interceptorStore.storeValue$.subscribe(res => console.log('FROM STORE', res));
  }

  // private getResponsesFromStore$(sortTipe: any): HttpResponse<any> | HttpErrorResponse {
  private getResponsesFromStore$(): any {
    return this.interceptorStore.storeValue$
      .pipe(
        filter(item => {
          console.log(item);
          return item instanceof HttpErrorResponse;
        })
      )
      .subscribe(res => console.log(res));
    // return this.interceptorStore.storeValue$.pipe(filter(item => item instanceof HttpErrorResponse));
    // return this.interceptorStore.storeValue$.pipe(filter(item => item instanceof sortTipe));
  }
}
