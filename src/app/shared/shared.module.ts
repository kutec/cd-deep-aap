import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ALL_MATERIAL } from '../libs/material.index';

@NgModule({
  imports: [
    CommonModule,
    ALL_MATERIAL
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedModule { }