import {Component, ViewChild} from '@angular/core';
import {Filme} from "./filme";
import {FilmeFiltro} from "./filme-filtro";
import {FilmeService} from "./filme.service";
import {Table, TableLazyLoadEvent, TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {debounceTime, finalize, Subject} from "rxjs";
import {Button, ButtonDirective} from "primeng/button";
import {SkeletonModule} from "primeng/skeleton";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {TagModule} from "primeng/tag";
import {KeyFilterModule} from "primeng/keyfilter";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [
    TableModule,
    CardModule,
    InputTextModule,
    Button,
    ButtonDirective,
    SkeletonModule,
    DropdownModule,
    FormsModule,
    TagModule,
    KeyFilterModule,
    NgClass
  ],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss'
})
export class FilmesComponent {

  totalRegistros = 0;
  filmes: Filme[] = [];
  filtro = new FilmeFiltro();
  loading = true;
  @ViewChild('tabela') tabela!: Table;

  vencedoresOptions = [
    {label: 'Sim/Não', value: null},
    {label: 'Sim', value: true},
    {label: 'Não', value: false}
  ];

  private anoSubject: Subject<number> = new Subject();

  constructor(private filmeService: FilmeService) {
    this.anoSubject.pipe(
      debounceTime(500)
    ).subscribe(ano => {
      this.filtro.ano = ano;
      this.pesquisar();
    });
  }

  pesquisar(pagina = 0) {
    this.loading = true;
    this.filmes = [];
    this.filtro.pagina = pagina;


    this.filmeService.filtrar(this.filtro)
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {

        this.filmes = res.filmes;
        this.totalRegistros = res.totalElements;

        if (pagina === 0 && this.tabela) {
          this.tabela.first = 0;
        }

      });

  }

  aoMudarPagina(event: TableLazyLoadEvent) {
    const first = event.first || 0;
    const rows = event.rows || 1;

    const pagina = first / rows;

    if (event.sortField) {
      const order = event.sortOrder === 1 ? 'asc' : 'desc';
      this.filtro.ordenacao = `${event.sortField},${order}`;
    }

    this.pesquisar(pagina);
  }

  aoFiltrarAno(event: any) {
    const ano = event.target.value;
    this.anoSubject.next(ano);
  }

  aoFiltrarVencedor() {
    this.pesquisar();
  }

  getSeverity(status: boolean) {
    switch (status) {
      case true:
        return 'success';
      case false:
        return 'danger';
    }
  }
}
