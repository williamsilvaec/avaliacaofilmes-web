import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardsComponent} from './dashboards.component';
import {
  CardAnosComVariosVencedoresComponent
} from "./card-anos-com-varios-vencedores/card-anos-com-varios-vencedores.component";
import {
  CardTop3EstudiosVencedoresComponent
} from "./card-top3-estudios-vencedores/card-top3-estudios-vencedores.component";
import {
  CardIntervaloPremiosPorProdutorComponent
} from "./card-intervalo-premios-por-produtor/card-intervalo-premios-por-produtor.component";
import {FilmeService} from "../filmes/filme.service";
import {MessageService} from "primeng/api";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('DashboardsComponent', () => {
  let component: DashboardsComponent;
  let fixture: ComponentFixture<DashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardsComponent,
        CardAnosComVariosVencedoresComponent,
        CardTop3EstudiosVencedoresComponent,
        CardIntervaloPremiosPorProdutorComponent
      ],
      providers: [
        FilmeService,
        provideHttpClient(),
        provideHttpClientTesting(),
        MessageService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
