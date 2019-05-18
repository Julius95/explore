import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string='/oauth/';
  readonly auth:string = 'auth';
  readonly access_token = 'access_token';
  
  constructor(private httpClient:HttpClient) { }

  getBasicAuth():string{
    return 'Basic ' + btoa('admin:admin');
  }

  login(loginPayload, callback: (success: boolean) => void):void{
    const headers = {
      'Authorization': 'Basic ' + btoa('client:client'),
      'Content-type': 'application/x-www-form-urlencoded'
    }

    this.httpClient.post(this.url + 'token', loginPayload, {headers}).subscribe(data => {
      console.log(data['access_token'])
      console.log(data)
      let response = JSON.stringify(data)
      //console.log(JSON.parse(data).access_token)
      window.sessionStorage.setItem(this.auth, response);
      window.sessionStorage.setItem(this.access_token, data['access_token']);
      console.log(JSON.parse(window.sessionStorage.getItem(this.auth))['access_token'])
      callback(true);
    }, error => callback(false));
  }

  isLoggedIn():boolean{
    let authData = window.sessionStorage.getItem(this.auth);
    return authData!==undefined && authData !==null;
  }

  getAccessToken():string{
    if(this.isLoggedIn){
      return JSON.parse(window.sessionStorage.getItem(this.auth))[this.access_token];
    }
    return "";
  }

  logOut(){
    window.sessionStorage.clear();
  }
}
