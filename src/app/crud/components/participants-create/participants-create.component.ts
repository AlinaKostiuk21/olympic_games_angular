import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ParticipantService} from "../../services/participants.service";
import {Participant} from "../../models/participant.model";

@Component({
  selector: 'app-participants-create',
  templateUrl: './participants-create.component.html',
  styleUrls: ['./participants-create.component.scss']
})
export class ParticipantsCreateComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  constructor(
    private participantsService: ParticipantService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {}

  create(participant: Participant) {
    const subscription = this.participantsService.create(participant)
      .subscribe((member) => {
        if (member) {
          this.router.navigate(['/all'], {relativeTo: this.activatedRoute})
        }
      })
    if (subscription) {
      this.subscriptions.push(subscription);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe())
  }
}
