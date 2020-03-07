import { Component } from '@angular/core';
import { MockHttpApiService } from 'src/app/shared/api/mock-http/mock-http.api.service';
import { MockUserResponseModel } from 'src/app/shared/api/mock-http/models/mock-user.model';
import { MockUsersResponseModel } from 'src/app/shared/api/mock-http/models/mock-users-response.model';

@Component({
  selector: 'app-mock-http',
  templateUrl: './mock-http.component.html',
  styleUrls: ['./mock-http.component.scss']
})
export class MockHttpComponent {
  public users: MockUserResponseModel[];

  constructor(private http: MockHttpApiService) {}

  public onGetUsers(): void {
    this.http.getUsers().subscribe((res: MockUsersResponseModel) => (this.users = res.data));
  }

  public onGetFaultReq(): void {
    this.http.getErrorResponse().subscribe();
  }
}
