import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { InterceptorLoggerDataSource, InterceptorLoggerItem } from './interceptor-logger-datasource';

@Component({
  selector: 'app-interceptor-logger',
  templateUrl: './interceptor-logger.component.html',
  styleUrls: ['./interceptor-logger.component.scss']
})
export class InterceptorLoggerComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<InterceptorLoggerItem>;
  dataSource: InterceptorLoggerDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new InterceptorLoggerDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
