import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import {MonCompany} from '../moncompany';
import {FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-month-schedule',
  templateUrl: './month-schedule.component.html',
  styleUrls: ['./month-schedule.component.css'] 
})
export class MonthScheduleComponent implements OnInit {
  months:MonCompany[] = [];
  invalidMonthTable : boolean = false;
  MonthTableForm = new FormGroup({
    id: new FormControl(''),
    date: new FormControl(''),
    ds: new FormControl(''),
    appdev: new FormControl(''),
    task1: new FormControl(''),
    task2: new FormControl(''),
   }
  
  );
    constructor(private nameService: NameService,private router: Router,private http: HttpClient) {
      this.nameService.get_unique_dataMon().subscribe((response:any) => {
        this.months = response;
        return this.months;
      });
      
     }
  
    ngOnInit(): void {}
    insertMonthData(){
      console.warn(this.MonthTableForm.value); 
      this.nameService.sendMonth(this.MonthTableForm.value).subscribe((Moncompany: MonCompany)=>{
        this.invalidMonthTable = true;
      });
   }
  addMonth(newMonthId:any,newMonthDate:any,newMonthDs: any,newMonthAppdev:any,newMonthTask1: any,newMonthTask2: any){
    
    var newMonth = {
      id:newMonthId,
      date: newMonthDate,
      ds: newMonthDs,
      appdev: newMonthAppdev,
      task1:newMonthTask1,
      task2:newMonthTask2
      
    };
    this.months.push(newMonth); 
  }
  DeleteMonthFront(month:any){
    this.months = this.months.filter(t => t.id !== month.id);
  }
  
  deleteMonth(id:any){
    var myFormData = new FormData();
        myFormData.append('id', id);
      return this.http.post(`http://localhost/birthday/backend/deleteMonth.php`, myFormData).subscribe((res:any) => {
        alert("movie has been deleted successfully.");
      });
    
  }

}
