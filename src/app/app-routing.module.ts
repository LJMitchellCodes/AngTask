import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTasksComponent } from './component/display-tasks/display-tasks.component';

import { AddTaskComponent } from './component/add-task/add-task.component';
import { TaskDetailsComponent } from './component/task-details/task-details.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [

  {
    path:'',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'task',
    component: DisplayTasksComponent
  },
  {
    path: 'add',
    component: AddTaskComponent
  },
  {
    path: 'detail/:id',
    component: TaskDetailsComponent,
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
