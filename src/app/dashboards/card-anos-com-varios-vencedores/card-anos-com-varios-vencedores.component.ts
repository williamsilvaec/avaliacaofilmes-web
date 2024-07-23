import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {FilmeService} from "../../filmes/filme.service";
import {finalize} from "rxjs";
import {SkeletonModule} from "primeng/skeleton";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-card-anos-com-varios-vencedores',
  standalone: true,
  imports: [
    CardModule,
    TableModule,
    SkeletonModule,
    NgIf
  ],
  templateUrl: './card-anos-com-varios-vencedores.component.html',
  styleUrl: './card-anos-com-varios-vencedores.component.scss'
})
export class CardAnosComVariosVencedoresComponent implements OnInit {

  anoContagem: any[] = [];
  loading: boolean = true;

  constructor(private filmeService: FilmeService) {
  }

  ngOnInit(): void {
    this.listarAnosComMaisDeUmVencedor();
  }

  listarAnosComMaisDeUmVencedor() {
    this.filmeService.listarAnosComMaisDeUmVencedor()
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {
        this.anoContagem = res;
      });
  }

}
