import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { __importDefault } from 'tslib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
