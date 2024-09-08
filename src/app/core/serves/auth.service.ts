import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _HttpClient = inject(HttpClient);
  private readonly _Router = inject(Router)

  userData: any = null




  setRegisterForm(data: object): Observable<any> {
    return this._HttpClient.post(`${enviroment.baseurl}/api/v1/auth/signup`, data)
  }


  setlonginForm(data: object): Observable<any> {
    return this._HttpClient.post(`${enviroment.baseurl}/api/v1/auth/signin`, data)
  }


  saveUserData() {
    if (localStorage.getItem('userToken') != null) {


      return this.userData = jwtDecode(localStorage.getItem('userToken')!)




    }

  }



  logout(): void {
    localStorage.removeItem('userToken');

    this.userData = null;

    this._Router.navigate(['/login'])


  }

  // forgit





  set_Verify_Email(data: object): Observable<any> {
    return this._HttpClient.post(`${enviroment.baseurl}/api/v1/auth/forgotPasswords`, data)
  }

  set_Verify_Code(data: object): Observable<any> {
    return this._HttpClient.post(`${enviroment.baseurl}/api/v1/auth/verifyResetCode`, data)
  }


  set_NewPass(data: object): Observable<any> {
    return this._HttpClient.put(`${enviroment.baseurl}/api/v1/auth/resetPassword`, data)
  }








}





