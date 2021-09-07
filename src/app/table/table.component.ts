import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  
    names = [
  
    {Name:'Siva', Age:24, gender:'M'},
    {Name:'Ramya', Age:24, gender:'F'},
    {Name:'Dana', Age:24, gender:'M'},
    {Name:'Sangitha', Age:24, gender:'F'},
    {Name:'Kathir', Age:24, gender:'M'},
    {Name:'Rubi', Age:24, gender:'F'},
    {Name:'Kaviya', Age:24,}
  
  ];
 
  constructor() { }

  ngOnInit(): void {

    
  }

}
