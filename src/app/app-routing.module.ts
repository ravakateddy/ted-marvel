import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonnagesComponent } from './list-personnages/list-personnages.component';
import { DetailPersonnageComponent } from './detail-personnage/detail-personnage.component';

const routes: Routes = [
  {path:"list", component: ListPersonnagesComponent},
  {path: "detail/:id", component: DetailPersonnageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
