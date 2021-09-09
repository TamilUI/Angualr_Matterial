import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../coronaservice/corona.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {

// headerimg: any='https://www.ispor.org/images/default-source/news/covid-big-but-smaller-v5.png?sfvrsn=93527de4_0'

  countrys: any;
  country:any;
  Confirmed: any;
  Recovered:any;
  Deaths:any;
  Country:any;
  Date:any;
  

  constructor(private corona:CoronaService) { }

  ngOnInit(): void {

    this.corona.getcountrys().subscribe((data)=>{
      console.log(data)
      this.countrys = data
    })

  }


  getcoronadata(){
 this.corona.getcoronaRealtimedata(this.country).subscribe((data)=>{
   console.log(data)
   var index = data.length -1
   this.Country   = data[index].Country
   this.Confirmed = data[index].Confirmed
   this.Recovered = data[index].Recovered
   this.Deaths    = data[index].Deaths
   this.Date      = data[index].Date
 })
 }

 getcountry(country:any){
 this.country = country
 }



}
