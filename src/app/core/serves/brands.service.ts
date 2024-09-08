import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private readonly _HttpClient = inject(HttpClient);


  getAllBrands():Observable<any>{
    return this._HttpClient.get(`${enviroment.baseurl}/api/v1/brands`)
  }


  getSpecificBrand(id:string|null):Observable<any>
  {
    return this._HttpClient.get(`${enviroment.baseurl}/api/v1/brands/${id}`)
  }



}

