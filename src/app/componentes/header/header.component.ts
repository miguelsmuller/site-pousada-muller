import { EmailService } from '@app/shared/email.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public menuShow: boolean = false;

  constructor(private emailService: EmailService) {}

  toggle() {
    this.menuShow = !this.menuShow;
    console.log(this.menuShow);
  }

  openReservationDialog() {
    this.emailService.openReservationDialog();
  }
}
