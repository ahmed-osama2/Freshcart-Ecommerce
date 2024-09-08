import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly _HttpClient = inject(HttpClient)



  getAllProduct():Observable<any>
  {
    return this._HttpClient.get(`${enviroment.baseurl}/api/v1/products`)
  }


  GetSpecificProduct(id:string|null):Observable<any>
  {
    return this._HttpClient.get(`${enviroment.baseurl}/api/v1/products/${id}`)
  }

}
