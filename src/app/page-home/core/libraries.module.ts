import { NgModule } from '@angular/core';

import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import { NgxMaskModule } from 'ngx-mask';
import { SwiperModule } from 'swiper/angular';
import { CookieService } from 'ngx-cookie-service';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [NgxMaskModule.forRoot()],
  declarations: [],
  exports: [
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTabsModule,
    MatDatepickerModule,
    MatStepperModule,
    ReactiveFormsModule,
    NgxMaskModule,
    SwiperModule,
    YouTubePlayerModule,
  ],
  providers: [
    CookieService,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR',
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['l', 'LL'],
        },
        display: {
          dateInput: 'DD/MM/YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      },
    },
  ],
})
export class LibrariesModule {}
