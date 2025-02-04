import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [TasksListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TasksListComponent },
    ]),
  ],
})
export class TasksModule {}
