import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject, throwError, BehaviorSubject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { User } from './user-model';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private URL_API = 'http://localhost:3000';

  // tslint:disable-next-line: variable-name
  private _isAuthenticated =  new BehaviorSubject<boolean>(false);
  redirectUrl: string;
  private token;
  public decodedToken;

  public helper = new JwtHelperService();


  constructor(
    private http: HttpClient,
    private router: Router,

  ) {
    this.isAuthneticated.subscribe(is => console.log('AuthState', is));
  }



  get isAuthneticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  public signIn(user: User ): Observable<any> {


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers
  };

    return this.http.post(`${this.URL_API}/login`, JSON.stringify(user), options)
    .pipe(
      map((res: any) => {
        this.token = res.accessToken;
        this.decodedToken = this.helper.decodeToken(this.token);
        return res;
      }),
      tap((res: any) => this.setAuthState({token: res.accessToken && res.accessToken, isAuthneticated: res !== null}),
      catchError(erro => {
        this.setAuthState({token: null, isAuthneticated: false});
        return throwError(erro);
      })
    ));
  }

  signUp(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers
  };

    return this.http.post(`${this.URL_API}/register`, user, options)
    .pipe(
      map((res: any) => {

        this.token = res.accessToken;
        this.decodedToken = this.helper.decodeToken(this.token);
        return res;

      }),
      tap(res => this.setAuthState({token: res.accessToken && res.accessToken, isAuthneticated: res !== null}),
      catchError(erro => {
        this.setAuthState({token: null, isAuthneticated: false});
        return throwError(erro);
      })
    ));
  }




private setAuthState(authData: {token: string, isAuthneticated: boolean}): void {
  if (authData.isAuthneticated) {
    window.localStorage.setItem('AUTH_TOKEN', authData.token);
    window.localStorage.setItem('Id_user', btoa(this.decodedToken.sub));
  }
  this._isAuthenticated.next(authData.isAuthneticated);
}

logout(): void {
  window.localStorage.removeItem('AUTH_TOKEN');
  window.localStorage.removeItem('Id_user');
  this._isAuthenticated.next(false);
  this.router.navigate(['/login']);
}


}
