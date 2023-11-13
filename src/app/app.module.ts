import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';
import { requestsService } from './requests/requests.service';
import { AppRoutingModule } from './app-routing.module';
import { NewRequestComponent } from './new-request/new-request.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    NewRequestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    requestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
