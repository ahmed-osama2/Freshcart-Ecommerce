import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../core/serves/cart.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/serves/auth.service';
import { CategoriesService } from '../../core/serves/categories.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { SplittextPipe } from '../../core/pipes/splittext.pipe';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductService } from '../../core/serves/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, SplittextPipe, SearchPipe, FormsModule, NgxPaginationModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {




  private readonly ProductService = inject(ProductService);
  private readonly _CategoriesService = inject(CategoriesService);
  private readonly _AuthService = inject(AuthService);


  // toster
  private readonly _ToastrService = inject(ToastrService);




  productList: IProduct[] = [];


  page: number =1
  pageSize !: number;
  numberOfPages!: number;
  nextPage: number = 0
  getAllProductSub!: Subscription;
  totalLength: any

  ngOnInit(): void {
    
    this.getAllProductSub = this.ProductService.getAllProduct().subscribe({
      
      next: (res) => {
        
        this.productList = res.data
        console.log(res.metadata);
        this.pageSize = res.metadata.limit
        this.nextPage = Number(res.metadata.nextPage)
        this.totalLength=res.metadata.numberOfPages
      },
      error: (err) => {
        console.log(err)
      }
    })

  }

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


