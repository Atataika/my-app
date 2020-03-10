import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { merge, Observable, of as observableOf } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { InterceptorStoreService } from 'src/app/core/store/impl/interceptor-store.service';
import { ResponseLog } from '../../models/response.model';

export class SuccessedLogsTableDataSource extends DataSource<ResponseLog> {
  public data: ResponseLog[];
  public paginator: MatPaginator;

  constructor(private interceptorStoreService: InterceptorStoreService) {
    super();
    this.interceptorStoreService.storeValue$
      .pipe(
        first(),
        map(elems => elems.filter(item => item.error === false))
      )
      .subscribe(res => (this.data = res));
  }

  public connect(): Observable<ResponseLog[]> {
    const dataMutations = [observableOf(this.data), this.paginator.page];

    return merge(...dataMutations).pipe(map(() => this.getPagedData([...this.data])));
  }

  disconnect() {}

  private getPagedData(data: ResponseLog[]): ResponseLog[] {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }
}
