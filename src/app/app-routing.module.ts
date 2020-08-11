import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegesInIndiaComponent } from './colleges-in-india/colleges-in-india.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'colleges-in-india'
  },
  {
    path: 'colleges-in-india',
    component: CollegesInIndiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
