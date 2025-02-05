import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../service/tasks.service';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-assign',
  templateUrl: './task-assign.component.html',
  styleUrls: ['./task-assign.component.scss'],
  standalone: false
})
export class TaskAssignComponent implements OnInit {
  assignForm!: FormGroup;
  users: any[] = [];
  taskId!: string;

  constructor(
    private fb: FormBuilder,
    private tasksService: TasksService,
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.assignForm = this.fb.group({
      selectedUser: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      this.taskId = params.get('id') || '';
    });

    this.loadUsers();
  }

  loadUsers(): void {
    this.usersService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  assignTask(): void {
    if (this.assignForm.valid) {
      const userId = this.assignForm.value.selectedUser;
      this.tasksService.assignTask(this.taskId, userId).subscribe({
        next: () => {
          alert('Task assigned successfully!');
        },
        error: (err) => {
          console.error('Error assigning task:', err);
          alert('Failed to assign task.');
        }
      });
    }
  }
}
