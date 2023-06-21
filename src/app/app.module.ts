import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LocationDisplayerModule } from './search-menu/location-displayer/location-displayer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from './navigation/navigation.module';
import { SearchMenuModule } from './search-menu/search-menu.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LocationOverlayModule } from './locations/location-overlay/location-overlay.module';
import { PageNotFoundModule } from './special-page/page-not-found/page-not-found.module';
import { NewLocationModule } from './locations/new-location/new-location.module';

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
    LocationOverlayModule,
    RouterModule,
    AppRoutingModule,
    PageNotFoundModule,
    NewLocationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
