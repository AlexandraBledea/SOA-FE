import {Component} from '@angular/core';
import {TaskDto} from '../../data-types/TaskDto';
import {TasksService} from '../../service/tasks.service';


const status = {
  TO_DO: "Todo",
  IN_PROGRESS: "In progress",
  DONE: "Done"
}

@Component({
  selector: 'app-tasks-list',
  standalone: false,

  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {

  tasks: TaskDto[] = [];

  constructor(private taskService: TasksService) {
    this.fetchAllTasks();
  }

  fetchAllTasks() {
    this.taskService.getAllTasks().subscribe(tasks => {
        this.tasks = [ ...tasks, ...tasks];
      }
    )
  }

  getStatusValue(key: string) {
    return status[key as keyof typeof status] || "Unknown Status";
  }

}
