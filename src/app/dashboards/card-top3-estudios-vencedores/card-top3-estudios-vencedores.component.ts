import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {SkeletonModule} from "primeng/skeleton";
import {FilmeService} from "../../filmes/filme.service";
import {finalize} from "rxjs";
import {EstudioContagem} from "../../filmes/estudio-contagem";

@Component({
  selector: 'app-card-top3-estudios-vencedores',
  standalone: true,
  imports: [
    CardModule,
    PrimeTemplate,
    TableModule,
    SkeletonModule
  ],
  templateUrl: './card-top3-estudios-vencedores.component.html',
  styleUrl: './card-top3-estudios-vencedores.component.scss'
})
export class CardTop3EstudiosVencedoresComponent implements OnInit {

  topTresEstudios: EstudioContagem[] = [];
  loading: boolean = true;

  constructor(private filmeService: FilmeService) {
  }

  ngOnInit(): void {
    this.listarTopTresEstudiosComMaisVencedores();
  }

  listarTopTresEstudiosComMaisVencedores() {
    this.filmeService.listarTopTresEstudiosComMaisVencedores()
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {
        this.topTresEstudios = res;
      });
  }

}
