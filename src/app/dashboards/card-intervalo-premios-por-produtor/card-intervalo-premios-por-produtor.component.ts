import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {ProdutorService} from "../../produtor/produtor.service";
import {IntervalosPremios} from "../../produtor/intervalos-premios";
import {finalize} from "rxjs";
import {SkeletonModule} from "primeng/skeleton";

@Component({
  selector: 'app-card-intervalo-premios-por-produtor',
  standalone: true,
  imports: [
    CardModule,
    PrimeTemplate,
    TableModule,
    SkeletonModule
  ],
  templateUrl: './card-intervalo-premios-por-produtor.component.html',
  styleUrl: './card-intervalo-premios-por-produtor.component.scss'
})
export class CardIntervaloPremiosPorProdutorComponent implements OnInit {

  intervaloPremios = new IntervalosPremios();
  loading: boolean = true;

  constructor(private produtorService: ProdutorService) {
  }

  ngOnInit(): void {
    this.listarIntervaloPremios();
  }

  listarIntervaloPremios() {
    this.produtorService.listarIntervaloPremios()
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {
        this.intervaloPremios = res;
      });
  }

}
