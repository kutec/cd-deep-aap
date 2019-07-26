import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { _LIBS } from '../libs/libs.index';

@NgModule({
  imports: [
    CommonModule,
    _LIBS
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedModule { }