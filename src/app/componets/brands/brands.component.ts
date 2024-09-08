import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../core/serves/brands.service';
import { Ibrands } from '../../core/interfaces/ibrands';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [NgxPaginationModule,RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {

  private readonly _BrandsService = inject(BrandsService)

  brandsList:Ibrands[]=[]

  page: number =1



  ngOnInit(): void {
    this._BrandsService.getAllBrands().subscribe({
      next: (res) => {
        console.log(res.data);
        
        
        this.brandsList = res.data
        // console.log(res.metadata);
        // this.pageSize = res.metadata.limit
        // this.nextPage = Number(res.metadata.nextPage)
        // this.totalLength=res.metadata.numberOfPages
      },
    })


  }
}






