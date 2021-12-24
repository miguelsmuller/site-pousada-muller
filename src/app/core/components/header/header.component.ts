import { Component, AfterViewInit, HostBinding, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime, takeUntil } from 'rxjs/operators';

import { EmailService } from '@core/services/email.service';

enum Direction {
  Up = 'Up',
  Down = 'Down',
}

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('toggle', [
      state(VisibilityState.Hidden, style({ opacity: 0, transform: 'translateY(-100%)' })),
      state(VisibilityState.Visible, style({ opacity: 1, transform: 'translateY(0)' })),
      transition('* => *', animate('200ms ease-in')),
    ]),
  ],
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  public menuShow = false;
  private isVisible = true;
  private unSubscribeAllObservables$ = new Subject();

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  constructor(private _emailService: EmailService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      takeUntil(this.unSubscribeAllObservables$),
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );
    const scrollUp$ = scroll$.pipe(filter((direction) => direction === Direction.Up));
    const scrollDown = scroll$.pipe(filter((direction) => direction === Direction.Down));

    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown.subscribe(() => (this.isVisible = false));
  }

  ngOnDestry(): void {
    this.unSubscribeAllObservables$.next();
  }

  toggleMenu(): void {
    this.menuShow = !this.menuShow;
  }

  openReservationDialog(): void {
    this._emailService.openReservationDialog();
  }
}
