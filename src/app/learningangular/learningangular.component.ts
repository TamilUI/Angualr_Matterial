
import { Component, Inject, OnInit } from '@angular/core';
import { __values } from 'tslib';


@Component({
  selector: 'app-learningangular',
  templateUrl: './learningangular.component.html',
  styleUrls: ['./learningangular.component.css']
})
export class LearningangularComponent implements OnInit {

  Username='';
  password='';
  email="";
  DOB='';
  SD=''
  MF=''
  SC=''
  Others=''
  hide = true;

  selecetdeports= null;

  selecetdeport=[
    {sd:'MCA',},
    {sd:'MBA'},
    {sd:'ME'},
    {sd:'M-TECH'}
  ]

  alowdepts=[
    {asd:'MCA',},
    {asd:'MBA'},
    {asd:'ME'},
    {asd:'M-TECH'} 
  ]

  selecetgender=[
    {sg:'Male',},
    {sg:'FeMale'},
    {sg:'Others'}
  ]

  selececategorys = null;
  
  selececategory =[
    {sc:'SC',},
    {sc:'ST'},
    {sc:'GM'},
    {sc:'Others'}
  ]
  
  //DOB = new Date(2020, 1, 1);

  minDate = new Date(2018, 0, 1);
  maxDate = new Date();



  // myFilter = (d: Date | null): boolean => {
  //   const day = (d || new Date()).getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }


  constructor() {
    
  }

  ngOnInit(): void {

    
  }

  UserRegister(){

    
    for (let i = 0; i < this.alowdepts.length; i++) {
     
    if(this.SD == this.alowdepts[i].asd){
      alert('this.alowdepts');
      console.log("deportment selection success: "+this.alowdepts[i].asd);
      break;
    } else {
      console.log("deportment selection failed: "+this.alowdepts[i].asd);
    }

  }

    if(this.SD == "" || this.MF == ""){
      alert('registration must be need necessary fields');
      console.log("registration must be need necessary fields " + this.SD +", "+this.MF);
    } 
    else if(this.password.length < 4 || this.Username.length < 3){
      alert('User name or password must contains atleast 4 characters');
      console.log("password must contains atleast 4 characters");
    }
    else{
      alert('register in Successfully')
      console.log("register in Successfully"+ this.SD +", "+this.MF);
    }

  }

}
