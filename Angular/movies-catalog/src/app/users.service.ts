import { Injectable } from '@angular/core';
import { Users } from './users.model';

@Injectable()
export class UsersService {
  loggedIn = false;
  private users: Users[] = [
    new Users('snakhla@sumerge.com', '1234'),
    new Users('test@test.com', '1234'),
    new Users('snakhla', '1234'),
  ];

  login() {
    localStorage.setItem('loggedIn', 'true');
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');


  }

  getUsers() {
    return this.users.slice();
  }
}
