import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
  standalone: false
})
export class TaskEditComponent implements OnInit {
  taskForm!: FormGroup;
  taskId!: string;
  minDate!: string;

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.minDate = new Date().toISOString().split('T')[0];

    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      dueDate: ['', [Validators.required]]
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
      console.log("fetched task" + task)
      if (task) {
        this.taskForm.patchValue({
          title: task.title,
          description: task.description,
          dueDate: task.dueDate
        });
      }
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const updatedTask = { ...this.taskForm.value, id: this.taskId };
      console.log('Updating task:', updatedTask);

      this.tasksService.updateTask(updatedTask).subscribe({
        next: () => {
          console.log('Task updated successfully!');
          alert('Task updated successfully!');
          this.router.navigate(['/main/tasks']);
        },
        error: (err) => {
          console.error('Error updating task:', err);
          alert('Failed to update task. Please try again.');
        }
      });
    }
  }
}
