import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../core/serves/order.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

  private readonly  _ActivatedRoute =inject(ActivatedRoute)
  private readonly  _OrderService =inject(OrderService)



  cartId :string|null=''

  ordras:FormGroup=new FormGroup({
    details:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/gm)]),
    city:new FormControl(null,[Validators.required])

  })


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
        this.cartId= p.get('id')
        console.log(this.cartId);

        
        
      }
    })
  }


 

  ordersubmit():void{
    if (this.ordras.valid) {
      
      console.log(this.ordras.value);
      this._OrderService.cheekout(this.cartId,this.ordras.value).subscribe({
        next:(res)=>{
          console.log(res);
          if (res.status === 'success') 
            {

            window.open(res.session.url,'_self')
            

          }
          
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }
    else{
      this.ordras.markAllAsTouched()
    }
    
    
  }

}
