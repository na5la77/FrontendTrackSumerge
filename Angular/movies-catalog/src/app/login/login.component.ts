import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit{
  signUpForm: FormGroup = new FormGroup({});
  hide = true;
  users: Users [];
  email: string;
  password: string;
  flagVerified: boolean=false;
  enterCredentials: boolean = false;



  ngOnInit() {
    this.signUpForm = new FormGroup({
      "email": new FormControl(null,[Validators.required, Validators.email]),
      "password": new FormControl(null, Validators.required )
    })
    this.users = this.usersService.getUsers();
  }
  constructor(private router: Router,
              private usersService: UsersService){}



  onSubmit(){
    this.enterCredentials=false;
     this.email=(this.signUpForm.value.email);
     this.password = (this.signUpForm.value.password);



    for (let i = 0;i < this.users.length; i++){
      if (this.email === this.users[i].email && this.password === this.users[i].password){
          this.flagVerified=true;
          break;

      }
    }


if(this.signUpForm.status=='VALID' && this.flagVerified)
    {

      this.router.navigate(['/catalog'])

     this.flagVerified=false;
    }
    else{
      this.enterCredentials=true;
    }

  }


}

