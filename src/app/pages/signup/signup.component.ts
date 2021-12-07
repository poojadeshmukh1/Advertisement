import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AppuserService } from 'src/app/services/appuser.service';
import { AppUser } from 'src/models/AppUser';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  alert: boolean =false;

  message: string;
  msgClass;
  user: AppUser = {
    address: '',
    contactno: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  }

  constructor(private userService:AppuserService ,private snack:MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
  }

  newUser(data:AppUser){
    console.log(data);
    this.userService.registerUser(data).subscribe(
      (result)=>{
        console.log(result)
        this.message = result.message
        this.msgClass = 'alert alert-success'
        console.log(this.message)
       
      },
      (fail)=>
      console.log(fail)
      //this.message = fail.error
      
      //console.log(fail)
      //Swal.fire('Successfully done !!')
      
    )
  }
}


  /*formSubmit()
  {
      console.log(this.user);
      if(this.user.username=='' || this.user.username==null)
      {
        //alert('User is required !!')
        this.snack.open("Username is required !!",'',{
          duration:3000,
          
        });
        return;
      }

      //validate

      //addUser:userservice
      this.userService.addUser(this.user).subscribe(
        (data:any)=>{
          //success
          console.log(data);
          //alert("success");
          Swal.fire('Successfully done !!', 'User id is '+ data.id,'success');
        },
        (error)=>{
          //error
          console.log(error);
          //alert("something went wrong");
          this.snack.open("Something went wrong !!",'',{
            duration:3000,
            
          });

        }

      );

  }*/
