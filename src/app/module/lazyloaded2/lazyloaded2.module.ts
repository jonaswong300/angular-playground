import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyloaded2RoutingModule } from './lazyloaded2-routing.module';
import { Lazyloaded2Component } from './lazyloaded2.component';


@NgModule({
  declarations: [
    Lazyloaded2Component
  ],
  imports: [
    CommonModule,
    Lazyloaded2RoutingModule
  ]
})
export class Lazyloaded2Module { }
