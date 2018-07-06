import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Subcomponent1Component } from './subcomponent1/subcomponent1.component';
import { Subcomponent2Component } from './subcomponent2/subcomponent2.component';
import { Subcomponent3Component } from './subcomponent3/subcomponent3.component';
import {MyserviceService} from './myservice.service';


@NgModule({
  declarations: [
    AppComponent,
    Subcomponent1Component,
    Subcomponent2Component,
    Subcomponent3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
