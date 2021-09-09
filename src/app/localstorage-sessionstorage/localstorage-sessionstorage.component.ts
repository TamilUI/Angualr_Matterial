import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-localstorage-sessionstorage',
  templateUrl: './localstorage-sessionstorage.component.html',
  styleUrls: ['./localstorage-sessionstorage.component.css']
})
export class LocalstorageSessionstorageComponent implements OnInit {
  
  title='';
  myId:any
  myform:any
  // mydata:any;
  Username!: string;
  Password!: string;
  buttonDisabled: boolean= false


  
  constructor( public _count: ServiceService , private fb: FormBuilder) {
   this.createForm();
   }

   createForm(){
     this.myform = this.fb.group({
     Username:['', Validators.required],
     Password:['', [Validators.required,Validators.minLength(6)]]
     });
   }
 
  

  ngOnInit(): void {

    
      this.myform= new FormGroup({
      Username: new FormControl(''),
      Password: new FormControl(''),
    });
   
   
    this.display();
  }
  display(){
    this.myId = localStorage.getItem('formdata');
   
  }


  onSubmit(){
    

    localStorage.setItem('formdata', JSON.stringify(this.myform.value));
    // this.myform.reset();
   
    
  }


}
