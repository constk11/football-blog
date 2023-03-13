import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FbAuthResponse, User } from "../shared/interfaces";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})

export class AuthService {

  public get token() {
    if (!localStorage.getItem('fb-token')) { return null}
    const expDate = new Date(localStorage.getItem('fb-token-exp') as string)
    if (new Date() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }
  
  constructor(private http: HttpClient) {}

  public login(user: User): Observable<FbAuthResponse | null> {
    user.returnSecureToken = true
    return this.http.post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      )
  }

  public logout() {
    this.setToken(null)
  }

  public isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expDate = new Date( new Date().getTime() + +response.expiresIn*1000 )
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
} 