import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from '../urls';
import { MockUserResponseModel } from './models/mock-user.model';
import { MockUsersResponseModel } from './models/mock-users-response.model';

@Injectable({ providedIn: 'root' })
export class MockHttpApiService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<MockUsersResponseModel> {
    return this.http.get<MockUsersResponseModel>(Urls.getMockUsersList());
  }

  public getUser(id: number): Observable<MockUserResponseModel> {
    return this.http.get<MockUserResponseModel>(Urls.getMockUser(id));
  }

  public getErrorResponse(): Observable<any> {
    return this.http.get(Urls.getErrorResponse());
  }
}
