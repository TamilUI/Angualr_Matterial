import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sample-testing',
  templateUrl: './sample-testing.component.html',
  styleUrls: ['./sample-testing.component.css']
})
export class SampleTestingComponent implements OnInit {

  isdisabled:boolean =false;
  btn2:boolean=true;
  title1: string='praksh'
  title2: string='title'

  displayChild: boolean = false;

butonclcik1(){

this.title1=' change  title1 BRAKAS';

this.isdisabled=true
this.btn2=false
console.log('clcik1')
}

butonclcik2(){
this.title2=' change title2';
this.isdisabled=false
this.btn2=true
console.log(event)
}


toggle() {
  this.displayChild = !this.displayChild;
}

constructor() { }

  ngOnInit(): void {

//emit (1,2,3,4,5)
const source = from([1, 2, 3, 4, 5]);
//add 10 to each value
const example = source.pipe(map(val => val + 5));
//output: 11,12,13,14,15
const subscribe = example.subscribe(val => console.log(val));

}

}
