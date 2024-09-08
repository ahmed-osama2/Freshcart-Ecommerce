import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../../core/interfaces/iproduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../core/serves/cart.service';
import { ProductService } from '../../core/serves/product.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit , OnDestroy {

  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _ProductsService = inject(ProductService )



  private readonly _CartService = inject(CartService)



  

  // { }as IProduct معناها اى عاوز الاوبجكت دة كانة كدا بتغلب على الايرور 
  // detailsProudact:IProduct = { }as IProduct 
  detailsProudact:IProduct|null =null

  imageProudact!:[];


  customOptionsImage: OwlOptions = {
    loop: true,
    rtl:true,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    // autoplay:true,
    // autoplayTimeout:5000,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left fa-xl text-main"></i>', '<i class="fa-solid fa-arrow-right fa-xl text-main"></i>'],
    items: 1,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   740: {
    //     items: 3
    //   },
    //   940: {
    //     items: 6
    //   }
    // },
    nav: true
  }


  getIdSub!:Subscription;
  GetSpecificProductSub!:Subscription;


 ngOnInit(): void {
   this.getIdSub = this._ActivatedRoute.paramMap.subscribe({
    next:(p)=>{

      let idProudct =p.get('id')

      this.GetSpecificProductSub = this._ProductsService.GetSpecificProduct(idProudct).subscribe({
        next:(res)=>{
          this.detailsProudact = res.data
          this.imageProudact = res.data.images

          // console.log( this.detailsProudact);
          


          
        },
        error:(err)=>{
          console.log(err );
          
        }
      })



      
    }
   })
 }

 addCart(id:string):void{
  this._CartService.addProudactToCart(id).subscribe({
    next:(res)=>{
      // console.log(res);

      this._CartService.cartNumber.set(res.numOfCartItems)

      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}


 ngOnDestroy(): void {

  this.getIdSub?.unsubscribe();
  this.GetSpecificProductSub?.unsubscribe()
  
  
} 


}
