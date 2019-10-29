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
  bootstrap: [MainComponent],
})
export class AppModule {

    SetContentDivToHomeComponent() {
        // set HomeComponent as child of <div class=content></div>
    }

    SetContentDivToSearchResultComponent() {
        // set SearchResultComponent as child of <div class=content></div>
    }

    SetContentDivToUserProfile() {
        // set UserProfileComponent as child of <div class=content></div>
    }
}
