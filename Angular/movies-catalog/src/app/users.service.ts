
import { Injectable } from "@angular/core";
import { Users } from './users.model';

@Injectable()

export class UsersService{
  private users: Users[] =  [
  new Users ("snakhla@sumerge.com","1234"),
  new Users  ("test@test.com","1234"),
  new Users ( "snakhla","1234")


  ];

  getUsers(){
    return this.users.slice();
  }


}
