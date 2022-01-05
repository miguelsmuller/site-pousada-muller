import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData } from './dialog-image.interface';

@Component({
  selector: 'app-dialog-image',
  templateUrl: './dialog-image.component.html',
  styleUrls: ['./dialog-image.component.scss'],
})
export class DialogImageComponent {
  constructor(public dialogRef: MatDialogRef<DialogImageComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
