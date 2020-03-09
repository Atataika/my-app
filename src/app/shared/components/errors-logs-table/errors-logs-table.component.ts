import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { InterceptorMapperService } from '../../services/interceptor-mapper.service';
import { ErrorsLogsTableDataSource, ErrorsLogsTableItem } from './errors-logs-table-datasource';

@Component({
  selector: 'app-errors-logs-table',
  templateUrl: './errors-logs-table.component.html',
  styleUrls: ['./errors-logs-table.component.scss']
})
export class ErrorsLogsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<ErrorsLogsTableItem>;

  public dataSource: ErrorsLogsTableDataSource;
  public displayedColumns = ['dateCreated', 'status', 'statusText', 'url', 'ok', 'name', 'message'];

  constructor(private interceptorMapper: InterceptorMapperService) {}

  ngOnInit() {
    this.dataSource = new ErrorsLogsTableDataSource(this.interceptorMapper);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
