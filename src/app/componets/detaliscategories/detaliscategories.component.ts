import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../core/serves/categories.service';
import { ICategories } from '../../core/interfaces/icategories';

@Component({
  selector: 'app-detaliscategories',
  standalone: true,
  imports: [],
  templateUrl: './detaliscategories.component.html',
  styleUrl: './detaliscategories.component.scss'
})
export class DetaliscategoriesComponent implements OnInit {

  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _CategoriesService = inject(CategoriesService)

  detailsCat:ICategories = { }as ICategories 




  ngOnInit(): void {
    
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
        console.log(p.get('id'))

        let idcat =p.get('id')

        this._CategoriesService.GetSpecificCategory(idcat).subscribe({
          next:(res)=>{
            console.log(res.data)
            
            this.detailsCat=res.data
          }
        })


      }
    })
  }




}
