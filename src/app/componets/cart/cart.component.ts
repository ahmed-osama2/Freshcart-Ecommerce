import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { CartService } from '../../core/serves/cart.service';
import { Icart } from '../../core/serves/icart';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {


  private readonly _CartService = inject(CartService)

  private readonly _ToastrService = inject(ToastrService);




  cartDetails:Icart={} as Icart;

  ngOnInit(): void {
    this._CartService.getProudactCart().subscribe({
      next:(res)=>{
        // console.log(res.data._id);
        this.cartDetails=res.data
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })




    
  }

  // remove item

  removeItem(id:string):void{
    this._CartService.deletSpecificCartItem(id).subscribe({
      next:(res)=>{
        // console.log(res);
        this.cartDetails=res.data
        this._ToastrService.success('Product removed from your cart')

        this._CartService.cartNumber.set(res.numOfCartItems)


        
      },
      error:(err)=>{
        console.log(err);

        
      }
    })
       
  }


  // ubdet blus and muins
 ubdatcount(id:string , count:number):void{
  this._CartService.updateCartProductQuantity(id,count).subscribe({

    next:(res)=>{
      // console.log(res);
      this.cartDetails=res.data

      this._CartService.cartNumber.set(res.numOfCartItems)


    
    },
    error:(err)=>{
      console.log(err);
      
    }

  })
 }

 // clar all cart


 clearCart():void{
  this._CartService.ClearAllCart().subscribe({
    
    next:(res)=>{
      console.log(res); 
      if (res.message== 'success') {

        this.cartDetails= {} as Icart;

        this._CartService.cartNumber.set(0)

        
      }

    
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
 }
 
 

 cartNumberNav:Signal<number> =computed( ()=> this._CartService.cartNumber())  

 




}
