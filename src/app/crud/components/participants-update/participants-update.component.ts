import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Participant, SportsType} from "../../models/participant.model";
import {FormBuilder, Validators} from "@angular/forms";
import {ParticipantService} from "../../services/participants.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-participants-update',
  templateUrl: './participants-update.component.html',
  styleUrls: ['./participants-update.component.scss']
})
export class ParticipantsUpdateComponent implements OnInit, OnDestroy {

  participant: Participant = new Participant();
  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private participantService: ParticipantService,

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const participantId = Number(params['participant_id']);
      this.getParticipantById(participantId);
    })
  }

  getParticipantById(participantId: number) {
    const subscription = this.participantService.getById(participantId)?.subscribe((member: Participant) => {
      if (!member) {
        return;
      }
      this.participant = member;
    });
    if (subscription) {
      this.subscriptions.push(subscription);
    }
  }

  updateParticipant(participant: Participant) {
    this.participantService.update(participant)
      .subscribe((member) => {
          if (member) {
            this.router.navigate(['../../all'], { relativeTo: this.activatedRoute })
          }
        }
      )
  }

  ngOnDestroy() {
  this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }
}
