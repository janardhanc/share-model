import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReusableModelComponent } from './components/reusable-model/reusable-model.component';

@NgModule({
  declarations: [
    AppComponent,
    ReusableModelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
