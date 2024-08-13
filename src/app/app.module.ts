import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiodataHeaderComponentComponent } from './biodata-header-component/biodata-header-component.component';
import { BiodataDetailComponentComponent } from './biodata-detail-component/biodata-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BiodataHeaderComponentComponent,
    BiodataDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
