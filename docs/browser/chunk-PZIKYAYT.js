import{a as F,b as k,c as O}from"./chunk-NP2YPRDF.js";import{a as G}from"./chunk-QA54WGCQ.js";import{a as A}from"./chunk-HBEWENRH.js";import"./chunk-WXI33M2S.js";import{t as E}from"./chunk-QXTYYPBS.js";import{Ab as f,Ib as c,Jb as m,Kb as y,Na as b,Qb as w,Ra as r,Rb as T,aa as u,da as S,gb as p,ib as _,mb as v,na as h,nb as x,oa as P,ob as g,pb as C,qb as a,rb as o,sb as d,vb as D,zb as I}from"./chunk-RGB7EHB6.js";var M=()=>[1,2,3,4,5];function R(t,n){if(t&1&&(a(0,"div"),d(1,"img",14),o()),t&2){let e=f().$implicit;r(),_("src",e,b)}}function V(t,n){t&1&&p(0,R,2,1,"ng-template",5)}function j(t,n){t&1&&d(0,"i",10)}function B(t,n){t&1&&d(0,"i",11)}function z(t,n){if(t&1){let e=D();a(0,"section",0)(1,"h1",1),c(2,"details proudct :"),o(),a(3,"div",2)(4,"div",3)(5,"div")(6,"owl-carousel-o",4),g(7,V,1,0,null,5,x),o()()(),a(9,"div",6)(10,"div")(11,"h2"),c(12),o(),a(13,"p",7),c(14),o(),a(15,"h3",8),c(16),o(),a(17,"div",9)(18,"span"),c(19),o(),a(20,"div"),g(21,j,1,0,"i",10,x),p(23,B,1,0,"i",11),a(24,"span",7),c(25),o()()(),a(26,"div",0)(27,"button",12),I("click",function(){h(e);let i=f();return P(i.addCart(i.detailsProudact._id))}),c(28," +Add to cart "),a(29,"span"),d(30,"i",13),o()()()()()()()}if(t&2){let e=f();r(6),_("options",e.customOptionsImage),r(),C(e.imageProudact),r(5),m(e.detailsProudact.title),r(2),m(e.detailsProudact.description),r(2),m(e.detailsProudact.category.name),r(3),y("",e.detailsProudact.price,"EGP"),r(2),C(T(7,M).slice(0,e.detailsProudact.ratingsAverage)),r(2),v(23,e.detailsProudact.ratingsAverage%1!=0?23:-1),r(2),m(e.detailsProudact.ratingsAverage)}}var Q=(()=>{let n=class n{constructor(){this._ActivatedRoute=u(E),this._ProductsService=u(G),this._CartService=u(A),this.detailsProudact=null,this.customOptionsImage={loop:!0,rtl:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,autoplayHoverPause:!0,dots:!1,navSpeed:700,navText:['<i class="fa-solid fa-arrow-left fa-xl text-main"></i>','<i class="fa-solid fa-arrow-right fa-xl text-main"></i>'],items:1,nav:!0}}ngOnInit(){this.getIdSub=this._ActivatedRoute.paramMap.subscribe({next:l=>{let i=l.get("id");this.GetSpecificProductSub=this._ProductsService.GetSpecificProduct(i).subscribe({next:s=>{this.detailsProudact=s.data,this.imageProudact=s.data.images},error:s=>{console.log(s)}})}})}addCart(l){this._CartService.addProudactToCart(l).subscribe({next:i=>{this._CartService.cartNumber.set(i.numOfCartItems)},error:i=>{console.log(i)}})}ngOnDestroy(){this.getIdSub?.unsubscribe(),this.GetSpecificProductSub?.unsubscribe()}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=S({type:n,selectors:[["app-details"]],standalone:!0,features:[w],decls:1,vars:1,consts:[[1,"py-3"],[1,"text-main","h3"],[1,"row","product","container","m-auto","align-items-center"],[1,"col-md-3"],[3,"options"],["carouselSlide",""],[1,"col-md-9"],[1,"text-muted"],[1,"h5"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fas","fa-star","rating-color"],[1,"fa-solid","fa-star-half","rating-color"],[1,"btn","btn-main","w-100",3,"click"],[1,"fa-solid","fa-cart-shopping","fa-sm"],["alt","",1,"w-100",3,"src"]],template:function(i,s){i&1&&p(0,z,31,8,"section",0),i&2&&v(0,s.detailsProudact?0:-1)},dependencies:[O,k,F]});let t=n;return t})();export{Q as DetailsComponent};