import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(public snackBar: MatSnackBar) { }


   //Delet Employe snackBar//
  deletEmploye(message: string) {
    this.DeletopenSnackBarWithActions(message, 'x');
  }

  //Add Employe snackBar//
  postEmployeeDetails(message: string) {
    this.AddopenSnackBarWithAction(message, 'x');
  }

//Update Employe snackBar//


  updateEmployeeDetails(message:string){
    this.UpdateopenSnackBarWithAction(message,'X');
  }



  //Login  snackBar//


  UserLogin(message:string){
    this.UserloginopenSnackBarWithAction(message,'X');
  }


   //check login snackBar//






  AddopenSnackBarWithAction(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['Success']
    });
  }

  UpdateopenSnackBarWithAction(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['update']
    });
  }


  DeletopenSnackBarWithActions(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['redNoMatch']
    });
  }



  UserloginopenSnackBarWithAction(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['Success']
    });
  }


  

  

}
