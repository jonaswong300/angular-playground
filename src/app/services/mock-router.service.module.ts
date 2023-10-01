import { ModuleWithProviders, NgModule } from '@angular/core';
import { MockRouterService } from './mock-router.service';

@NgModule()
export class MockRouterModule {
  static forRoot(): ModuleWithProviders<MockRouterModule> {
    return {
      ngModule: MockRouterModule,
      providers: [MockRouterService],
    };
  }

  static forChild(): ModuleWithProviders<MockRouterModule> {
    return {
      ngModule: MockRouterModule,
    };
  }
}
