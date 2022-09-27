import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';
import { error } from '@angular/compiler/src/util';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//   constructor() { }

//   myform: FormGroup | any;
//   useremail: FormControl | any;
//   password: FormControl | any;


//   ngOnInit(): void {
//     this.useremail= new FormControl('', [Validators.required]);
//     this.password= new FormControl('',[Validators.required, Validators.pattern('[A-Za-z1-9]*'),Validators.minLength(10),Validators.maxLength(20)]);
//      this.myform=new FormGroup({
//       'useremail':this.useremail,
//       'password':this.password,
//     })
    
//   }
//   onSubmit(){
//     alert("User registered successfully");
//   }

// }

public loginForm!:FormGroup
//Authenticate user details from userapi
userapi=environment.userapi;

submitted = false;
get f() { return this.loginForm.controls; }
//constructor injection
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.validateAuth(false); //data parameter in your userservice
    this.loginForm = this.formBuilder.group({
      useremail: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
        });
        
  }
  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return ;
    }
    if ("admin@gmail.com"===this.loginForm.value.useremail && "admin123"===this.loginForm.value.password){
      
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'success',
          title: 'Login Successful'
        })
        this.loginForm.reset();
        this.router.navigate(['home'])
        this.userService.validateAdmin(true);
    
    
  }
    else{
    this.http.get<any>(this.userapi)
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.useremail === this.loginForm.value.useremail && a.password=== this.loginForm.value.password
      });
      if(user){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })

        Toast.fire({
          icon: 'success',
          title: 'Login Successful'
        })
        this.loginForm.reset();
        this.router.navigate(['home'])
        this.userService.validateAuth(true);
      }else{
        alert("user not found !!");       
        this.userService.validateAuth(false);
      }
    })
  }
}
}