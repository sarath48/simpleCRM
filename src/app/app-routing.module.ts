import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule,Routes} from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoansListComponent } from './loans-list/loans-list.component';

const routes:Routes =[
  {
    path:'loans/:user',
    component:LoansComponent
  },
  {
    path:'loans/:photoId/product/:productId',
    component:LoansComponent
  },
  {path:"loans",
   component:LoansComponent
  },
  {path:"loans",
  children:[
    {
      path:'loanslist',
      component:LoansListComponent
    }
  ]
  },
  {
    path:'new-loan',
    redirectTo:'loans'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
