import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MockRouterModule } from 'src/app/services/mock-router.service.module';
import { Lazyloaded2RoutingModule } from './lazyloaded2-routing.module';
import { Lazyloaded2Component } from './lazyloaded2.component';

@NgModule({
  declarations: [Lazyloaded2Component],
  imports: [
    CommonModule,
    Lazyloaded2RoutingModule,
    MockRouterModule.forChild(),
  ],
})
export class Lazyloaded2Module {}
