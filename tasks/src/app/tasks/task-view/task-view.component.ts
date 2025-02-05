import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
  standalone: false

})
export class TaskViewComponent implements OnInit {
  taskForm!: FormGroup;
  taskId!: string;

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      dueDate: ['']
    });

    this.route.paramMap.subscribe(params => {
      this.taskId = params.get('id') || '';
      if (this.taskId) {
        this.loadTaskDetails(this.taskId);
      }
    });
  }

  loadTaskDetails(id: string): void {
    this.tasksService.getTaskById(id).subscribe(task => {
      if (task) {
        this.taskForm.patchValue({
          title: task.title,
          description: task.description,
          dueDate: task.dueDate
        });
      }
    });
  }
}
