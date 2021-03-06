import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from "./Components/Main.Component";
import { HomeScreenComponent } from "./Components/HomeScreen/Home.component";
import { SearchResultComponent } from "./Components/SearchResult/SearchResult.component";
import { UserProfileComponent } from "./Components/UserProfile/UserProfile.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeScreenComponent,
    SearchResultComponent,
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
