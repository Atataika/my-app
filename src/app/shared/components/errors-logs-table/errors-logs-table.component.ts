import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { InterceptorStoreService } from 'src/app/core/store/impl/interceptor-store.service';
import { ResponseLog } from '../../models/response.model';
import { ErrorsLogsTableDataSource } from './errors-logs-table-datasource';

@Component({
  selector: 'app-errors-logs-table',
  templateUrl: './errors-logs-table.component.html',
  styleUrls: ['./errors-logs-table.component.scss']
})
export class ErrorsLogsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<ResponseLog>;

  public dataSource: ErrorsLogsTableDataSource;
  public displayedColumns = ['dateCreated', 'status', 'statusText', 'url', 'ok', 'name', 'message'];

  constructor(private interceptorStoreService: InterceptorStoreService) {}

  ngOnInit() {
    this.dataSource = new ErrorsLogsTableDataSource(this.interceptorStoreService);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
