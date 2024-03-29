import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { ComponentType } from '@angular/cdk/portal';
import { FormGroup } from '@angular/forms';
import { forkJoin, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { environment } from '@env/environment';
import { DIALOG_TYPE } from './dialog.token';

export interface IEMailContent {
  fromName: string;
  fromEmail: string;
  toName: string;
  toEmail: string;
  replyTo: string;
  subejct: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private emailApi = environment.emailApi;
  public emailInSending = false;

  constructor(
    private serviceRequest: HttpClient,
    private dialog: MatDialog,
    @Inject(DIALOG_TYPE) private InjectDialogComponent: ComponentType<unknown>
  ) {}

  public openReservationDialog(): void {
    const formConfig = new MatDialogConfig();
    formConfig.panelClass = 'mat-dialog';
    formConfig.disableClose = false;
    formConfig.autoFocus = true;
    formConfig.data = '';

    const formularioCriarCargo = this.dialog.open(this.InjectDialogComponent, formConfig);

    formularioCriarCargo.afterClosed().subscribe();
  }

  public senfForm(data: FormGroup): Observable<unknown> {
    let actions = {};

    if (data.value.input_form_type === 'form_type_reservation') {
      actions = {
        emailReservationClient: this.sendReservationClient(data),
        emailReservationPousada: this.sendReservationPousada(data),
      };
    } else if (data.value.input_form_type === 'form_type_contact') {
      actions = {
        emailReservationClient: this.sendContactClient(data),
        emailReservationPousada: this.sendContactPousada(data),
      };
    } else {
      return throwError({ code: '000', message: 'Unspecified process' });
    }

    return forkJoin(actions).pipe(
      catchError((error) => {
        return throwError({ code: error.status, message: error.message });
      })
    );
  }

  private sendEmail(data: IEMailContent): Observable<unknown> {
    this.emailInSending = true;

    const emailApiURL = `${this.emailApi.emailApiUrl}/messages`;
    const emailApiKey = `Basic ${btoa('api:' + this.emailApi.emailApiKey)}`;

    const httpHeader = new HttpHeaders().set('Authorization', emailApiKey);

    const httpBody = new FormData();
    httpBody.set('from', `${data.fromName} <${data.fromEmail}>`);
    httpBody.set('to', `${data.toName} <${data.toEmail}>`);
    httpBody.set('subject', data.subejct);
    httpBody.set('h:Reply-To', data.replyTo);
    httpBody.set('html', data.content);

    /* httpBody.forEach((value, key, parent) => {
      console.log(`${parent} => ${key} : ${value}`);
    }); */

    return this.serviceRequest.post<unknown>(emailApiURL, httpBody, { headers: httpHeader }).pipe(retry(2));
  }

  private sendReservationClient(data: FormGroup): Observable<unknown> {
    let clientEmailData: IEMailContent = {
      fromName: 'Pousada Müller',
      fromEmail: this.emailApi.emailApiFrom,
      replyTo: data.value.input_reservation_mail,
      toName: data.value.input_reservation_name,
      toEmail: data.value.input_reservation_mail,
      subejct: 'Pousada Müller - Solicitação de Reserva',
      content: '',
    };

    const htmlEmailClient = `<p>Olá <span style="font-weight:bold">${clientEmailData.toName}</span></p>
    <p>Obrigado por entrar em contato conosco! </p>
    <p><span style="font-weight:bold">Não é necessário responder esse email</span>. Nós iremos verificar a disponibilidade de unidades para o período informado e entraremos em contato o quanto antes.</p>
    <p>Você já conhece a nossa <a href="http://www.facebook.com.br/hotelmuller" target="_blank">página no facebook</a>? Curtá lá e fique sabendo na hora das novidades, das promoções e dos pacotes para os feriados.</p>
    <p>Atenciosamente,<br>Hotel Müller</p>
    <br>
    <p><a href="https://www.hotelmuller.com.br" target="_blank">https://www.hotelmuller.com.br</a><br>
    <a href="http://www.facebook.com.br/hotelmuller" target="_blank">http://www.facebook.com.br/hotemuller</a></p>`;

    clientEmailData = { ...clientEmailData, content: htmlEmailClient };

    return this.sendEmail(clientEmailData);
  }

  private sendReservationPousada(data: FormGroup): Observable<unknown> {
    let pousadaDataEmail: IEMailContent = {
      fromName: data.value.input_reservation_name,
      fromEmail: data.value.input_reservation_mail,
      replyTo: data.value.input_reservation_mail,
      toName: 'Pousada Müller',
      toEmail: this.emailApi.emailApiFrom,
      subejct: `Site - Reserva - ${data.value.input_reservation_name}`,
      content: '',
    };

    const htmlEmailPousada = `<p><strong>Remetente:</strong> ${pousadaDataEmail.fromName}<[${pousadaDataEmail.fromEmail}]></p>
    <p><strong>Telefone:</strong> ${data.value.input_reservation_phone}</p>
    <p><strong>Q.Unidades:</strong> ${data.value.input_reservation_qunits}</p>
    <p><strong>Q.Pessoas:</strong> ${data.value.input_reservation_qpeoples}</p>
    <p><strong>Q.Crianças:</strong> ${data.value.input_reservation_qchildren}</p>
    <p><strong>D. Entrada:</strong> ${data.value.input_reservation_period1}</p>
    <p><strong>D. Saída:</strong> ${data.value.input_reservation_period2}</p>`;

    pousadaDataEmail = { ...pousadaDataEmail, content: htmlEmailPousada };

    return this.sendEmail(pousadaDataEmail);
  }

  private sendContactClient(data: FormGroup): Observable<unknown> {
    let clientEmailData: IEMailContent = {
      fromName: 'Pousada Müller',
      fromEmail: this.emailApi.emailApiFrom,
      replyTo: data.value.input_reservation_mail,
      toName: data.value.input_reservation_name,
      toEmail: data.value.input_reservation_mail,
      subejct: 'Pousada Müller - Solicitação de Reserva',
      content: '',
    };

    const htmlEmailClient = `<p>Olá <span style="font-weight:bold">${clientEmailData.toName}</span></p>
    <p>Obrigado por entrar em contato conosco! </p>
    <p><span style="font-weight:bold">Não é necessário responder esse email</span>. Nós iremos verificar a disponibilidade de unidades para o período informado e entraremos em contato o quanto antes.</p>
    <p>Você já conhece a nossa <a href="http://www.facebook.com.br/hotelmuller" target="_blank">página no facebook</a>? Curtá lá e fique sabendo na hora das novidades, das promoções e dos pacotes para os feriados.</p>
    <p>Atenciosamente,<br>Hotel Müller</p>
    <br>
    <p><a href="https://www.hotelmuller.com.br" target="_blank">https://www.hotelmuller.com.br</a><br>
    <a href="http://www.facebook.com.br/hotelmuller" target="_blank">http://www.facebook.com.br/hotemuller</a></p>`;

    clientEmailData = { ...clientEmailData, content: htmlEmailClient };

    return this.sendEmail(clientEmailData);
  }

  private sendContactPousada(data: FormGroup): Observable<unknown> {
    let pousadaDataEmail: IEMailContent = {
      fromName: data.value.input_reservation_name,
      fromEmail: data.value.input_reservation_mail,
      replyTo: data.value.input_reservation_mail,
      toName: 'Pousada Müller',
      toEmail: this.emailApi.emailApiFrom,
      subejct: `Site - Reserva - ${data.value.input_reservation_name}`,
      content: '',
    };

    const htmlEmailPousada = `<p><strong>Remetente:</strong> ${pousadaDataEmail.fromName}<[${pousadaDataEmail.fromEmail}]></p>
    <p><strong>Telefone:</strong> ${data.value.input_reservation_phone}</p>
    <p><strong>Q.Unidades:</strong> ${data.value.input_reservation_qunits}</p>
    <p><strong>Q.Pessoas:</strong> ${data.value.input_reservation_qpeoples}</p>
    <p><strong>Q.Crianças:</strong> ${data.value.input_reservation_qchildren}</p>
    <p><strong>D. Entrada:</strong> ${data.value.input_reservation_period1}</p>
    <p><strong>D. Saída:</strong> ${data.value.input_reservation_period2}</p>`;

    pousadaDataEmail = { ...pousadaDataEmail, content: htmlEmailPousada };

    return this.sendEmail(pousadaDataEmail);
  }
}
