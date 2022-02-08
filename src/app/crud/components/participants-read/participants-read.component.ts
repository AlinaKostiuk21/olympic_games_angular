import {Component, OnDestroy, OnInit} from '@angular/core';
import {ParticipantService} from "../../services/participants.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Participant} from "../../models/participant.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-participants-read',
  templateUrl: './participants-read.component.html',
  styleUrls: ['./participants-read.component.scss']
})
export class ParticipantsReadComponent implements OnInit, OnDestroy {

  participant: Participant = new Participant();
  subscriptions: Subscription[] = [];

  constructor(
    private participantService: ParticipantService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }

}
