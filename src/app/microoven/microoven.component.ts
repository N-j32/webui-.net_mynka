import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/allproducts.json";
//import microoven service and class
import { Microoven } from '../microoven';
import { MicroovenService } from '../microoven.service';

@Component({
  selector: 'app-microoven',
  templateUrl: './microoven.component.html',
  styleUrls: ['./microoven.component.css']
})
export class MicroovenComponent implements OnInit {

  micro: Microoven[]=[];
  //constructor injection of the MicroovenService
  constructor(private microservice:MicroovenService) { }

  ngOnInit(): void {
    const microObservable= this.microservice.getMicroOvenDetails();
    microObservable.subscribe((microData: Microoven[])=>{
      this.micro=microData;
    });
  }

  all:any=(allprod as any).default;
  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }

}
