import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { InterceptorStoreService } from 'src/app/core/store/impl/interceptor-store/interceptor-store.service';
import { ResponseLog } from 'src/app/core/store/models/response-log.model';

@Component({
  selector: 'app-interceptor-logger',
  templateUrl: './interceptor-logger.component.html',
  styleUrls: ['./interceptor-logger.component.scss']
})
export class InterceptorLoggerComponent implements OnInit {
  public responses$: Observable<ResponseLog[]>;

  constructor(private interceptorStore: InterceptorStoreService) {}

  ngOnInit(): void {
    this.responses$ = this.getResponsesFromStore$();

    // TODO: Переделать интерфейс респонсов. Убрать вывод с мок сервера. Доделать компоненты постов. Запилить монгу в докер
    this.responses$.pipe(first()).subscribe(res => console.log(res));
  }

  private getResponsesFromStore$(): Observable<ResponseLog[]> {
    return this.interceptorStore.storeValue$;
  }
}
