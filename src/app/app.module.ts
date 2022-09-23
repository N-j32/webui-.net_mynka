import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//accessing ngModel for 2-way binding
import { FormsModule } from '@angular/forms';
//Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';
//API
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { SquarePipe } from './square.pipe';
import { MicroovenComponent } from './microoven/microoven.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { WashingmachinedealsComponent } from './washingmachine/washingmachinedeals/washingmachinedeals.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { DealsComponent } from './deals/deals.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AmazondealsComponent } from './deals/amazondeals/amazondeals.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { RegisterComponent } from './register/register.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AvlProdComponent } from './avl-prod/avl-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardsComponent,
    SearchComponent,
    SquarePipe,
    MicroovenComponent,
    RefrigeratorComponent,
    WashingmachineComponent,
    WashingmachinedealsComponent,
    AllproductsComponent,
    DealsComponent,
    AdvertisementComponent,
    AmazondealsComponent,
    CounterComponent,
    CounterchildComponent,
    RegisterComponent,
    ProductdetailsComponent,
    LoginComponent,
    CartItemsComponent,
    AvlProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
