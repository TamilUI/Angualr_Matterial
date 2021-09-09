import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
  
  constructor( private http: HttpClient) { }

 
getcountrys(): Observable<any>{
  const url ="https://api.covid19api.com/countries"
  return this.http.get<any>(url)
}

getcoronaRealtimedata(allcountry:any):Observable<any>{
  const url= "https://api.covid19api.com/total/dayone/country/"+allcountry
  return this.http.get<any>(url)
}
}
