import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeavesComponent } from './leaves.component';
import { Routes, RouterModule } from '@angular/router';

export { LeavesComponent } from './leaves.component';

import { SharedModule } from '../shared/shared.module';


export const LEAVES_ROUTES = [
  { path: '', component: LeavesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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