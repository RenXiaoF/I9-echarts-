import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxEchartsModule } from 'ngx-echarts';

import { ModelModule } from './model/model.module';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ApiService } from '../service/api.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    ModelModule,
    HttpClientModule

  ],
  providers: [
    ApiService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
