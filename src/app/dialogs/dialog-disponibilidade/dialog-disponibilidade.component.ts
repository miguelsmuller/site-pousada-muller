import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

@Component({
  selector: 'app-dialog-disponibilidade',
  templateUrl: './dialog-disponibilidade.component.html',
  styleUrls: ['./dialog-disponibilidade.component.scss'],
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
    },
  ],
})
export class DialogDisponibilidadeComponent implements OnInit {
  minDate: Date;
  maxDate: Date;

  constructor(
    public dialogRef: MatDialogRef<DialogDisponibilidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    const today = new Date();
    this.minDate = today;
    this.maxDate = new Date(today.getFullYear() , today.getMonth(), today.getDate()+90);
  }


  ngOnInit(): void {
  }

}
