import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{ path: '',*/
    { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
    /*{ path: 'edit/:id', loadChildren: () => import('./student-edit/student-edit.module').then(m => m.StudentEditPageModule) },
    { path: 'list', loadChildren: () => import('./student-list/student-list.module').then(m => m.StudentListPageModule) },
    { path: 'detail', loadChildren: () => import('./student-detail/student-detail.module').then(m => m.StudentDetailPageModule) },
    /*
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
