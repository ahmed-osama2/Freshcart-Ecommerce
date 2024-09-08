import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/serves/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  private readonly _AuthService = inject(AuthService)
  private readonly _FormBuilder = inject(FormBuilder)
 
  // عشان التنقل 
  private readonly _Router = inject(Router)



  msgError:string= "";
  isLoding:boolean = false
  myMassage:boolean = false




  rigesterForm: FormGroup= this._FormBuilder.group({
    name:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]] ,
    email: [null, [Validators.required, Validators.email]],
    password:[null, [Validators.required, Validators.pattern(/^\w{6,}$/gm)]],
    rePassword: [null],
    phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/gm)]]
  },{validators:this.confirmpassword})



  // rigesterForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [Validators.required, Validators.pattern(/^\w{6,}$/gm)]),
  //   rePassword: new FormControl(null),
  //   phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/gm)])
  // }, this.confirmpassword )


  registerSubmint():void{ 
    if (this.rigesterForm.valid) {
      this.isLoding=true

      this._AuthService.setRegisterForm(this.rigesterForm.value).subscribe({
        next:(res)=>{
          if (res.message=='success') {
            this.myMassage=true;
            setTimeout(() => {

              this._Router.navigate(['/login'])
            }, 2000);
            
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
      this.rigesterForm.setErrors({mismatch:true})
      this.rigesterForm.markAllAsTouched()
    }
  }



  confirmpassword(g:AbstractControl){
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null
      
    }

    else{
      return  {mismatch:true}
    }
  }
  
    

}
