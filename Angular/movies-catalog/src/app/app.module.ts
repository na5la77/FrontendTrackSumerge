import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movies-list/movie/movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';

import { UsersService } from './users.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AuthGuardGuard } from './auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesListComponent,
    MovieComponent,
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
    AppRoutingModule,
    MatRippleModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
    UsersService,
    AuthGuardGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
