import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private authUrl: string = 'http://localhost:3000/api/login';
  private loggedIn: boolean = false;
  
  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('namaUser');
  }

  sudahLogin(): boolean {
    return this.loggedIn;
  }

  login(username: string, password: string): Observable<string> {
    return this.http.post(this.authUrl, {username,password})
      .map(res => res.json().user)
      .do(res => {
          localStorage.setItem('namaUser', res);
          this.loggedIn = true;
      })
      .catch(this.handleError);
  }

  logout(){
    localStorage.removeItem('namaUser');
    this.loggedIn = false;
  }

  getNamaUser(): string{
    return localStorage.getItem('namaUser');
  }

  /**
    * Handle any error from the API
    */
  private handleError(err){
    let errMessage: string;

    if(err instanceof Response){
      let body = err.json() || '';
      let error = JSON.stringify(body.error_msg);
      errMessage = `${err.status} - ${error}`; 
    }else{
      errMessage = err.message ? err.message : err.toString();
    }    
    return Observable.throw(errMessage);
  }

}
