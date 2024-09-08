import{a as F,b as d,c as N,d as V,h as M,i as P,j as T,k as G,m as A}from"./chunk-2FGS56GA.js";import{a as b}from"./chunk-WW2XYFWP.js";import{a as B}from"./chunk-YDRRU5N7.js";import"./chunk-WXI33M2S.js";import{v as E}from"./chunk-QXTYYPBS.js";import{Ab as m,Ib as s,Jb as h,Qb as S,Ra as a,aa as p,da as y,gb as u,ib as c,mb as f,na as g,oa as v,qb as r,rb as o,sb as _,vb as x,zb as C}from"./chunk-RGB7EHB6.js";function D(i,n){if(i&1&&(r(0,"p",7),s(1),o()),i&2){let e=m(2);a(),h(e.errMsg)}}function R(i,n){if(i&1){let e=x();r(0,"form",3),C("ngSubmit",function(){g(e);let l=m();return v(l.verify_Email())}),r(1,"div")(2,"label",4),s(3," Email "),o(),_(4,"input",5),o(),r(5,"button",6),s(6,"Verify Email"),o(),u(7,D,2,1,"p",7),o()}if(i&2){let e=m();c("formGroup",e.verifyEmail),a(5),c("disabled",e.verifyEmail.invalid),a(2),f(7,e.errMsg!==""?7:-1)}}function q(i,n){if(i&1&&(r(0,"p",7),s(1),o()),i&2){let e=m(2);a(),h(e.errMsg)}}function I(i,n){if(i&1){let e=x();r(0,"form",8),C("ngSubmit",function(){g(e);let l=m();return v(l.verify_Code())}),r(1,"div")(2,"label",9),s(3," code "),o(),_(4,"input",10),o(),r(5,"button",6),s(6,"Verify Code"),o(),u(7,q,2,1,"p",7),o()}if(i&2){let e=m();c("formGroup",e.verifyCode),a(5),c("disabled",e.verifyCode.invalid),a(2),f(7,e.errMsg!==""?7:-1)}}function k(i,n){if(i&1&&(r(0,"p",7),s(1),o()),i&2){let e=m(2);a(),h(e.errMsg)}}function $(i,n){if(i&1){let e=x();r(0,"form",8),C("ngSubmit",function(){g(e);let l=m();return v(l.verify_NewPass())}),r(1,"div")(2,"label",4),s(3," Email "),o(),_(4,"input",11),o(),r(5,"div")(6,"label",12),s(7," Password "),o(),_(8,"input",13),o(),r(9,"button",6),s(10,"Verify New Password"),o(),u(11,k,2,1,"p",7),o()}if(i&2){let e=m();c("formGroup",e.verifyNewPass),a(9),c("disabled",e.verifyNewPass.invalid),a(2),f(11,e.errMsg!==""?11:-1)}}var Q=(()=>{let n=class n{constructor(){this._FormBuilder=p(G),this._AuthService=p(b),this._Router=p(E),this._ToastrService=p(B),this.step=1,this.errMsg="",this.verifyEmail=this._FormBuilder.group({email:[null,[d.required,d.email]]}),this.verifyCode=this._FormBuilder.group({resetCode:[null,[d.required,d.pattern(/^\w{6}$/)]]}),this.verifyNewPass=this._FormBuilder.group({email:[null,[d.required,d.email]],newPassword:[null,[d.required,d.pattern(/^\w{6,}$/)]]})}verify_Email(){this.verifyNewPass.get("email")?.patchValue(this.verifyEmail.get("email")?.value),this._AuthService.set_Verify_Email(this.verifyEmail.value).subscribe({next:t=>{console.log(t),t.statusMsg=="success"&&(this._ToastrService.success("Reset code sent to your email"),this.step=2,this.errMsg="")},error:t=>{console.log(t.error.message),this.errMsg=t.error.message}})}verify_Code(){this._AuthService.set_Verify_Code(this.verifyCode.value).subscribe({next:t=>{console.log(t),t.status=="Success"&&(this._ToastrService.success("Success"),this.step=3,this.errMsg="")},error:t=>{console.log(t),this.errMsg=t.error.message}})}verify_NewPass(){this._AuthService.set_NewPass(this.verifyNewPass.value).subscribe({next:t=>{console.log(t),localStorage.setItem("userToken",t.token),this._AuthService.saveUserData(),this._Router.navigate(["/home"])},error:t=>{console.log(t),this.errMsg=t.error.message}})}};n.\u0275fac=function(l){return new(l||n)},n.\u0275cmp=y({type:n,selectors:[["app-forgotpassword"]],standalone:!0,features:[S],decls:6,vars:1,consts:[[1,"w-50","m-auto"],[1,"text-center","text-main","my-3"],[1,"bg-main-light","rounded-4","shadow","p-3","my-4",3,"formGroup"],[1,"bg-main-light","rounded-4","shadow","p-3","my-4",3,"ngSubmit","formGroup"],["for","email"],["formControlName","email","id","email","type","email",1,"form-control"],[1,"btn-main","mt-2",3,"disabled"],[1,"alert","alert-danger","w-50","m-auto","text-center"],[1,"bg-main-light","rounded-4","shadow","p-3",3,"ngSubmit","formGroup"],["for","code"],["formControlName","resetCode","id","code","type","text",1,"form-control"],["readonly","","formControlName","email","id","email","type","email",1,"form-control"],["for","Password"],["formControlName","newPassword","id","Password","type","password",1,"form-control"]],template:function(l,w){l&1&&(r(0,"div",0)(1,"h1",1),s(2," Forget Password"),o(),u(3,R,8,3,"form",2)(4,I,8,3)(5,$,12,3),o()),l&2&&(a(3),f(3,w.step==1?3:w.step==2?4:w.step==3?5:-1))},dependencies:[A,M,F,N,V,P,T]});let i=n;return i})();export{Q as ForgotpasswordComponent};