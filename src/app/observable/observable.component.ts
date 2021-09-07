import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {




  time = new Date();
  rxTime = new Date();


    myObs$ = new Observable(observer => {
    console.log('Observable starts');
    observer.next('1');
    observer.next('2');
    observer.next('3');
    
    observer.error('error');

    // setInterval(()=>{
    //   this.time = new Date();
    //   console.log(this.time);
     
    // },100);
    
   
    setTimeout(() => {
      
      observer.next('4');
     
    }, 3000);
    
    observer.next('5');
    console.log('Observable ented');
  });

  constructor() { }

  ngOnInit(): void {


    


   this .myObs$.subscribe(
    val =>{
      console.log(val);
    },

    error =>{
    console.log('error');

    },

    ()=>{
      console.log('Completed');
    }


   );
  
  }

}
