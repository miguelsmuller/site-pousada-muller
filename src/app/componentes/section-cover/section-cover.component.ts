import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DialogDisponibilidadeComponent } from '@app/componentes/dialogs/dialog-disponibilidade/dialog-disponibilidade.component';

@Component({
  selector: 'app-section-cover',
  templateUrl: './section-cover.component.html',
  styleUrls: ['./section-cover.component.scss']
})
export class SectionCoverComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialogDisponibilidade() {
    const formConfig = new MatDialogConfig();
    formConfig.panelClass = 'mat-dialog';
    formConfig.disableClose = false;
    formConfig.autoFocus = true;
    formConfig.data = '';

    const formularioCriarCargo = this.dialog.open(DialogDisponibilidadeComponent, formConfig);

    formularioCriarCargo.afterClosed().subscribe((data) => {
      //console.log(data);
    });
  }

}
