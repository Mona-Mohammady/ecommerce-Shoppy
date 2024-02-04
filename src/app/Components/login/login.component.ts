import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  hide:boolean=true;

  isLoading:boolean = false;
  myErrorMsg:string ='';

loginForm =new FormGroup({

 
  email: new FormControl(null,[Validators.required , Validators.email ]),
  password: new FormControl(null ,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{8,16}$/) ]),
  
});

constructor(private _AuthService:AuthService , private _Router: Router){}

loginUser(data:FormGroup){
console.log(data.value);

this.isLoading = true;

this._AuthService.login(data.value).subscribe({
    next:(res)=> {
      console.log(res);
      if(res.message == "success")
      {
        localStorage.setItem('userToken', res.token)
          this._Router.navigate(['/home']);
          this._AuthService.userData();

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
  })}
}
