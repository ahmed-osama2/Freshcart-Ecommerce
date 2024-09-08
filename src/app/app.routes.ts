import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

export const routes: Routes = [
    {path:'',component:AuthLayoutComponent,canActivate:[logedGuard],children:[
        {path:'',redirectTo:'login',pathMatch:'full'},
        { path: 'login', loadComponent: () => import('./componets/login/login.component').then(m => m.LoginComponent) },
      { path: 'register', loadComponent: () => import('./componets/register/register.component').then(m => m.RegisterComponent) },
      { path: 'forgot', loadComponent: () => import('./componets/forgotpassword/forgotpassword.component').then(m => m.ForgotpasswordComponent) }

    ]},
    
    {path:'',component:BlankLayoutComponent , canActivate:[authGuard],children:[
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadComponent: () => import('./componets/home/home.component').then(m => m.HomeComponent) },
        { path: 'categories', loadComponent: () => import('./componets/categories/categories.component').then(m => m.CategoriesComponent) },
        { path: 'cart', loadComponent: () => import('./componets/cart/cart.component').then(m => m.CartComponent) },
        { path: 'brands', loadComponent: () => import('./componets/brands/brands.component').then(m => m.BrandsComponent) },
        { path: 'product', loadComponent: () => import('./componets/product/product.component').then(m => m.ProductComponent) },
        { path: 'details/:id', loadComponent: () => import('./componets/details/details.component').then(m => m.DetailsComponent) },
        { path: 'detailscat/:id', loadComponent: () => import('./componets/detaliscategories/detaliscategories.component').then(m => m.DetaliscategoriesComponent) },
        { path: 'detailsbrand/:id', loadComponent: () => import('./componets/detailsbrand/detailsbrand.component').then(m => m.DetailsbrandComponent) },
        { path: 'allorders', loadComponent: () => import('./componets/allorders/allorders.component').then(m => m.AllordersComponent) },
        { path: 'order/:id', loadComponent: () => import('./componets/orders/orders.component').then(m => m.OrdersComponent) }
      ]
    },
    { path: '**', loadComponent: () => import('./componets/notfound/notfound.component').then(m => m.NotfoundComponent) }
];
