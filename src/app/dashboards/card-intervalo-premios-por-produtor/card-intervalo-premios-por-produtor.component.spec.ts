import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardIntervaloPremiosPorProdutorComponent} from './card-intervalo-premios-por-produtor.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {ProdutorService} from "../../produtor/produtor.service";
import {provideHttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('CardIntervaloPremiosPorProdutorComponent', () => {
  let component: CardIntervaloPremiosPorProdutorComponent;
  let fixture: ComponentFixture<CardIntervaloPremiosPorProdutorComponent>;
  let produtoService: ProdutorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardIntervaloPremiosPorProdutorComponent
      ],
      providers: [
        ProdutorService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIntervaloPremiosPorProdutorComponent);
    component = fixture.componentInstance;
    produtoService = TestBed.inject(ProdutorService);
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve listar o intervalo de prêmios por produtor', (done) => {
    const mockResponse = {
      min: [{produtor: 'Produtor 1', intervalo: 1, vitoriaAnterior: 1990, vitoriaPosterior: 1991}],
      max: [{produtor: 'Produtor 2', intervalo: 5, vitoriaAnterior: 2000, vitoriaPosterior: 2005}]
    };
    spyOn(produtoService, 'listarIntervaloPremios').and.returnValue(of(mockResponse));
    component.listarIntervaloPremios();

    expect(produtoService.listarIntervaloPremios).toHaveBeenCalled();
    expect(component.intervaloPremios).toEqual(mockResponse);
    expect(component.loading).toBeFalse();
    done();
  });

});
