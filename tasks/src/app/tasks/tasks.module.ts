import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksListComponent} from './tasks-list/tasks-list.component';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticationInterceptor} from '../service/authentication-service.service';

@NgModule({
  declarations: [TasksListComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TasksListComponent },
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
})
export class TasksModule {}
