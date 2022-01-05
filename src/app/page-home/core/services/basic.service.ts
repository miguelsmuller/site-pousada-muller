import { Injectable } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class BasicService {
  constructor(private dialog: MatDialog) {}

  public openDialog(typeDialog: ComponentType<unknown>): void {
    const formConfig = new MatDialogConfig();
    formConfig.panelClass = 'mat-dialog';
    formConfig.disableClose = false;
    formConfig.autoFocus = true;
    formConfig.data = '';

    const openedDialog = this.dialog.open(typeDialog, formConfig);

    openedDialog.afterClosed().subscribe();
  }
}
