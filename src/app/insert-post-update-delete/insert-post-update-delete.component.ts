import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModdel } from './Employeemodel';
import { ServiceService } from '../service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from '../snack-bar.service';
@Component({
  selector: 'app-insert-post-update-delete',
  templateUrl: './insert-post-update-delete.component.html',
  styleUrls: ['./insert-post-update-delete.component.css']
})

export class InsertPostUpdateDeleteComponent implements OnInit  {

  
  
  formValue! : FormGroup  
  employeModelobj: EmployeeModdel = new EmployeeModdel();
  employeeData: any = [];
  showadd !:boolean;
  showupdate !:boolean;
  errorMsg : String = "error";
  slice:any;
  isEmailIdAvailable: boolean = true;


  

  
constructor(private formbuilder:FormBuilder, private api: ServiceService, public snackBar: MatSnackBar, private snackbarService: SnackBarService) { }

@Input() name!: string

  ngOnInit(){
    this.formValue = this.formbuilder.group({
    firstName :[''],
    lastName : [''],
    email :[''],
    mobile:[''],
    salary:['']
    })
    this.getallemploye();
    }


      
    clickaddemployee(){
      this.formValue.reset();
      this.showadd = true;
      this.showupdate = false;
    }
    
    
    postEmployeeDetails(){
      if(this.formValue.value.firstName == null || this.formValue.value.firstName == ""){

        this.errorMsg = "First name should not be empty"
        alert(this.errorMsg);
        this.formValue.value.firstName.hasError(this.errorMsg!)
        
      }else if(this.formValue.value.lastName == null || this.formValue.value.lastName == "" ||
      this.formValue.value.email == null || this.formValue.value.email == "" || 
      this.formValue.value.mobile == null || this.formValue.value.mobile == "" || 
      this.formValue.value.salary == null || this.formValue.value.salary == ""){

        this.errorMsg = "All fileds are necessary"
        alert(this.errorMsg);
        this.formValue.value.lastName.hasError(this.errorMsg!)

      } else {
        for(let i=5; i<this.employeeData.length; i++){
          if(this.formValue.value.email == this.employeeData[i].email){
            this.isEmailIdAvailable = false
            console.log('this email it alredy avialble - '+this.isEmailIdAvailable)
            break
          }else {
            this.isEmailIdAvailable = true
            console.log('this email it not alredy avialble - '+this.isEmailIdAvailable+", chkEmail: "+this.formValue.value.email+" - "+this.employeeData[i].email)
          }
        }
        
        this.insertData(this.isEmailIdAvailable)
      }
    
      // this.api.postEmploye(this.employeModelobj)
      // .subscribe(res=>{
      //   console.log(res);
      //   alert("Employee added Successfull")
      //   let ref= document.getElementById('cancel')
      //   ref?.click();
      //   this.formValue.reset();
      //   this.getallemploye();
      // },
      // err=>{
      //   alert("All fileds are necessary");
      // })
      
    }

    insertData(isEmailAvailable: boolean){
      console.log('this email it alredy avialble -2 '+isEmailAvailable)
      if(isEmailAvailable){
        this.employeModelobj.firstName = this.formValue.value.firstName;
        this.employeModelobj.lastName = this .formValue.value.lastName;
        this.employeModelobj.email = this.formValue.value.email;
        this.employeModelobj.mobile= this.formValue.value.mobile;
        this.employeModelobj.salary= this.formValue.value.salary;

        this.api.postEmploye (this.employeModelobj)
        .subscribe(res=>{
          console.log(res);
          // alert("Employee added Successfully")
          this.snackbarService.postEmployeeDetails('Employee added Successfully..!');
          let ref= document.getElementById('cancel')
          ref?.click();
          this.formValue.reset();
          this.getallemploye();
        },
        err=>{
          alert('please contact admin');
        })
      }else {
        this.errorMsg = "Sorry!, Your email-id already exists"
        alert(this.errorMsg);
      }
    }
    
    getallemploye(){
    this.api.getEmploye()
    .subscribe(res=>{
      this.employeeData = res;
      
    })
    }



      deletEmploye(row:any){
      this.api.deletEmploye(row.id)
      .subscribe(res=>{
        this.snackbarService.deletEmploye('Employee Deleted..!');
      // alert('Employee Deleted..!')
      this.getallemploye();
    
      })
    }
    
    onEdit(emplolye : any){
    
      this.showadd = false;
      this.showupdate = true;   
      this.employeModelobj.id=emplolye.id;  
      this.formValue.controls['firstName'].setValue(emplolye.firstName);
      this.formValue.controls['lastName'].setValue(emplolye.lastName);
      this.formValue.controls['email'].setValue(emplolye.email);
      this.formValue.controls['mobile'].setValue(emplolye.mobile);
      this.formValue.controls['salary'].setValue(emplolye.salary);
    
    
    }
    
    updateEmployeeDetails(){
      this.employeModelobj.firstName = this.formValue.value.firstName;
      this.employeModelobj.lastName = this .formValue.value.lastName;
      this.employeModelobj.email = this.formValue.value.email;
      this.employeModelobj.mobile= this.formValue.value.mobile;
      this.employeModelobj.salary= this.formValue.value.salary;
      
      this.api.updatEmploye(this.employeModelobj,this.employeModelobj.id)
      .subscribe(res=>{
        this.snackbarService.updateEmployeeDetails('Updated Successfuly..!')
        // alert('Updated Successfuly..!')
        let ref= document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getallemploye();
      })
    
    }
}
