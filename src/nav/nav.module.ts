import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NavComponent]
})
export class NavModule { }
