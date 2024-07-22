import {Component, OnInit} from '@angular/core';
import {Filme} from "../../filmes/filme";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FilmeService} from "../../filmes/filme.service";
import {MsgToastService} from "../../shared/msg-toast-service";
import {FilmeFiltro} from "../../filmes/filme-filtro";
import {finalize} from "rxjs";
import {ButtonDirective} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {KeyFilterModule} from "primeng/keyfilter";
import {PaginatorModule} from "primeng/paginator";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-card-filmes-vencedores-por-ano',
  standalone: true,
  imports: [
    ButtonDirective,
    CardModule,
    InputTextModule,
    KeyFilterModule,
    PaginatorModule,
    PrimeTemplate,
    ReactiveFormsModule,
    TableModule
  ],
  templateUrl: './card-filmes-vencedores-por-ano.component.html',
  styleUrl: './card-filmes-vencedores-por-ano.component.scss'
})
export class CardFilmesVencedoresPorAnoComponent implements OnInit {

  filmesVencedoresPorAno: Filme[] = [];
  vencedoresPorAnoForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private filmeService: FilmeService,
    private mensagemService: MsgToastService
  ) {

  }

  ngOnInit(): void {
    this.vencedoresPorAnoForm = new FormGroup({
      ano: new FormControl(null, Validators.required)
    });


  }

  pesquisar() {
    let filtro = new FilmeFiltro();
    filtro.ano = this.vencedoresPorAnoForm.get('ano')?.value;
    filtro.vencedor = 'true';
    this.loading = true;

    setTimeout(() => {

      this.filmeService.filtrar(filtro)
        .pipe(finalize(() => this.loading = false))
        .subscribe(res => {
          this.filmesVencedoresPorAno = res.filmes;

          if (this.filmesVencedoresPorAno.length === 0) {
            this.mensagemService.info('Nenhum filme encontrado.');
          }

        });

    }, 500);
  }

}
