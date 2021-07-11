import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import {Company} from '../company';
import {FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
  todos:Company[] = [];
invalidTimeTable : boolean = false;
TimeTableForm = new FormGroup({
  id: new FormControl(''),
  time: new FormControl(''),
  task: new FormControl(''),
  status: new FormControl(''),
 }

);
  constructor(private nameService: NameService,private router: Router,private http: HttpClient) {
    this.nameService.get_unique_data().subscribe((response:any) => {
      this.todos = response;
      return this.todos;
    });
    
   }

  ngOnInit(): void {}
  insertData(){
    console.warn(this.TimeTableForm.value); 
    this.nameService.sendTimeTable(this.TimeTableForm.value).subscribe((company: Company)=>{
      this.invalidTimeTable = true;
    });
 }
addTodo(newTodoId:any,newTodoTime:any,newTodoTask: any,newTodoStatus:any){
  
  var newTodo = {
    id:newTodoId,
    time: newTodoTime,
    task: newTodoTask,
    status: newTodoStatus
    
  };
  this.todos.push(newTodo); 
}
DeleteTodoFront(todo:any){
  this.todos = this.todos.filter(t => t.id !== todo.id);
}

deleteTodo(id:any){
  var myFormData = new FormData();
      myFormData.append('id', id);
    return this.http.post(`http://localhost/birthday/backend/delete.php`, myFormData).subscribe((res:any) => {
      alert("task has been deleted successfully.");
    });
  
}
}
