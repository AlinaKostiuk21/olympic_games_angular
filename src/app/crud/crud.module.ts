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



@NgModule({
  declarations: [
    ParticipantsCreateComponent,
    ParticipantsDeleteComponent,
    ParticipantsReadComponent,
    ParticipantsUpdateComponent,
    IndexComponent
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
