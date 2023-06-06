import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DogBreedComponent } from './dog-breed.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DogBreedComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [DogBreedComponent]
})
export class AppModule { }
