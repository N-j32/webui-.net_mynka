import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:UserService,private cartSvc:CartService) { }
  auth:boolean=false;
  admin:boolean=false;
  cartCount: number=0;
  //string interpolation
  title = 'BookWorm';
  //https://cdn-icons-png.flaticon.com/512/29/29302.png
  //PROPERTY BINDING
  public logo="https://www.logolynx.com/images/logolynx/aa/aa3993182ad88a047d21fbcc09b44d04.png";
  //EVENT BINDING
  onSearch()
  {
    alert("Post your queries here");
  }
  onPost()
  {
    alert("Query posted successfully");
  }
//Accessing the Search Component
  //Property
  productentered: string=' '  //Laptop

  //Event
  search_product(product_name:string):void{ //Laptop
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; //Laptop
    console.log(product_name)
  }
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    //admin
    this.authService.adminSubject.subscribe(
      adminauth =>
      {
        console.log('auth inside nav component: ' + adminauth);
        this.admin = adminauth;
      }
    );
    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartCount=response.length;
        console.log(this.cartCount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartCount=response;
        console.log(this.cartCount);
       }
     ) 
  }

}