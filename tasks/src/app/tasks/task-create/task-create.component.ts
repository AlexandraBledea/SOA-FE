import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { TasksService } from '../../service/tasks.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {
  taskForm!: FormGroup;
  username: string;
  minDate: string;

  constructor(private formBuilder: FormBuilder, private tasksService: TasksService, private cookieService: CookieService){
    this.username = this.cookieService.get('Username');
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      dueDate: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask = this.taskForm.value;
      newTask.createdBy = this.username;
      newTask.status='TO_DO';

      this.tasksService.saveTask(newTask).subscribe({
        next: (response) => {
          alert('Task created successfully!');
          this.taskForm.reset();
        },
        error: (err) => {
          alert('Failed to create task. Please try again.');
        }
      });
    }
  }
}
