import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesComponent } from './leaves.component';
import { Routes, RouterModule } from '@angular/router';

export { LeavesComponent } from './leaves.component';

import { _LIBS } from '../libs/libs.index';


export const LEAVES_ROUTES = [
  { path: '', component: LeavesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    _LIBS,
    RouterModule.forChild(LEAVES_ROUTES)
  ],
  declarations: [
    LeavesComponent
  ],
  exports: [
    LeavesComponent
  ]
})
export class LeavesModule { }