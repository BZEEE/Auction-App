import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './UserProfile/UserProfileComponent';
import { SearchResultComponent } from './SearchResult/SearchResultComponent';
import { HomeScreenComponent } from './HomeScreen/HomeScreenComponent';


const routes: Routes = [
  {path: 'home', component: HomeScreenComponent},
  {path: 'search-results', component: SearchResultComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
