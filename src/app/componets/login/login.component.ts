import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/serves/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule ,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly _AuthService = inject(AuthService)
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _ToastrService = inject(ToastrService)


 
  // عشان التنقل 
  private readonly _Router = inject(Router)



  msgError:string= "";
  isLoding:boolean = false
  myMassage:boolean = false




  loginForm: FormGroup= this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password:[null, [Validators.required, Validators.pattern(/^\w{6,}$/gm)]],
  })




  loginSubmint():void{ 
    if (this.loginForm.valid) {
      this.isLoding=true

      this._AuthService.setlonginForm(this.loginForm.value).subscribe({
        next:(res)=>{
          if (res.message=='success') {
            this.myMassage=true;
            this._ToastrService.success('welcome','FreshCart');

            localStorage.setItem('userToken', res.token );
            

            this._AuthService.saveUserData();


            console.log(this._AuthService.userData.id);
            

            

           
            


            setTimeout(() => {

              this._Router.navigate(['/home'])
            }, 1000);
            
          }
          this.isLoding=false
          // console.log(res)
        },
        error:(err:HttpErrorResponse)=>{

          // اعرض المسدج بتاعة  ايرور
          this.msgError = err.error.message 
          this.isLoding=false

          // console.log(this.msgError = err.error.message);

          
        }
      })
      
    }

    else{
      this.loginForm.setErrors({mismatch:true})
      this.loginForm.markAllAsTouched()
    }
  }



  
}
