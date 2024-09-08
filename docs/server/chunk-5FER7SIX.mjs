import './polyfills.server.mjs';
import{a as F}from"./chunk-4XATVAYT.mjs";import{a as $}from"./chunk-DT7VC5PF.mjs";import"./chunk-GTSSCL6B.mjs";import"./chunk-2YB4PSYQ.mjs";import{I as V,l as P}from"./chunk-CCZ5EHHU.mjs";import{Hb as s,Ib as h,Jb as S,Ma as E,Pb as N,Qa as l,Rb as D,Vb as g,Xb as w,Y as f,aa as k,fb as C,hb as v,ka as u,la as p,lb as x,nb as y,ob as T,pb as c,qb as a,rb as d,rc as I,ub as b,yb as _,zb as m}from"./chunk-TWUG5E64.mjs";import"./chunk-VVCT4QZE.mjs";var O=(i,o)=>o.product._id,j=i=>["/order",i];function L(i,o){if(i&1){let n=b();c(0,"button",7),_("click",function(){u(n);let t=m();return p(t.clearCart())}),s(1,"Claer Cart"),a()}}function q(i,o){if(i&1&&(c(0,"p",4),s(1),g(2,"currency"),a()),i&2){let n=m();l(),S("totalCartPrice : ",w(2,1,n.cartDetails.totalCartPrice,"EGP")," ")}}function B(i,o){if(i&1){let n=b();c(0,"div",5)(1,"div",8)(2,"div"),d(3,"img",9),a()(),c(4,"div",10)(5,"div")(6,"h3",11),s(7),a(),c(8,"p",12),s(9),g(10,"currency"),a(),c(11,"button",13),_("click",function(){let t=u(n).$implicit,r=m();return p(r.removeItem(t.product._id))}),d(12,"i",14),s(13," Remove"),a()(),c(14,"div")(15,"span",15),_("click",function(){let t=u(n).$implicit,r=m();return p(r.ubdatcount(t.product.id,t.count+1))}),d(16,"i",16),a(),c(17,"span",17),s(18),a(),c(19,"span",15),_("click",function(){let t=u(n).$implicit,r=m();return p(r.ubdatcount(t.product.id,t.count-1))}),d(20,"i",18),a()()()()}if(i&2){let n=o.$implicit;l(3),v("src",n.product.imageCover,E)("alt",n.product.title),l(4),h(n.product.title),l(2),S("Price : ",w(10,5,n.price,"EGP"),""),l(9),h(n.count)}}function G(i,o){if(i&1&&(c(0,"button",6),s(1," Online Payment "),d(2,"img",19),a()),i&2){let n=m();v("routerLink",D(1,j,n.cartDetails._id))}}var J=(()=>{let o=class o{constructor(){this._CartService=f(F),this._ToastrService=f($),this.cartDetails={},this.cartNumberNav=I(()=>this._CartService.cartNumber())}ngOnInit(){this._CartService.getProudactCart().subscribe({next:e=>{this.cartDetails=e.data},error:e=>{console.log(e)}})}removeItem(e){this._CartService.deletSpecificCartItem(e).subscribe({next:t=>{this.cartDetails=t.data,this._ToastrService.success("Product removed from your cart"),this._CartService.cartNumber.set(t.numOfCartItems)},error:t=>{console.log(t)}})}ubdatcount(e,t){this._CartService.updateCartProductQuantity(e,t).subscribe({next:r=>{this.cartDetails=r.data,this._CartService.cartNumber.set(r.numOfCartItems)},error:r=>{console.log(r)}})}clearCart(){this._CartService.ClearAllCart().subscribe({next:e=>{console.log(e),e.message=="success"&&(this.cartDetails={},this._CartService.cartNumber.set(0))},error:e=>{console.log(e)}})}};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=k({type:o,selectors:[["app-cart"]],standalone:!0,features:[N],decls:9,vars:3,consts:[[1,"bg-main-light","rounded-4","shadow","p-4","my-2","container"],[1,"d-flex","justify-content-between","align-items-center"],[1,"h3"],[1,"btn","btn-outline-danger","btn-sm"],[1,"text-main"],[1,"row","mb-1","border"],[1,"btn-main",3,"routerLink"],[1,"btn","btn-outline-danger","btn-sm",3,"click"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h5","m-0"],[1,"text-main","m-0"],[1,"btn",3,"click"],[1,"fa-solid","fa-trash","text-main"],[3,"click"],[1,"fa-solid","fa-square-plus","fa-xl","cr","text-main"],[1,"mx-2"],[1,"fa-solid","fa-square-minus","fa-xl","cr","text-main"],["src","./assets/images/mastercard.webp","width","30px","alt",""]],template:function(t,r){t&1&&(c(0,"section",0)(1,"div",1)(2,"h1",2),s(3,"Shop cart :"),a(),C(4,L,2,0,"button",3),a(),C(5,q,3,4,"p",4),y(6,B,21,8,"div",5,O),C(8,G,3,3,"button",6),a()),t&2&&(l(4),x(4,r.cartNumberNav()!=0?4:-1),l(),x(5,r.cartNumberNav()!=0?5:-1),l(),T(r.cartDetails.products),l(2),x(8,r.cartNumberNav()!=0?8:-1))},dependencies:[P,V]});let i=o;return i})();export{J as CartComponent};
