import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/serves/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MytranslateService } from '../../core/serves/mytranslate.service';
import { CartService } from '../../core/serves/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent implements OnInit {

  readonly _AuthService = inject(AuthService);
  readonly _MytranslateService = inject(MytranslateService);





  readonly _TranslateService = inject(TranslateService);


  // cartNuber
  readonly _CartService = inject(CartService);


  cartNumberNav:Signal<number> =computed( ()=> this._CartService.cartNumber())  

  ngOnInit(): void {

    this._CartService.getProudactCart().subscribe({
      next: (res) => {
        this._CartService.cartNumber.set(res.numOfCartItems)
      }
    })





    //  this._CartService.cartNumber.subscribe({
    //   next:(data)=>{

    //     this.cartNumberNav=data;

    //   }
    //  })
  }













  chang(lang: string): void {

    this._MytranslateService.changlang(lang)


  }






}
