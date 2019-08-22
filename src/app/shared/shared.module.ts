import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { _LIBS } from '../libs/libs.index';
import { NavigationMainComponent } from './header/navigation-main/navigation-main.component';

@NgModule({
  imports: [
    CommonModule,
    _LIBS
  ],
  declarations: [HeaderComponent, NavigationMainComponent],
  exports: [HeaderComponent]
})
export class SharedModule { }