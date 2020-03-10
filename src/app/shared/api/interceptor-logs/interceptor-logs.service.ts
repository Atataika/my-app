import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseLog } from '../../models/response.model';
import { Urls } from '../urls';

@Injectable({ providedIn: 'root' })
export class InterceptorLogsApiService {
  constructor(private http: HttpClient) {}

  public getInterceptorLogs(): Observable<ResponseLog[]> {
    return this.http.get<ResponseLog[]>(Urls.getInterceptorLogs());
  }

  public postInterceptorLog(log: ResponseLog): Observable<ResponseLog> {
    return this.http.post<ResponseLog>(Urls.postInterceptorLog(), log);
  }
}
