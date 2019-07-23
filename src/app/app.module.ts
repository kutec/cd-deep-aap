import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ALL_MATERIAL } from './material.index'

import { AppComponent } from './app.component';
import { LeavesComponent } from './components/leaves/leaves.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, ALL_MATERIAL ],
  declarations: [ AppComponent, LeavesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
