import { Routes } from '@angular/router';
import { UsuarioAdminRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.plist.routed/usuario.admin.plist.routed.component';
import { UsuarioAdminDeleteRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.delete.routed/usuario.admin.delete.component';
import { UsuarioAdminViewRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.view.routed/usuario.admin.view.component';
import { UsuarioAdminEditRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.edit.routed/usuario.admin.edit.routed.component';
import { UsuarioAdminCreateRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.create.routed/usuario.admin.create.routed.component';

export const routes: Routes = [
  { path: 'admin/usuario/plist', component: UsuarioAdminRoutedComponent },
  {
    path: 'admin/usuario/delete/:id',
    component: UsuarioAdminDeleteRoutedComponent,
  },
  {
    path: 'admin/usuario/edit/:id',
    component: UsuarioAdminEditRoutedComponent,
  },
  {
    path: 'admin/usuario/view/:id',
    component: UsuarioAdminViewRoutedComponent,
  },
  { path: 'admin/usuario/new', component: UsuarioAdminCreateRoutedComponent },
];
