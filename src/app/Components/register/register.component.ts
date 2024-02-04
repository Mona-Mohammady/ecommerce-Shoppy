import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isLoading:boolean = false;
  myErrorMsg:string ='';
  hide:boolean = true;
 


registerForm =new FormGroup({

  name: new FormControl(null,[Validators.required , Validators.minLength(3),Validators.maxLength(10) ]),
  email: new FormControl(null,[Validators.required , Validators.email ]),
  password: new FormControl(null ,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{8,16}$/) ]),
  rePassword: new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{8,16}$/)]),
  phone: new FormControl(null,[Validators.required , Validators.pattern(/^(002)?01[0125][0-9]{8}$/) ]),
   
},{validators:this.matchPassword});



matchPassword(form:any){
  let pass = form.get('password');
  let rePass = form.get('rePassword');


  if(pass?.value === rePass?.value ){
    return null;
  }else{
   return form.get('rePassword').setErrors({match:'Not Matched'});
    
  }

}

constructor(private _AuthService:AuthService , private _Router: Router){}

registerUser(data:FormGroup){
console.log(data.value);

this.isLoading = true;

this._AuthService.register(data.value).subscribe({
    next:(res)=> {
      console.log(res);
      if(res.message == "success")
      {
          this._Router.navigate(['/login']);
      }
      },
    error:(myErrors)=> { 
      
      this.isLoading = false; 
      console.log(myErrors);
      this.myErrorMsg = myErrors.error.message;

    
    },
    complete:()=> { 
      this.isLoading = false;
    },
  })
}

}



