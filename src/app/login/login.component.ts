import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarService } from '../snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  Username = '';
  Password = '';
  showWhen : boolean = true;
  // infoMessage=''
   show!: boolean;
  // showSignUp!: boolean;
  // showForgotPassword!: boolean;
  // errMsg = "";
  
  constructor(private router:Router, public snackBar: MatSnackBar, private snackbarService: SnackBarService) {}

  ngOnInit(): void {
  }

  UserLogin(){
   

    if( this.Username == "admin" && this.Password == 'admin123'){

    //  this. infoMessage = 'Registration Successful! Please Login!';
     this.snackbarService .UserLogin('Logged in Successfully');
    //  alert("Registration Successful! Please Login!")
     
    this.showWhen = true;
      console.log("Logged in Successfully");

      setTimeout(() => {
        this.router.navigate(['/lifecycle']);
      }, 3000);

   

     
    }
      else{
        this.snackbarService .UserLogin('Please Check username pasword..!');
        // alert("Please Check username pasword..!")
       console.log("Invalid email and password")
    }
    

  }




}
