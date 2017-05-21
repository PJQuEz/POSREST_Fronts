import { InputDialogComponent } from './../dialog/input-dialog/input-dialog.component';
import { MdDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(InputDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
