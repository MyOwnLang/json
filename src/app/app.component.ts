import { Component } from '@angular/core';
import  data from './sample.json'


interface document {
  name:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'jsonapp';
  //const res = data;
 // result: document[];
  //result:string="";
  //result = data.Document[0].Organization["@Author"];
  result = data.Document[0].Dates.Date;
  //console.log(result:any);
  constructor(){
    console.log(this.result);
    
  }
  
}
