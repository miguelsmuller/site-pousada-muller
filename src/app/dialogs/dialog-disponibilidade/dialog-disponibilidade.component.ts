import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { StepperOrientation } from '@angular/cdk/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dialog-disponibilidade',
  templateUrl: './dialog-disponibilidade.component.html',
  styleUrls: ['./dialog-disponibilidade.component.scss']
})
export class DialogDisponibilidadeComponent implements OnInit {
  minDate: Date;
  maxDate: Date;

  formTermsGroup: FormGroup;
  formReservationGroup: FormGroup;

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver,
    public dialogRef: MatDialogRef<DialogDisponibilidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));
  }

  ngOnInit(): void {
    const today = new Date();

    this.minDate = today;
    this.maxDate = new Date(today.getFullYear() , today.getMonth(), today.getDate() + 90);

    this.formTermsGroup = this.formBuilder.group({
      agreeToTerms : ['', Validators.required]
    });

    this.formReservationGroup = this.formBuilder.group({
      input_reservation_name : ['', Validators.required],
      input_reservation_phone : ['', Validators.required],
      input_reservation_mail : ['', Validators.required],
      input_reservation_period1 : ['', Validators.required],
      input_reservation_period2 : ['', Validators.required],
      input_reservation_qunits : ['', Validators.required],
      input_reservation_qpeoples : ['', Validators.required],
      input_reservation_qchildren : ['', Validators.required]
    });
  }
}
