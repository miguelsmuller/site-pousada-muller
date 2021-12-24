import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { EmailService } from '@core/services/email.service';

@Component({
  selector: 'app-dialog-disponibilidade',
  templateUrl: './dialog-disponibilidade.component.html',
  styleUrls: ['./dialog-disponibilidade.component.scss'],
})
export class DialogDisponibilidadeComponent implements OnInit {
  formTermsGroup: FormGroup;
  formReservationGroup: FormGroup;
  formMinDate: Date;
  formMaxDate: Date;
  formStatus: string;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
    public dialogRef: MatDialogRef<DialogDisponibilidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: unknown
  ) {}

  ngOnInit(): void {
    const today = new Date();

    this.formMinDate = today;
    this.formMaxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 90);

    this.formTermsGroup = this.formBuilder.group({
      agreeToTerms: ['', Validators.required],
    });

    this.formReservationGroup = this.formBuilder.group({
      input_reservation_name: ['', [Validators.required, Validators.minLength(3)]],
      input_reservation_phone: ['', Validators.required],
      input_reservation_mail: ['', [Validators.required, Validators.email]],
      input_reservation_period1: ['', Validators.required],
      input_reservation_period2: ['', Validators.required],
      input_reservation_qunits: ['', Validators.required],
      input_reservation_qpeoples: ['', Validators.required],
      input_reservation_qchildren: ['', Validators.required],
      input_form_type: [],
    });
  }

  sendReservation(formData: FormGroup): void {
    this.emailService.senfForm(formData).subscribe(
      () => {
        this.formStatus = 'Sua solicitação foi enviada com sucesso.';
      },
      (erro) => {
        console.log(erro);
        this.formStatus = erro.message;
      }
    );
  }
}
