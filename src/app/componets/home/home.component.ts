import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/serves/categories.service';
import { ICategories } from '../../core/interfaces/icategories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { SplittextPipe } from '../../core/pipes/splittext.pipe';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/serves/cart.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/serves/auth.service';
import { ProductService } from '../../core/serves/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,RouterLink,CurrencyPipe,SplittextPipe,SearchPipe , FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit , OnDestroy {
  
  // خاص بالاسليدر الاول
  customOptionsMain: OwlOptions = {
    loop: true,
    rtl:true,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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

  
  
  // خاص بالاسليدر 
  customOptionsCat: OwlOptions = {
    loop: true,
    rtl:true,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }


  searchName:string=''






  private readonly _ProductService = inject(ProductService);
  private readonly _CategoriesService = inject(CategoriesService);
  private readonly _AuthService = inject(AuthService);


  // toster
  private readonly _ToastrService = inject(ToastrService);




  productList:IProduct[]=[];
  categoriesList:ICategories[]=[];


  getAllProductSub!:Subscription;
  getAllcategoriesSub!:Subscription;


  ngOnInit(): void {
   this.getAllProductSub = this._ProductService.getAllProduct().subscribe({
      next:(res)=>{
        this.productList=res.data
      },
      error:(err)=>{
        console.log(err)

      }


      
    })


    this.getAllcategoriesSub = this._CategoriesService.getAllcategories().subscribe({
      next:(res)=>{
        this.categoriesList= res.data

        // console.log(this.categoriesList= res.data)
      },
      error:(err)=>{
        console.log(err)

      }
    })
  }
  ngOnDestroy(): void {

    this.getAllProductSub?.unsubscribe()
    this.getAllcategoriesSub?.unsubscribe()
    
  } 


  // cart

  private readonly _CartService = inject(CartService);


  addCart(id:string):void{
    this._CartService.addProudactToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastrService.success('Product added to your cart')

        this._CartService.cartNumber.set(res.numOfCartItems)

        console.log(this._CartService.cartNumber);

      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

 


}


