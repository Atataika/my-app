import { Component, OnInit } from '@angular/core';
import { InterceptorStoreService } from 'src/app/core/services/store/impl/interceptor-store/interceptor-store.service';

@Component({
  selector: 'app-interceptor-logger',
  templateUrl: './interceptor-logger.component.html',
  styleUrls: ['./interceptor-logger.component.scss']
})
export class InterceptorLoggerComponent implements OnInit {
  constructor(private testStore: InterceptorStoreService) {}

  ngOnInit(): void {
    console.log('Inited store in comp', this.testStore.getStoreSnapshot);
  }

  testStoreFunc() {
    this.testStore.getStoreValue$.subscribe(res => console.log('FROM STORE', res));
  }
}
