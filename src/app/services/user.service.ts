import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  login(nick: string, pass: string) {
    return this.http.post<Usuario>(
      'http://192.168.20.218/user/login',
      JSON.stringify({
        nick,
        pass
      })
    ).toPromise<Usuario>();
  }

  logout() {
    return this.http.post(
      'http://192.168.20.218/user/logout',
      ''
    ).toPromise();
  }
}
