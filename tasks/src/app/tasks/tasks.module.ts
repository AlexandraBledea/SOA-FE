import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import {TasksRoutingModule} from './tasks-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { TaskAssignComponent } from './task-assign/task-assign.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [TasksListComponent, TaskAssignComponent, TaskViewComponent, TaskEditComponent, TaskCreateComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    NavbarComponent,
  ],
  providers: [
  ],
})
export class TasksModule {}
