import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeEmpresaPage } from './home-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeEmpresaPageRoutingModule {}
