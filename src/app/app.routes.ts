import { Routes } from '@angular/router';
import { UsuarioAdminRoutedComponent } from './component/usuario/admin/plist/routed/usuario.admin.plist.routed.component/usuario.admin.plist.routed.component';
import { UsuarioAdminDeleteComponent } from './component/usuario/admin/plist/routed/usuario.admin.delete/usuario.admin.delete.component';

export const routes: Routes = [
  { path: 'admin/usuario/plist', component: UsuarioAdminRoutedComponent },
  { path: 'admin/usuario/delete/:id', component: UsuarioAdminDeleteComponent },
];
