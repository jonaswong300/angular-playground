import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazyloaded1Component } from './lazyloaded1.component';

const routes: Routes = [{ path: '', component: Lazyloaded1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazyloaded1RoutingModule { }
