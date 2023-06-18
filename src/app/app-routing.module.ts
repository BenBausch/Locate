import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { LocationOverlayComponent } from './locations/location-overlay/location-overlay.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { PageNotFoundComponent } from './special-page/page-not-found/page-not-found.component';
import { AboutUsComponent } from './special-page/about-us/about-us.component';
import { NewLocationComponent } from './locations/new-location/new-location.component';

const routes: Routes = [
  {path: "add-new-location", component: NewLocationComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "location/:id", component: LocationOverlayComponent},
  {path: "", component: SearchMenuComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
