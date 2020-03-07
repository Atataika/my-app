import { MockUserResponseModel } from './mock-user.model';

export interface MockUsersResponseModel {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: MockUserResponseModel[];
}
