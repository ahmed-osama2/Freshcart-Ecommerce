import{a as J,b as K}from"./chunk-N3DQKUAG.js";import{a as G,b as R,c as q}from"./chunk-NP2YPRDF.js";import{a as Q}from"./chunk-QA54WGCQ.js";import{a as B,c as V,g as W,l as $}from"./chunk-2FGS56GA.js";import{a as I}from"./chunk-WW2XYFWP.js";import{a as U}from"./chunk-AMD4EM2I.js";import{a as O}from"./chunk-HBEWENRH.js";import{a as z}from"./chunk-YDRRU5N7.js";import"./chunk-WXI33M2S.js";import{i as N,w as j}from"./chunk-QXTYYPBS.js";import{Ab as C,Ib as c,Jb as d,Mb as H,Na as x,Nb as M,Ob as D,Qb as L,Ra as r,Rb as k,Sb as y,Wb as f,Yb as v,aa as u,da as b,gb as g,ib as p,mb as P,na as T,nb as E,oa as w,ob as _,pb as h,qb as i,rb as a,sb as l,vb as A,zb as F}from"./chunk-RGB7EHB6.js";var X=(e,t)=>t._id,Y=(e,t)=>t.id,Z=e=>["/detailscat",e],ee=e=>["/details",e],te=()=>[1,2,3,4,5];function ie(e,t){e&1&&l(0,"img",13)}function re(e,t){e&1&&l(0,"img",14)}function oe(e,t){e&1&&l(0,"img",15)}function ae(e,t){e&1&&l(0,"img",16)}function ne(e,t){if(e&1&&(i(0,"div",17),l(1,"img",18),i(2,"h3",19),c(3),a()()),e&2){let o=C().$implicit;p("routerLink",y(4,Z,o._id)),r(),p("src",o.image,x)("alt",o.name),r(2),d(o.name)}}function se(e,t){e&1&&g(0,ne,4,6,"ng-template",3)}function le(e,t){e&1&&l(0,"i",25)}function me(e,t){e&1&&l(0,"i",26)}function ce(e,t){if(e&1){let o=A();i(0,"div",12)(1,"div",20)(2,"div",17),l(3,"img",21),i(4,"h3",22),c(5),a(),i(6,"h4",23),c(7),f(8,"splittext"),a(),i(9,"div",24)(10,"span",23),c(11),f(12,"currency"),a(),i(13,"div"),_(14,le,1,0,"i",25,E),g(16,me,1,0,"i",26),i(17,"span",27),c(18),a()()()(),i(19,"button",28),F("click",function(){let s=T(o).$implicit,m=C();return w(m.addCart(s.id))}),c(20," Add to cart "),i(21,"span"),l(22,"i",29),a()()()()}if(e&2){let o=t.$implicit;r(2),p("routerLink",y(13,ee,o._id)),r(),p("src",o.imageCover,x),r(2),d(o.category.name),r(2),d(v(8,7,o.title,2)),r(4),d(v(12,10,o.price,"EGP")),r(3),h(k(15,te).slice(0,o.ratingsAverage)),r(2),P(16,o.ratingsAverage%1!=0?16:-1),r(2),d(o.ratingsAverage)}}var Ae=(()=>{let t=class t{constructor(){this.customOptionsMain={loop:!0,rtl:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!0},this.customOptionsCat={loop:!0,rtl:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,dots:!1,navSpeed:700,navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:6}},nav:!0},this.searchName="",this._ProductService=u(Q),this._CategoriesService=u(U),this._AuthService=u(I),this._ToastrService=u(z),this.productList=[],this.categoriesList=[],this._CartService=u(O)}ngOnInit(){this.getAllProductSub=this._ProductService.getAllProduct().subscribe({next:n=>{this.productList=n.data},error:n=>{console.log(n)}}),this.getAllcategoriesSub=this._CategoriesService.getAllcategories().subscribe({next:n=>{this.categoriesList=n.data},error:n=>{console.log(n)}})}ngOnDestroy(){this.getAllProductSub?.unsubscribe(),this.getAllcategoriesSub?.unsubscribe()}addCart(n){this._CartService.addProudactToCart(n).subscribe({next:s=>{console.log(s),this._ToastrService.success("Product added to your cart"),this._CartService.cartNumber.set(s.numOfCartItems),console.log(this._CartService.cartNumber)},error:s=>{console.log(s)}})}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=b({type:t,selectors:[["app-home"]],standalone:!0,features:[L],decls:27,vars:6,consts:[[1,"row","g-0"],[1,"col-md-9"],[3,"options"],["carouselSlide",""],[1,"col-md-3"],["height","200px","src","./assets/images/slider-image-1.jpeg","alt","",1,"w-100"],["height","200px","src","./assets/images/slider-image-2.jpeg","alt","",1,"w-100"],[1,"my2"],[1,"p-2","h4"],[1,"p-2"],["type","search","placeholder"," search By Name",1,"form-control","w-75","mx-auto","my-3","product",3,"ngModelChange","ngModel"],[1,"row","g-2"],[1,"col-md-2"],["height","400px","src","./assets/images/slide-1.jpg","alt","",1,"w-100"],["height","400px","src","./assets/images/slider-image-3.jpeg","alt","",1,"w-100"],["height","400px","src","./assets/images/blog-img-2.jpeg","alt","",1,"w-100"],["height","400px","src","./assets/images/blog-img-1.jpeg","alt","",1,"w-100"],[1,"cr",3,"routerLink"],["height","250px",1,"w-100",3,"src","alt"],[1,"text-main","h6"],[1,"p-2","product"],["alt","",1,"w-100",3,"src"],[1,"h5","text-main"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fas","fa-star","rating-color","fa-xs"],[1,"fa-solid","fa-star-half","rating-color","fa-xs"],[1,"text-muted"],[1,"btn","btn-main","w-100","my-btn",3,"click"],[1,"fa-solid","fa-cart-shopping","fa-sm"]],template:function(s,m){s&1&&(i(0,"section")(1,"div",0)(2,"div",1)(3,"div")(4,"owl-carousel-o",2),g(5,ie,1,0,"ng-template",3)(6,re,1,0,"ng-template",3)(7,oe,1,0,"ng-template",3)(8,ae,1,0,"ng-template",3),a()()(),i(9,"div",4)(10,"div"),l(11,"img",5)(12,"img",6),a()()()(),i(13,"section",7)(14,"h2",8),c(15,"Shop Popular categories:"),a(),i(16,"owl-carousel-o",2),_(17,se,1,0,null,3,X),a()(),i(19,"section")(20,"h2",9),c(21,"Popular Products:"),a(),i(22,"input",10),D("ngModelChange",function(S){return M(m.searchName,S)||(m.searchName=S),S}),a(),i(23,"div",11),_(24,ce,23,16,"div",12,Y),f(26,"search"),a()()),s&2&&(r(4),p("options",m.customOptionsMain),r(12),p("options",m.customOptionsCat),r(),h(m.categoriesList),r(5),H("ngModel",m.searchName),r(2),h(v(26,3,m.productList.slice(0,15),m.searchName)))},dependencies:[q,R,G,j,N,J,K,$,B,V,W]});let e=t;return e})();export{Ae as HomeComponent};