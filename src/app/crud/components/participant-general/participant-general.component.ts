import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Participant} from "../../models/participant.model";
import {ActivatedRoute} from "@angular/router";
import {ParticipantService} from "../../services/participants.service";

@Component({
  templateUrl: 'participant-general.component.html'
})

export abstract class ParticipantGeneralComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  participant: Participant = new Participant();
  activatedRoute: ActivatedRoute = new ActivatedRoute();
  participantService: ParticipantService = new ParticipantService();

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const participantId = params['participant_id'];
      this.getParticipantById(participantId);
    })
  }

  getParticipantById(participantId: string) {
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
