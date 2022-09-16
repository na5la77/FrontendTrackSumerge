import { HttpClient, HttpHandler, HttpHeaders, HttpParams, HttpRequest, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({});
  hide = true;
  users: Users[];
  email: string;
  password: string;
  flagVerified: boolean = false;
  enterCredentials: boolean = false;


  ngOnInit() {
    localStorage.setItem('loggedIn', 'false');
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
    this.users = this.usersService.getUsers();
  }
  constructor(private router: Router, private http: HttpClient,private usersService: UsersService) {}

  async onSubmit() {
    sessionStorage.removeItem('access_token');
    this.enterCredentials = false;
    this.email = this.signUpForm.value.email;
    this.password = this.signUpForm.value.password;



      const params2 = new HttpParams({
        fromObject: {
          grant_type: 'password',
          username: this.email,
          password: this.password,

        }
      });




      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
        })
      };

      await new Promise<void> (resolve =>{
        this.http.post('c', params2, httpOptions).subscribe(
      (res: any) => {
        console.log(new HttpResponse().status);
        sessionStorage.setItem('access_token', res.access_token);
        console.log(sessionStorage.getItem('access_token'));
        resolve();

      },


    );

      })

console.log(sessionStorage.getItem('access_token'))







    if (this.signUpForm.status == 'VALID' && sessionStorage.getItem('access_token')!==null) {
      this.usersService.login();
      this.router.navigate(['/catalog']);

      this.flagVerified = false;
    } else {
      this.enterCredentials = true;
      this.usersService.logout();
    }


  }


}
