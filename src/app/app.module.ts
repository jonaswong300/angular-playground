import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockRouterModule } from './services/mock-router.service.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MockRouterModule.forRoot()],
  bootstrap: [AppComponent],
})
export class AppModule {}
