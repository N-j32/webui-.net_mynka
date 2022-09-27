import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { MicroovenComponent } from './microoven/microoven.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';
import { RegisterComponent } from './register/register.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AvlProdComponent } from './avl-prod/avl-prod.component';
import { BagComponent } from './bag/bag.component';
import { WcatComponent } from './wcat/wcat.component';
import { ContactComponent } from './contact/contact.component';
//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'fridge',component:RefrigeratorComponent},
  {path:'washingmach',component:WashingmachineComponent},
  {path:'micro',component:MicroovenComponent},
  {path:'deals',component:AmazondealsComponent},
  {path:'register',component:RegisterComponent},
  {path:'prod_details',component:ProductdetailsComponent},
  {path:'cartitem',component:CartItemsComponent},
  {path:'avl_prod',component:AvlProdComponent},
  {path:'bag',component:BagComponent},
  {path:'wcat',component:WcatComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
