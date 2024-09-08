import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/serves/categories.service';
import { ICategories } from '../../core/interfaces/icategories';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit, OnDestroy {
  private readonly _CategoriesService = inject(CategoriesService);


  categoriesList:ICategories[]=[];

  getAllcategoriesSub!:Subscription;



  ngOnInit(): void {
      this.getAllcategoriesSub = this._CategoriesService.getAllcategories().subscribe({
        next:(res)=>{
          this.categoriesList= res.data
    
          // console.log(this.categoriesList= res.data)
        }

    })
  }

  ngOnDestroy(): void {

    this.getAllcategoriesSub?.unsubscribe()
    
  } 




}
