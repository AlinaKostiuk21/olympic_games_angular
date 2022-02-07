import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "./components/index/index.component";
import {ParticipantsCreateComponent} from "./components/participants-create/participants-create.component";
import {ParticipantsReadComponent} from "./components/participants-read/participants-read.component";
import {ParticipantsUpdateComponent} from "./components/participants-update/participants-update.component";
import {ParticipantsDeleteComponent} from "./components/participants-delete/participants-delete.component";
import {ParticipantsAllComponent} from "./components/participants-all/participants-all.component";


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'all',
        component: ParticipantsAllComponent,
      },
      {
        path: 'create',
        component: ParticipantsCreateComponent,
      },
      {
        path: ':participant_id',
        children: [
          {
            path: 'read',
            component: ParticipantsReadComponent,
          },
          {
            path: 'update',
            component: ParticipantsUpdateComponent,
          },
          {
            path: 'delete',
            component: ParticipantsDeleteComponent,
          },
        ]
      },
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
