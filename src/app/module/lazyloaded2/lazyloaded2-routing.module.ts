import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazyloaded2Component } from './lazyloaded2.component';

const routes: Routes = [{ path: '', component: Lazyloaded2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazyloaded2RoutingModule { }
