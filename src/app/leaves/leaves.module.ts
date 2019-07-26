import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesComponent } from './leaves.component';
import { Routes, RouterModule } from '@angular/router';

export { LeavesComponent } from './leaves.component';

import { ALL_MATERIAL } from '../libs/material.index';


export const LEAVES_ROUTES = [
  { path: '', component: LeavesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ALL_MATERIAL,
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