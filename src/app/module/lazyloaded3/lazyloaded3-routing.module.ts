import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazyloaded3Component } from './lazyloaded3.component';

const routes: Routes = [{ path: '', component: Lazyloaded3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazyloaded3RoutingModule { }
