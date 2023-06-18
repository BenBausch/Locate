import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
import { AboutUsComponent } from './about-us.component';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutUsComponent
  ],
  providers: []
})
export class AboutUsModule { }
