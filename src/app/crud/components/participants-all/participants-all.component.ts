import { Component, OnInit } from '@angular/core';
import {Participant} from "../../models/participant.model";
import {ParticipantService} from "../../services/participants.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-participants-all',
  templateUrl: './participants-all.component.html',
  styleUrls: ['./participants-all.component.scss']
})
export class ParticipantsAllComponent implements OnInit {

  participants: Participant[] = [];

  constructor(
    private participantsService: ParticipantService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.participantsService.getAll()
      .subscribe((participants: Participant[]) => {
        console.log('participants___', participants);
        return this.participants = participants;
      });
  }

  delete(participantId: string) {
    this.participantsService.delete(participantId)
      .subscribe(() => this.get());
  }

  redirectToCreateForm() {
    this.router.navigate(['../create'], { relativeTo: this.activatedRoute});
  }
}
