import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestserviceService {

  private apiUrl = 'http://localhost:8080/quickdraft/api/v1/report/loadProperties';

  constructor(private http: HttpClient) {}

  submitFormData(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

}
