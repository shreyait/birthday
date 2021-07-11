import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { SDiary } from '../sdiary';
import {FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-special-diary',
  templateUrl: './special-diary.component.html',
  styleUrls: ['./special-diary.component.css']
})
export class SpecialDiaryComponent implements OnInit {
  sds:SDiary[] = [];
  
  invalidSDTable : boolean = false;
  SDTableForm = new FormGroup({
    id: new FormControl(''),
    date: new FormControl(''),
    ds: new FormControl(''),
    appdev: new FormControl(''),
    taskd: new FormControl(''),
    total: new FormControl('')
   }
  
  );
  percents: any[] = [];
 
    constructor(private nameService: NameService,private router: Router,private http: HttpClient) {
      Object.assign(this.sds);
      this.nameService.get_unique_dataSD().subscribe((response:any) => {
        this.sds = response;
        return this.sds;
      });
      
     }
  
    ngOnInit(): void {
      
    }
    insertSDData(){
      console.warn(this.SDTableForm.value); 
      this.nameService.sendSD(this.SDTableForm.value).subscribe((sdiary: SDiary)=>{
        this.invalidSDTable = true;
      });
   }
  addSD(newSDId:any,newSDDate:any,newSDDs: any,newSDAppdev:any,newSDTaskd: any,newSDTotal: any){
    
    var newsd = {
      id:newSDId,
      date: newSDDate,
      ds: newSDDs,
      appdev: newSDAppdev,
      taskd:newSDTaskd,
      total:newSDTotal
      
    };
    var percent = (newSDTaskd*100)/newSDTotal;
    this.percents.push(percent);
    this.sds.push(newsd); 
  }
  DeleteSDFront(sd:any){
    this.sds = this.sds.filter(t => t.id !== sd.id);
  }
  
  deleteSD(id:any){
    var myFormData = new FormData();
        myFormData.append('id', id);
      return this.http.post(`http://localhost/birthday/backend/SDdelete.php`, myFormData).subscribe((res:any) => {
        alert("movie has been deleted successfully.");
      });
    
  }

}
