import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeEmpresaPageRoutingModule } from './home-empresa-routing.module';

import { HomeEmpresaPage } from './home-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEmpresaPageRoutingModule
  ],
  declarations: [HomeEmpresaPage]
})
export class HomeEmpresaPageModule {}
