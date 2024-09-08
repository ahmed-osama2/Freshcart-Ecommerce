import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandsService } from '../../core/serves/brands.service';
import { Ibrands } from '../../core/interfaces/ibrands';

@Component({
  selector: 'app-detailsbrand',
  standalone: true,
  imports: [],
  templateUrl: './detailsbrand.component.html',
  styleUrl: './detailsbrand.component.scss'
})
export class DetailsbrandComponent {

  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _BrandsService = inject(BrandsService)


  detailsBrand:Ibrands ={ }as Ibrands 


  ngOnInit(): void {
    
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
        console.log(p.get('id'))

        let idbrand =p.get('id')

        this._BrandsService.getSpecificBrand(idbrand).subscribe({
          next:(res)=>{
            console.log(res.data)
            
            this.detailsBrand=res.data
          }
        })


      }
    })
  }

}
