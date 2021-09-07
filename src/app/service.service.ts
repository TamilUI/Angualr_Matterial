import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url="http://192.168.1.58/Data/api/apitest"

  constructor(private http:HttpClient) { }
 
  counter: number=100;

  Increment(){
    this.counter++;
  }
  Dcrement(){
    this.counter--;
  }
  

  
  getPosts(){

    return this.http.get(this.url);
  }


  postEmploye(data:any){
  return this.http.post<any>("http://localhost:3000/posts/", data)
  .pipe(map((res:any)=>{
  return res;
  }))
  }

  getEmploye(){
  return this.http.get<any>("http://localhost:3000/posts/")
  .pipe(map((res:any)=>{
  return res;
  }))
  }

  updatEmploye(data:any,id: number){
    return this.http.put<any>("http://localhost:3000/posts/"+id, data)
    .pipe(map((res:any)=>{
    return res;
    }))
    }

  deletEmploye(id : number){
      return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res:any)=>{
      return res;
      }))
  }

}
