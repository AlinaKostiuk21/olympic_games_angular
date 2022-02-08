import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {Participant} from "../../models/participant.model";
import {ParticipantService} from "../../services/participants.service";
import {ParticipantGeneralComponent} from "../participant-general/participant-general.component";


@Component({
  selector: 'app-participants-update',
  templateUrl: './participants-update.component.html',
  styleUrls: ['./participants-update.component.scss']
})

export class ParticipantsUpdateComponent extends ParticipantGeneralComponent {

  constructor(
    override activatedRoute: ActivatedRoute,
    protected router: Router,
    protected datePipe: DatePipe,
    override participantService: ParticipantService,
  ) {
    super();
  }

  updateParticipant(participant: Participant) {
    this.participantService.update(participant)
      .subscribe((member) => {
          if (member) {
            this.router.navigate(['../../all'], {relativeTo: this.activatedRoute})
          }
        }
      )
  }
}
