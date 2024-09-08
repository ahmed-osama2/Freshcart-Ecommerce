import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { eventNames } from 'process';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _HttpClient:HttpClient) { }

  // myHeaders:any={Token:localStorage.getItem('userToken')}




  cheekout(idcart:string|null,shippingDetails:object):Observable<any>{
    return this._HttpClient.post(`${enviroment.baseurl}/api/v1/orders/checkout-session/${idcart}?url=${enviroment.urlserver}`,
      {
        "shippingAddress":shippingDetails

      }
      // ,
      // {
      //   headers:this.myHeaders  
      // }
      
    )
  }
}
