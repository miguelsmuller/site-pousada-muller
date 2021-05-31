import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-disponibilidade',
  templateUrl: './dialog-disponibilidade.component.html',
  styleUrls: ['./dialog-disponibilidade.component.scss']
})
export class DialogDisponibilidadeComponent {
  minDate: Date;
  maxDate: Date;

  constructor(
    public dialogRef: MatDialogRef<DialogDisponibilidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    const today = new Date();
    this.minDate = today;
    this.maxDate = new Date(today.getFullYear() , today.getMonth(), today.getDate()+90);
  }
}
