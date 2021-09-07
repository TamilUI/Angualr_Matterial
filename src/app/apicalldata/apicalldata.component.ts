import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';




@Component({
  selector: 'app-apicalldata',
  templateUrl: './apicalldata.component.html',
  styleUrls: ['./apicalldata.component.css']
})
export class ApicalldataComponent implements OnInit {
  data:any;
  constructor(private postData:ServiceService){

  }

  ngOnInit(){
this.postData.getPosts().subscribe((result)=>{
console.warn("result", result)
this.data=result
  })

}
}
