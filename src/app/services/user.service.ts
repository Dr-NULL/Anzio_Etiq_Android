import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { serverUrl, headers } from '../global';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  login(nick: string, pass: string) {
    return this.http.post<Usuario>(
      serverUrl + 'user/login',
      JSON.stringify({
        nick,
        pass
      }),
      {
        headers: headers()
      }
    ).toPromise<Usuario>();
  }
}
