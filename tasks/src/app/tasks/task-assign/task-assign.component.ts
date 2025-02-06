import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../service/tasks.service';
import { UsersService } from '../../service/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignUserDto } from '../../data-types/AssignUserDto';
import { Location } from '@angular/common';

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
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
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
      const user = this.assignForm.value.selectedUser;
      const assignUser: AssignUserDto = {username: user};
      console.log(assignUser)
      this.tasksService.assignTask(this.taskId, assignUser).subscribe({
        next: () => {
          alert('Task assigned successfully!');
          this.router.navigate(['/main/tasks']);
        },
        error: (err) => {
          console.error('Error assigning task:', err);
          alert('Failed to assign task.');
        }
      });
    }
  }


  goBack(): void {
    this.location.back(); // Navigates to the previous page
  }
}
