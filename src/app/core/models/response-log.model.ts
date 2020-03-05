import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

export interface ResponseLog {
  dateCreated: string;
  response: HttpResponse<any> | HttpErrorResponse;
}
