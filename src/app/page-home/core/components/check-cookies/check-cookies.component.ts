import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-check-cookies',
  templateUrl: './check-cookies.component.html',
  styleUrls: ['./check-cookies.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0, transform: 'translateY(100%)' })),
      transition('void => *, * => void', [animate('200ms ease-in')]),
    ]),
  ],
})
export class CheckCookiesComponent implements OnInit {
  public cookieExists: boolean;

  constructor(private _srcCookie: CookieService) {}

  ngOnInit(): void {
    this.cookieExists = this._srcCookie.check('pms-accept-cookie');
  }

  acceptCookies(): void {
    this._srcCookie.set('pms-accept-cookie', 'true', 30);
    this.cookieExists = true;
  }
}
