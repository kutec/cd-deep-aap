import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RoutingComponent } from './routing.component';

const APP_ROUTES: Routes = [
  { path: 'leaves', loadChildren: '../leaves/leaves.module#LeavesModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [RoutingComponent],
  exports: [RouterModule]
})
export class RoutingModule { }