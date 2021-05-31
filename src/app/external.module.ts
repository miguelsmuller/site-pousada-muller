import { NgModule } from '@angular/core';

// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// import { MatCardModule } from '@angular/material/card';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatIconModule } from '@angular/material/icon';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatSortModule } from '@angular/material/sort';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatTableModule } from '@angular/material/table';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatTreeModule } from '@angular/material/tree';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatButtonModule } from '@angular/material/button';
// import { MatListModule } from '@angular/material/list';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import { NgxPictureModule, CLOUDINARY_CONFIG } from 'ngx-picture';
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  imports: [
    NgxPictureModule.forRoot(CLOUDINARY_CONFIG),
    NgxMaskModule.forRoot()
  ],
  declarations: [],
  exports: [
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    NgxPictureModule,
    NgxMaskModule
  ],
  providers: [{
    provide: MAT_DATE_LOCALE,
    useValue: 'pt-BR'
  },{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  },{
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
    }
  }]
})
export class ExternalModule { }
