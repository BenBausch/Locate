import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewLocationComponent } from './new-location.component';

@NgModule({
  declarations: [
    NewLocationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NewLocationComponent
  ],
  providers: []
})
export class NavigationModule { }
