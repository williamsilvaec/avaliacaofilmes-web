import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardIntervaloPremiosPorProdutorComponent} from './card-intervalo-premios-por-produtor.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {FilmeService} from "../../filmes/filme.service";

describe('CardIntervaloPremiosPorProdutorComponent', () => {
  let component: CardIntervaloPremiosPorProdutorComponent;
  let fixture: ComponentFixture<CardIntervaloPremiosPorProdutorComponent>;
  let filmeService: FilmeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardIntervaloPremiosPorProdutorComponent
      ],
      providers: [
        FilmeService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIntervaloPremiosPorProdutorComponent);
    component = fixture.componentInstance;
    filmeService = TestBed.inject(FilmeService);
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve listar o intervalo de prêmios por produtor', (done) => {
    const mockResponse = {
      min: [{producer: 'Produtor 1', interval: 1, previousWin: 1990, followingWin: 1991}],
      max: [{producer: 'Produtor 2', interval: 5, previousWin: 2000, followingWin: 2005}]
    };
    spyOn(filmeService, 'listarIntervaloPremios').and.returnValue(of(mockResponse));
    component.listarIntervaloPremios();

    expect(filmeService.listarIntervaloPremios).toHaveBeenCalled();
    expect(component.intervaloPremios).toEqual(mockResponse);
    expect(component.loading).toBeFalse();
    done();
  });

});
