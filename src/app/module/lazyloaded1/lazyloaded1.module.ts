import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyloaded1RoutingModule } from './lazyloaded1-routing.module';
import { Lazyloaded1Component } from './lazyloaded1.component';


@NgModule({
  declarations: [
    Lazyloaded1Component
  ],
  imports: [
    CommonModule,
    Lazyloaded1RoutingModule
  ]
})
export class Lazyloaded1Module { }
