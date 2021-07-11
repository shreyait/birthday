import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import { MCompany } from './Mcompany';
import { SCompany } from './Scompany';
import { MonCompany } from './moncompany';
import {SDiary} from './sdiary';
@Injectable({
  providedIn: 'root'
})
export class NameService {
  sendTimeTable(company:Company):Observable<Company>{
    return this.httpClient.post<Company>(`http://localhost/birthday/backend/timeTable.php`, company);
  }
  sendMovie(Mcompany:MCompany):Observable<MCompany>{
    return this.httpClient.post<MCompany>(`http://localhost/birthday/backend/movieTable.php`, Mcompany);
  }
  sendMonth(Moncompany:MonCompany):Observable<MonCompany>{
    return this.httpClient.post<MonCompany>(`http://localhost/birthday/backend/MonthTable.php`, Moncompany);
  }
  sendSD(sdiary:SDiary):Observable<SDiary>{
    return this.httpClient.post<SDiary>(`http://localhost/birthday/backend/SDTable.php`, sdiary);
  }
  sendSong(Scompany:SCompany):Observable<SCompany>{
    return this.httpClient.post<SCompany>(`http://localhost/birthday/backend/songTable.php`, Scompany);
  }
  constructor(private httpClient: HttpClient) { }
  get_unique_data() {
    return this.httpClient.get<Company[]>(`http://localhost/birthday/backend/getData.php`);
  }
  get_unique_dataM() {
    return this.httpClient.get<MCompany[]>(`http://localhost/birthday/backend/getDataMovie.php`);
  }
  get_unique_dataS() {
    return this.httpClient.get<SCompany[]>(`http://localhost/birthday/backend/getSongData.php`);
  }
  get_unique_dataMon() {
    return this.httpClient.get<MonCompany[]>(`http://localhost/birthday/backend/getMonthData.php`);
  }
  get_unique_dataSD() {
    return this.httpClient.get<MonCompany[]>(`http://localhost/birthday/backend/SDdata.php`);
  }
  
}
