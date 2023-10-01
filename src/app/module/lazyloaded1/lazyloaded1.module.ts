import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MockRouterModule } from 'src/app/services/mock-router.service.module';
import { Lazyloaded1RoutingModule } from './lazyloaded1-routing.module';
import { Lazyloaded1Component } from './lazyloaded1.component';

@NgModule({
  declarations: [Lazyloaded1Component],
  imports: [
    CommonModule,
    Lazyloaded1RoutingModule,
    MockRouterModule.forChild(),
  ],
})
export class Lazyloaded1Module {}
