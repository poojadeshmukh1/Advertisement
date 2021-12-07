import { Component, OnInit } from '@angular/core';
import { jsonpFactory } from '@angular/http/src/http_module';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message:string=null;
   email: string;
  password:string;

 constructor(
    private router: Router,
    private route:ActivatedRoute,
    private authenticationService:AuthenticationService
  ) { 
    console.log(this.email)
    console.log(this.password)
  }


 signIn(credentials){
  /*  console.log(credentials)
    
    this.route.paramMap.subscribe(
      (params)=>{
        this.email=params.get('email')
        console.log(this.email);
        this.password = params.get('password')
        console.log(this.password);*/
    
    this.authenticationService.login(credentials)
    .subscribe(
      (result) =>{
    this.router.navigate(['userhome']);
      this.message= result.response
      this.route[''];
      console.log(this.message)
    },
      fail=>{ 
      this.message= fail.error.errorMessage;     
    }
    );
  }
}

