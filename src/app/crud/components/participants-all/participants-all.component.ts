import { Component, OnInit } from '@angular/core';
import {Participant} from "../../models/participant.model";
import {ParticipantService} from "../../services/participants.service";

@Component({
  selector: 'app-participants-all',
  templateUrl: './participants-all.component.html',
  styleUrls: ['./participants-all.component.scss']
})
export class ParticipantsAllComponent implements OnInit {

  participants: Participant[] = [];

  constructor(private participantsService: ParticipantService) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.participantsService.getAll()
      .subscribe((participants: Participant[]) => this.participants = participants);
  }

  delete(participantId: number) {
    this.participantsService.delete(participantId)
      .subscribe(() => this.get());
  }
}
