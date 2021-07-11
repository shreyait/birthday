import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import {MCompany} from '../Mcompany';
import {FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies:MCompany[] = [];
  invalidMovieTable : boolean = false;
  MovieTableForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    trailer: new FormControl(''),
    link: new FormControl(''),
   }
  
  );
    constructor(private nameService: NameService,private router: Router,private http: HttpClient) {
      this.nameService.get_unique_dataM().subscribe((response:any) => {
        this.movies = response;
        return this.movies;
      });
      
     }
  
    ngOnInit(): void {}
    insertMovieData(){
      console.warn(this.MovieTableForm.value); 
      this.nameService.sendMovie(this.MovieTableForm.value).subscribe((Mcompany: MCompany)=>{
        this.invalidMovieTable = true;
      });
   }
  addMovie(newMovieId:any,newMovieName:any,newMovieTrailer: any,newMovieLink:any){
    
    var newMovie = {
      id:newMovieId,
      name: newMovieName,
      trailer: newMovieTrailer,
      link: newMovieLink
      
    };
    this.movies.push(newMovie); 
  }
  DeleteMovieFront(movie:any){
    this.movies = this.movies.filter(t => t.id !== movie.id);
  }
  
  deleteMovie(id:any){
    var myFormData = new FormData();
        myFormData.append('id', id);
      return this.http.post(`http://localhost/birthday/backend/deleteMovie.php`, myFormData).subscribe((res:any) => {
        alert("movie has been deleted successfully.");
      });
    
  }
}
