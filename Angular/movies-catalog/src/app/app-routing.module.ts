import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movies-list/movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const appRoutes: Routes = [
  {
    path: 'catalog',
    component: MoviesListComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'catalog/:id',
    component: MovieComponent,
    canActivate: [AuthGuardGuard],
  },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
