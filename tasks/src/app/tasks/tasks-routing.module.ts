import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {TaskCreateComponent} from './task-create/task-create.component';
import {TaskEditComponent} from './task-edit/task-edit.component';
import {TaskViewComponent} from './task-view/task-view.component';

const routes: Routes = [
  { path: '', component: TasksListComponent },
  { path: 'create', component: TaskCreateComponent },
  { path: 'edit/:id', component: TaskEditComponent },
  { path: 'view/:id', component: TaskViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
