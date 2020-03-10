import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { InterceptorStoreService } from 'src/app/core/store/impl/interceptor-store.service';
import { ResponseLog } from '../../models/response.model';
import { SuccessedLogsTableDataSource } from './successed-logs-table-datasource';

@Component({
  selector: 'app-successed-logs-table',
  templateUrl: './successed-logs-table.component.html',
  styleUrls: ['./successed-logs-table.component.scss']
})
export class SuccessedLogsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<ResponseLog>;

  public dataSource: SuccessedLogsTableDataSource;
  public displayedColumns = ['dateCreated', 'status', 'statusText', 'url', 'ok', 'type'];

  constructor(private interceptorStoreService: InterceptorStoreService) {}

  ngOnInit() {
    this.dataSource = new SuccessedLogsTableDataSource(this.interceptorStoreService);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
