import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../../service/usuario.service';
import { IUsuario } from '../../../../../model/usuario.interface';
import { CommonModule } from '@angular/common';
import { IPage } from '../../../../../model/model.interface';
import { FormsModule } from '@angular/forms';
import { BotoneraService } from '../../../../../service/botonera.service';

@Component({
  selector: 'app-usuario.admin.routed',
  templateUrl: './usuario.admin.routed.component.component.html',
  styleUrls: ['./usuario.admin.routed.component.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class UsuarioAdminRoutedComponent implements OnInit {
  arrUsuarios: IUsuario[] = [];
  page: number = 0; // 0-based server count
  totalPages: number = 0;
  arrBotonera: string[] = [];
  sortField: string = '';
  sortOrder: string = '';
  itemsPerPage: number = 10;
  searchText: string = '';

  constructor(
    private oUsuarioService: UsuarioService,
    private oBotoneraService: BotoneraService
  ) {}

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.oUsuarioService
      .getPage(
        this.page,
        this.itemsPerPage,
        this.sortField,
        this.sortOrder,
        this.searchText
      )
      .subscribe({
        next: (arrUsuario: IPage<IUsuario>) => {
          this.arrUsuarios = arrUsuario.content;
          this.arrBotonera = this.oBotoneraService.getBotonera(
            this.page,
            arrUsuario.totalPages
          );
          this.totalPages = arrUsuario.totalPages;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  order(field: string) {
    if (this.sortField !== field) {
      this.sortField = field;
      this.sortOrder = 'asc';
    } else {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    }
    this.getPage();
  }

  changeItemsPerPage(items: number) {
    this.itemsPerPage = items;
    this.getPage();
  }

  editar(oUsuario: IUsuario) {
    console.log('Editar', oUsuario);
  }

  eliminar(oUsuario: IUsuario) {
    console.log('Borrar', oUsuario);
  }

  goToPage(p: number) {
    if (p) {
      this.page = p - 1;
      this.getPage();
    }
    return false;
  }

  goToNext() {
    this.page++;
    this.getPage();
    return false;
  }

  goToPrev() {
    this.page--;
    this.getPage();
    return false;
  }

  search() {
    this.page = 0;
    this.getPage();
  }
}
