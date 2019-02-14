import { Component } from '@angular/core';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _cookieService: CookieService) {}
  title = 'angular2-cookie';

  setCookies() {
    // this._cookieService.put('test', 'testing cookie');
    this._cookieService.set('test', 'testing cookie', 12);
  }

  getCookies() {
    alert(this._cookieService.get('test'));
  }

  delCookies() {
    this._cookieService.delete('test');
  }
}
