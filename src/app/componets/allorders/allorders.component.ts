import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/serves/auth.service';
import { AllorderService } from '../../core/serves/allorder.service';
import { CartService } from '../../core/serves/cart.service';
import { Iallorder } from '../../core/interfaces/iallorder';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit {

  private readonly _AuthService = inject(AuthService)

  private readonly _AllorderService = inject(AllorderService)


  allorderlist:Iallorder[] = []



  ngOnInit(): void {
    this._AuthService.saveUserData();




    console.log(this._AuthService.userData.id);

      


    this._AllorderService.getAllorder(this._AuthService.userData.id).subscribe({

      next: (res) => {
        console.log(res)
       
        this.allorderlist=res

          
          

      }

    })


  }


}
