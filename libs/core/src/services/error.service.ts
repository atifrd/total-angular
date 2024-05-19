import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  ErrorMessage: any = '';
  constructor() {}

  public handleError(error: HttpErrorResponse) {
    console.error('ERROR : ', error);
    if (error.status == 404) this.ErrorMessage = 'Request Not Found';
    else if (error.status == 401 && error.statusText == 'Unauthorized')
      this.ErrorMessage = 'Please Login Again';

    if (error.error instanceof ErrorEvent) {
      this.ErrorMessage = error.error.message;
    } else {
      this.ErrorMessage = error.error
        ? !error.error.server_error
          ? error.error
          : error.error.server_error
        : error;
    }

    this.ErrorMessage =
      this.ErrorMessage instanceof Array
        ? this.ErrorMessage[0]
        : this.ErrorMessage;
    console.error('ErrorMessage : ', this.ErrorMessage);

    return throwError(() => this.ErrorMessage);
  }
}
