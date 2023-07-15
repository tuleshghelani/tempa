import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  BASE_URL: String = "http://localhost:8080/";
  constructor(private http:HttpClient) { }

  createUser(userDate: any) : Observable <any> {
    return this.http.post(this.BASE_URL+"user/save", userDate)
  }

  login(userData: any) : Observable <any> {
    return this.http.post(this.BASE_URL+"user/login", userData)

  }
}
