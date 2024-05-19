import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from '../error.service';
import { Observable, catchError } from 'rxjs';

import {
  AddStaffTypeParam,
  EditStaffTypeParam,
} from '../../models/dtos/def/staff-type';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class StuffTypeService {
  ApiUrl: string = environment.ApiUrl + '/stuff-type';

  constructor(
    private _http: HttpClient,
    private _errorService: ErrorService,
   // @Inject('env') public environment: any,
  ) {}

  AddStuffType(model: AddStaffTypeParam): Observable<number> {
    return this._http
      .post<number>(`${this.ApiUrl}/stuff-type`, model)
      .pipe(catchError(this._errorService.handleError));
  }

  EditStuffType(model: EditStaffTypeParam): Observable<number> {
    return this._http
      .put<number>(`${this.ApiUrl}/stuff-type`, model)
      .pipe(catchError(this._errorService.handleError));
  }
}
