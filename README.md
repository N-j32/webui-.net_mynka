# MyTeAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
1) src -> app -> default component -> 4 files
COMPONENTS:
-----------
->HTML - DESIGN THE STRUCTURE
->CSS - STYLING
->TYPESCRIPT - PROGRAMMING LOGIC - COMPONENT.TS
->TESTING - TEST CASES - COMPONENT.SPEC.TS

COMMON files:
--------------
app.routing.module.ts - Routing/Navigation Configuration between pages/COMPONENTS
app.module.ts - basic packages for angular are present here and the external packages
                which will be included in the project

eg: C++ -> header files -> iostream.h ->input/ouput

2) assets -> media files

3) environments -> API - Application prg interface - accessing API - configure the URL

4)favicon.ico

5)index.html -> startup page

6)main.ts

7)polyfills.ts ->browser settings

8)styles.css -> global CSS

9)test.ts -> Global Test cases

10)browserslistrc -> browser info

11)gitignore -> ignore specific files while pushing code to Github

12)angular.json -> project information

13)karma.conf.js -> testing information

14)pakage.json -> installed package details

15)Readme.md -> Installation and Project Information 

16)tsconfig.json
---------------------------------------------
DATA BINDING -> 2-WAY
TYPES OF DATA BINDING:
1. STRING INTERPOLATION
2. PROPERTY BINDING
3. EVENT BINDING
4. TWO-WAY BINDING
----------------------------------------------

Create a component in angular
-> ng g c Nav
-> ng g c Home
-> ng g c Search

Rendering of the components:
index.html <- <app-root> <- <app-nav> and <app-home>

------------------------------------------------

ROUTING - Navigation between components
Configure routing - app-routing.module.ts
Routing - app.component -> <router-outlet></router-outlet>

------------------------------------------------------------
PARENT-CHILD COMPONENT
------------------------
We are going to work with nav component and search component

-------------------------------------------------------------
Directives
------------
Loop -> array -> for 
condition -> if, switch

*ngFor - looping - .html
*ngIf - condition
*ngSwitch - condition
ngStyle - Styling
ngClass - Access styles and bind with ngClass

Pipes
-------
-> TRANSFORMATION OF THE CONTENT IN YOUR component.html
(eg) lowercase,uppercase
-> 2types: pre-defined and custom

CUSTOM Pipes
-------------
ng g pipe square
---------------
JSON FILE ->JAVASCRIPT OBJECT NOTATION - DATA TRANSFER - key-value pair
XML FILE ->eXtensible Markup language - <> format

NESTED COMPONENT
-------------------
ng g c washingmachine
ng g c washingmachine/washingmachinedeals

-----------------------
MICROOVEN COMPONENT
-------------------
class - ng g class microoven
service - ng g service microoven

consume the serive in our component:
1. Go to microoven component
2. import microoven.ts and microoven.service.ts

------------------------------
REACTIVE FORMS - VALIDATION CLASSES

ng g c register

->ReactiveFormsModule

Fields for registration:
-------------------------
username
useremail
password
mobile

---------------------------------
Authentication and Route Guards
---------------------------------
1. ng g guard auth - CanActivate
2. ng g s user
3. login component -> userservice and environment(userapi) -> data(true/false)
4. nav component -> data(true/false) -> show/hide the Nav links

-------------------------------------------
ADD TO CART
------------
ng g class cartitem - properties of the products
ng g s cart - cart service (addtocart,removeitem)
ng g c cartitems - import(cartitem and cartservice)
deals component - add to cart button
nav component - cart count - font-awesome icon - click - navigate - cartitems component
