import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MovieComponent } from "./movies-list/movie/movie.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";

const appRoutes: Routes = [
  {path: '', component: LoginComponent},

  //{path: 'login', component: LoginComponent},
  {path: 'catalog', component: MoviesListComponent},
  {path: 'catalog/:id', component: MovieComponent }

]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule
{}

