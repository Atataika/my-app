import { Component, OnInit } from '@angular/core';
import { InterceptorStoreService } from 'src/app/core/store/impl/interceptor-store/interceptor-store.service';

@Component({
  selector: 'app-interceptor-logger',
  templateUrl: './interceptor-logger.component.html',
  styleUrls: ['./interceptor-logger.component.scss']
})
export class InterceptorLoggerComponent implements OnInit {
  constructor(private testStore: InterceptorStoreService) {}

  ngOnInit(): void {}

  testStoreFunc() {
    this.testStore.storeValue$.subscribe(res => console.log('FROM STORE', res));
  }
}
