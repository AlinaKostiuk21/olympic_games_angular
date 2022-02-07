import { Component, OnInit } from '@angular/core';
import {ParticipantService} from "../../services/participants.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Participant} from "../../models/participant.model";

@Component({
  selector: 'app-participants-create',
  templateUrl: './participants-create.component.html',
  styleUrls: ['./participants-create.component.scss']
})
export class ParticipantsCreateComponent implements OnInit {

  constructor(
    private participantsService: ParticipantService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  create(participant: Participant) {
    this.participantsService.create(participant)
      .subscribe((member) => {
        if (member) {
          this.router.navigate(['../all'], { relativeTo: this.activatedRoute })
        }
      })
  }
}
