import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { MatIconModule} from '@angular/material/icon'
import { MatInputModule} from '@angular/material/input'
import{MatCardModule} from '@angular/material/card'
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from './users.service';
import {MatPaginatorModule} from '@angular/material/paginator';
const appRoutes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'login', component: LoginComponent},
  {path: 'catalog', component: MoviesListComponent, children: [
    {path: ':id', component: MovieComponent }
  ]
},

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesListComponent,
    MovieComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    MatRippleModule,
    MatPaginatorModule

  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
    UsersService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
