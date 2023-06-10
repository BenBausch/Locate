import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocationDisplayerModule } from './components/location-displayer/location-displayer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from './components/navigation/navigation.module';
import { SearchMenuModule } from './components/search-menu/search-menu.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LocationDisplayerModule,
    BrowserAnimationsModule,
    NavigationModule, 
    SearchMenuModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
