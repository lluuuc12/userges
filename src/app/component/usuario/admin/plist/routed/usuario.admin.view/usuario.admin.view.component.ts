import { Component } from '@angular/core';
import { UsuarioService } from '../../../../../../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario.admin.delete',
  standalone: true,
  imports: [],
  templateUrl: './usuario.admin.view.component.html',
  styleUrl: './usuario.admin.view.component.css',
})
export class UsuarioAdminViewComponent {
  id: number = 0;
  nombre: string = '';
  apellido1: string = '';
  apellido2: string = '';
  email: string = '';

  constructor(
    private oUsuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.oUsuarioService.getById(this.id).subscribe((usuario) => {
      this.nombre = usuario.nombre;
      this.apellido1 = usuario.apellido1;
      this.apellido2 = usuario.apellido2;
      this.email = usuario.email;
    });
  }

  cancel(): void {
    this.router.navigate(['/admin/usuario/plist']);
  }
}
