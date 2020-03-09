import { DataSource } from '@angular/cdk/collections';
import { HttpEventType, HttpHeaders } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { merge, Observable, of as observableOf } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { InterceptorMapperService } from '../../services/interceptor-mapper.service';

export interface SuccessedLogsTableItem {
  body: any;
  type: HttpEventType.Response;
  headers: HttpHeaders;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  dateCreated: string;
}

export class SuccessedLogsTableDataSource extends DataSource<SuccessedLogsTableItem> {
  public data: SuccessedLogsTableItem[];
  public paginator: MatPaginator;

  constructor(private interceptorMapper: InterceptorMapperService) {
    super();
    this.interceptorMapper.sucsessedResponses$.pipe(first()).subscribe(res => (this.data = res));
  }

  public connect(): Observable<SuccessedLogsTableItem[]> {
    const dataMutations = [observableOf(this.data), this.paginator.page];

    return merge(...dataMutations).pipe(map(() => this.getPagedData([...this.data])));
  }

  disconnect() {}

  private getPagedData(data: SuccessedLogsTableItem[]): SuccessedLogsTableItem[] {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }
}
