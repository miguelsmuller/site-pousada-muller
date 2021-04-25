import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-disponibilidade',
  templateUrl: './dialog-disponibilidade.component.html',
  styleUrls: ['./dialog-disponibilidade.component.scss']
})
export class DialogDisponibilidadeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogDisponibilidadeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
  }

}
