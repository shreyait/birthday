import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import {SCompany} from '../Scompany';
import {FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs:SCompany[] = [];
  invalidSongTable : boolean = false;
  SongTableForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    link: new FormControl(''),
   }
  
  );
    constructor(private nameService: NameService,private router: Router,private http: HttpClient) {
      this.nameService.get_unique_dataS().subscribe((response:any) => {
        this.songs = response;
        return this.songs;
      });
      
     }
  
    ngOnInit(): void {}
    insertSongData(){
      console.warn(this.SongTableForm.value); 
      this.nameService.sendSong(this.SongTableForm.value).subscribe((Scompany: SCompany)=>{
        this.invalidSongTable = true;
      });
   }
  addSong(newSongId:any,newSongName:any,newSongLink:any){
    
    var newSong = {
      id:newSongId,
      name: newSongName,
      link: newSongLink
      
    };
    this.songs.push(newSong); 
  }
  DeleteSongFront(song:any){
    this.songs = this.songs.filter(t => t.id !== song.id);
  }
  
  deleteSong(id:any){
    var myFormData = new FormData();
        myFormData.append('id', id);
      return this.http.post(`http://localhost/birthday/backend/deleteSong.php`, myFormData).subscribe((res:any) => {
        alert("song has been deleted successfully.");
      });
    
  }
}
