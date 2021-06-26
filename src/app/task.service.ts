import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './model/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskUrl = 'http://localhost:3000/task'

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl)
  } 
  getTask(id: number): Observable<Task> {

    return this.http.get<Task>(this.taskUrl +'/' + id);
  }
  deleteTask(id: number): Observable<Task>{
    return this.http.delete<Task>(this.taskUrl + '/'  + id);
  }
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.taskUrl, task);
  }
  
  constructor(private http: HttpClient) { }
}
