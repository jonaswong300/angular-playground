import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyloaded3RoutingModule } from './lazyloaded3-routing.module';
import { Lazyloaded3Component } from './lazyloaded3.component';


@NgModule({
  declarations: [
    Lazyloaded3Component
  ],
  imports: [
    CommonModule,
    Lazyloaded3RoutingModule
  ]
})
export class Lazyloaded3Module { }
