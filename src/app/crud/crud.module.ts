import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {ParticipantService} from "./services/participants.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CrudRoutingModule} from "./crud-routing.module";
import { ParticipantsCreateComponent } from './components/participants-create/participants-create.component';
import { ParticipantsDeleteComponent } from './components/participants-delete/participants-delete.component';
import { ParticipantsReadComponent } from './components/participants-read/participants-read.component';
import { ParticipantsUpdateComponent } from './components/participants-update/participants-update.component';
import { IndexComponent } from './components/index/index.component';
import {ParticipantsAllComponent} from "./components/participants-all/participants-all.component";
import { ParticipantFormComponent } from './components/participant-form/participant-form.component';

@NgModule({
  declarations: [
    ParticipantsAllComponent,
    ParticipantsCreateComponent,
    ParticipantsDeleteComponent,
    ParticipantsReadComponent,
    ParticipantsUpdateComponent,
    IndexComponent,
    ParticipantFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CrudRoutingModule
  ],
  providers: [
    DatePipe,
    ParticipantService
  ]
})
export class CrudModule { }
