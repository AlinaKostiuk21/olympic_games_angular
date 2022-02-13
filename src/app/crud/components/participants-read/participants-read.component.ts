import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ParticipantGeneralComponent} from "../participant-general/participant-general.component";
import {ParticipantService} from "../../services/participants.service";

@Component({
  selector: 'app-participants-read',
  templateUrl: './participants-read.component.html',
  styleUrls: ['./participants-read.component.scss']
})

export class ParticipantsReadComponent extends ParticipantGeneralComponent {
  constructor(
    override activatedRoute: ActivatedRoute,
    protected router: Router,
    override participantService: ParticipantService,
  ) {
    super();
  }
}
