import {Component} from '@angular/core';
import {
  CardAnosComVariosVencedoresComponent
} from "./card-anos-com-varios-vencedores/card-anos-com-varios-vencedores.component";
import {
  CardTop3EstudiosVencedoresComponent
} from "./card-top3-estudios-vencedores/card-top3-estudios-vencedores.component";
import {
  CardIntervaloPremiosPorProdutorComponent
} from "./card-intervalo-premios-por-produtor/card-intervalo-premios-por-produtor.component";
import {
  CardFilmesVencedoresPorAnoComponent
} from "./card-filmes-vencedores-por-ano/card-filmes-vencedores-por-ano.component";

@Component({
  selector: 'app-dashboards',
  standalone: true,
  imports: [
    CardAnosComVariosVencedoresComponent,
    CardTop3EstudiosVencedoresComponent,
    CardIntervaloPremiosPorProdutorComponent,
    CardFilmesVencedoresPorAnoComponent
  ],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss'
})
export class DashboardsComponent {

}
