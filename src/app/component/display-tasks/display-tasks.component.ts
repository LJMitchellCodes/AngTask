import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Task } from '../../model/task';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {

  tasks!: Task[];

  constructor(private taskService: TaskService) {

  }

  ngOnInit() {
    this.getTasks();
  }
  
  getTasks(){
    this.taskService.getTasks().subscribe((task) => (this.tasks = task));
  }
  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe((task) => this.getTasks());

  }
  
  

}
