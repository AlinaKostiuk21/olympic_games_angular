import {Component, EventEmitter, Inject, Input, OnInit, Optional, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

interface DialogData {
  participant: string,
}

@Component({
  selector: 'app-dialog-text-confirm',
  templateUrl: './dialog-text-confirm.component.html',
  styleUrls: ['./dialog-text-confirm.component.scss']
})
export class DialogTextConfirmComponent implements OnInit {
  @Output() participantDeletionApproved = new EventEmitter<string>();

  participant: string = '';

  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<DialogTextConfirmComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public outerData: DialogData
  ) {
  }

  ngOnInit(): void {
    this.participant = this.outerData.participant;
  }

  submit() {
    this.dialogRef.close(true);
  }
}
