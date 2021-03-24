import { HttpClient } from '@angular/common/http';
import { LoginModel } from './../models/loginModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:44374/api/api/auth"

  constructor(private httpClient:HttpClient) { }

login(loginModel:LoginModel){
return this.httpClient.post(this.apiUrl+"login",loginModel)
}



}
