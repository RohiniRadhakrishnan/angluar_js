import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RtpcrTestComponent } from './rtpcr-test/rtpcr-test.component';

@NgModule({
  declarations: [
    AppComponent,
    RtpcrTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
