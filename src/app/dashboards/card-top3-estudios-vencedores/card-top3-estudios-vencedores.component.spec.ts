import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardTop3EstudiosVencedoresComponent} from './card-top3-estudios-vencedores.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {FilmeService} from "../../filmes/filme.service";
import {provideHttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {EstudioContagem} from "../../filmes/estudio-contagem";

describe('CardTop3EstudiosVencedoresComponent', () => {
  let component: CardTop3EstudiosVencedoresComponent;
  let fixture: ComponentFixture<CardTop3EstudiosVencedoresComponent>;
  let filmeService: FilmeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTop3EstudiosVencedoresComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        FilmeService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTop3EstudiosVencedoresComponent);
    component = fixture.componentInstance;
    filmeService = TestBed.inject(FilmeService);
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve listar os top 3 estúdios com mais vencedores', (done) => {
    const mockResponse: EstudioContagem[] = [{name: 'Estúdio 1', winCount: 2}, {name: 'Estúdio 2', winCount: 3}];
    spyOn(filmeService, 'listarTopTresEstudiosComMaisVencedores').and.returnValue(of(mockResponse));
    component.listarTopTresEstudiosComMaisVencedores();

    expect(filmeService.listarTopTresEstudiosComMaisVencedores).toHaveBeenCalled();
    expect(component.topTresEstudios).toEqual(mockResponse);
    expect(component.loading).toBeFalse();
    done();
  });

});
