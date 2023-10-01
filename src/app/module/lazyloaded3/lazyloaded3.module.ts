import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MockRouterModule } from 'src/app/services/mock-router.service.module';
import { Lazyloaded3RoutingModule } from './lazyloaded3-routing.module';
import { Lazyloaded3Component } from './lazyloaded3.component';

@NgModule({
  declarations: [Lazyloaded3Component],
  imports: [
    CommonModule,
    Lazyloaded3RoutingModule,
    MockRouterModule.forChild(),
  ],
})
export class Lazyloaded3Module {}
