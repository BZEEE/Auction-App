import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from "./app.MainComponent";
import { HomeScreenComponent } from "./HomeScreen.app.HomeScreenComponent";
import { SearchResultsComponent } from "./SearchResult.SearchResultComponent";
import { UserProfileComponent } from "./UserProfile.User";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeScreenComponent,
    SearchResultsComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
