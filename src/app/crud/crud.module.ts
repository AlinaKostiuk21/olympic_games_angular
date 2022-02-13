import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {ParticipantService} from "./services/participants.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CrudRoutingModule} from "./crud-routing.module";
import {ParticipantsCreateComponent} from './components/participants-create/participants-create.component';
import {ParticipantsDeleteComponent} from './components/participants-delete/participants-delete.component';
import {ParticipantsReadComponent} from './components/participants-read/participants-read.component';
import {ParticipantsUpdateComponent} from './components/participants-update/participants-update.component';
import {IndexComponent} from './components/index/index.component';
import {ParticipantsAllComponent} from "./components/participants-all/participants-all.component";
import {ParticipantFormComponent} from './components/participant-form/participant-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatGridListModule} from "@angular/material/grid-list";
import {DialogTextConfirmComponent} from './components/dialog-text-confirm/dialog-text-confirm.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    ParticipantsAllComponent,
    ParticipantsCreateComponent,
    ParticipantsDeleteComponent,
    ParticipantsReadComponent,
    ParticipantsUpdateComponent,
    IndexComponent,
    ParticipantFormComponent,
    DialogTextConfirmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CrudRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [
    DatePipe,
    ParticipantService
  ]
})
export class CrudModule {
}
