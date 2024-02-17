import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './headline.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HeadlineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HeadlineComponent]
})
export class HeadlineModule { }
