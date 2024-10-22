import { Routes } from '@angular/router';
import { UsuarioAdminRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.plist.routed.component/usuario.admin.plist.routed.component';
import { UsuarioAdminDeleteComponent } from './component/usuario/admin/plist/routed/usuario.admin.delete/usuario.admin.delete.component';
import { UsuarioAdminViewComponent } from './component/usuario/admin/plist/routed/usuario.admin.view/usuario.admin.view.component';
import { UsuarioAdminEditRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.edit.routed/usuario.admin.edit.routed.component';

export const routes: Routes = [
  { path: 'admin/usuario/plist', component: UsuarioAdminRoutedComponent },
  { path: 'admin/usuario/delete/:id', component: UsuarioAdminDeleteComponent },
  {
    path: 'admin/usuario/edit/:id',
    component: UsuarioAdminEditRoutedComponent,
  },
  { path: 'admin/usuario/view/:id', component: UsuarioAdminViewComponent },
];
