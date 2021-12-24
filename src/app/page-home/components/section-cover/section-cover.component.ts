import { Component } from '@angular/core';
import { EmailService } from '@core/services/email.service';

@Component({
  selector: 'app-section-cover',
  templateUrl: './section-cover.component.html',
  styleUrls: ['./section-cover.component.scss'],
})
export class SectionCoverComponent {
  constructor(private emailService: EmailService) {}

  openReservationDialog(): void {
    this.emailService.openReservationDialog();
  }
}
