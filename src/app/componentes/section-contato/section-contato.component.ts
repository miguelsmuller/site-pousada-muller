import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailService } from '@app/shared/email.service';

@Component({
  selector: 'app-section-contato',
  templateUrl: './section-contato.component.html',
  styleUrls: ['./section-contato.component.scss']
})
export class SectionContatoComponent implements OnInit {

  formContactGroup: FormGroup;
  formMinDate: Date;
  formMaxDate: Date;
  formStatus: string;

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService,
  ) { }

  ngOnInit(): void {
    this.formContactGroup = this.formBuilder.group({
      input_contact_name : ['', [Validators.required, Validators.minLength(3)]],
      input_contact_email : ['', [Validators.required, Validators.email]],
      input_contact_tipo : ['', Validators.required],
      input_contact_assunto : ['', Validators.required],
      input_contact_mensagem : ['', Validators.required],
      input_form_type: []
    });
  }

  sendReservation(formData: FormGroup): void{
    this.emailService.senfForm(formData).subscribe(
      susc => { this.formStatus = 'Sua manifestação foi enviada com sucesso.'; },
      erro => { console.log(erro); this.formStatus = erro.message; }
    );
  }

}
