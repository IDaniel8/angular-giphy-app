import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './views/dashboard/dashboard.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
