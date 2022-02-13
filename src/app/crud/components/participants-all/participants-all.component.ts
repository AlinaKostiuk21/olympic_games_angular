import {Component, OnInit} from '@angular/core';
import {Participant} from "../../models/participant.model";
import {ParticipantService} from "../../services/participants.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogTextConfirmComponent} from "../dialog-text-confirm/dialog-text-confirm.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-participants-all',
  templateUrl: './participants-all.component.html',
  styleUrls: ['./participants-all.component.scss']
})
export class ParticipantsAllComponent implements OnInit {

  participants: Participant[] = [];

  constructor(
    public dialog: MatDialog,
    private matSnackBar: MatSnackBar,
    private participantsService: ParticipantService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.participantsService.getAll()
      .subscribe((participants: Participant[]) => {
        return this.participants = participants;
      });
  }

  delete(participantId: string) {
    this.participantsService.delete(participantId)
      .subscribe(() => this.get());
  }

  openDialog(participant: Participant) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {participant: participant.name};

    this.dialog.open(DialogTextConfirmComponent, dialogConfig).afterClosed().subscribe(result => {
      if (result) {
        this.delete(participant.id);
        this.matSnackBar.open(`Participant ${participant.name} was removed.`, undefined, {
          duration: 2000,
          horizontalPosition: "end",
          verticalPosition: "top",
        });
      }
    });
  }

  redirectToCreateForm() {
    this.router.navigate(['../create'], {relativeTo: this.activatedRoute});
  }
}
