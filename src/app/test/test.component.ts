import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  

  constructor() { }
  
 
  
  
  ngOnInit(): void {
  }
 

handle(value:string){
  alert("selected option's value is "+value);
}

title = 'my-first-app';
  
todaydate = new Date(); 

jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  

months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
  'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
}
