import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'movies', component:MoviesComponent},
      {path: 'trending', component: TrendingComponent},
      {path: 'tv-series', component: TvSeriesComponent},
      {path: 'bookmarked', component: BookmarkedComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
