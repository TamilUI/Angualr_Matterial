import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
  country: any;
  constructor( private http: HttpClient) { }

 
getcountrys(): Observable<any>{
  const url ="https://api.covid19api.com/countries"
  return this.http.get<any>(url)
}

getcoronaRealtimedata(country:any):Observable<any>{
  const url= "https://api.covid19api.com/total/dayone/country/"+country
  return this.http.get<any>(url)
}
}
