import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly _HttpClient = inject(HttpClient)


  // myHeaders:any={Token:localStorage.getItem('userToken')}



  // cartNumber :BehaviorSubject<number> =new BehaviorSubject(0)

  cartNumber:WritableSignal<number>=signal(0)


  addProudactToCart(id: string): Observable<any> {
    return this._HttpClient.post(`${enviroment.baseurl}/api/v1/cart`,
      {
        "productId": id

      }
      // ,
      // {
      //   headers:this.myHeaders  
      // }

    )
  }


  getProudactCart(): Observable<any> {
    return this._HttpClient.get(`${enviroment.baseurl}/api/v1/cart`,
      // {
      //   headers :this.myHeaders
      // }
    )
  }



  deletSpecificCartItem(id: string): Observable<any> {
    return this._HttpClient.delete(`${enviroment.baseurl}/api/v1/cart/${id}`,
      // {
      //   headers :this.myHeaders
      // }
      // ,

    )


  }




  updateCartProductQuantity(id: string, newcount: number): Observable<any> {
    return this._HttpClient.put(`${enviroment.baseurl}/api/v1/cart/${id}`,
      {
        "count": newcount

      }
      // ,
      // {
      //   headers :this.myHeaders

      // }
    )
  }



  ClearAllCart(): Observable<any> {
    return this._HttpClient.delete(`${enviroment.baseurl}/api/v1/cart`
      // ,
      // {
      //   headers :this.myHeaders
      // }
    )
  }










}


