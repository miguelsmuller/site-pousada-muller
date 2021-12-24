import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Pictures } from './section-cidade.list';
import { DialogImageComponent } from '@core/components/dialog-image/dialog-image.component';

@Component({
  selector: 'app-section-cidade',
  templateUrl: './section-cidade.component.html',
  styleUrls: ['./section-cidade.component.scss'],
})
export class SectionCidadeComponent {
  public pictures = Pictures;

  constructor(private dialog: MatDialog) {}

  openVideo(): void {
    const formConfig = new MatDialogConfig();
    formConfig.panelClass = 'mat-dialog';
    formConfig.disableClose = false;
    formConfig.autoFocus = true;
    formConfig.data = { type: 'video', content: 'Cs5IOYzHuhI' };

    const formularioCriarCargo = this.dialog.open(DialogImageComponent, formConfig);

    formularioCriarCargo.afterClosed().subscribe();
  }
}
