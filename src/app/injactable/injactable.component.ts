import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-injactable',
  templateUrl: './injactable.component.html',
  styleUrls: ['./injactable.component.css']
})
export class InjactableComponent implements OnInit {
 bookstatus: string='Avilable'
 butnToggle: boolean= true;



  constructor( public _count: ServiceService) { }

  ngOnInit(): void {

    setTimeout(()=>{

      this.butnToggle = false;
    }, 5000);

  }

  Increes(){
    this._count.Increment();
  }
  Dcrees(){
    this._count.Dcrement();
  }


  // property binding//

  onToggle(){
    if (this.bookstatus=='Avilable'){
       this.bookstatus='Not Avilable';
    }


    else{
      this.bookstatus='Avilable';
    }
    
  }
  




}
