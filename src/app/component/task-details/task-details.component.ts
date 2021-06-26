import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/task.service';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  taskDetail: Task = new Task();
  tasks! : Task[];

  getTasks(): void {
    this.taskService.getTasks().subscribe((t) => (this.tasks = t) );

  }
  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(t => this.router.navigate(['task']))
  }


  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {this.taskService.getTask(+param.id).subscribe((t) => (this.taskDetail = t))
  })
  }
}
