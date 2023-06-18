import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    LottieModule.forRoot({ player: playerFactory}),
    CommonModule,
    LottieModule
  ],
  exports:[
    PageNotFoundComponent
  ],
  providers: []
})
export class PageNotFoundModule { }
