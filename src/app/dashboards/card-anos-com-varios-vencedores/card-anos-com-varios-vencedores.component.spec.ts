import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardAnosComVariosVencedoresComponent} from './card-anos-com-varios-vencedores.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {FilmeService} from "../../filmes/filme.service";
import {provideHttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('CardAnosComVariosVencedoresComponent', () => {
  let component: CardAnosComVariosVencedoresComponent;
  let fixture: ComponentFixture<CardAnosComVariosVencedoresComponent>;
  let filmeService: FilmeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardAnosComVariosVencedoresComponent
      ],
      providers: [
        FilmeService, provideHttpClient(), provideHttpClientTesting()
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAnosComVariosVencedoresComponent);
    component = fixture.componentInstance;
    filmeService = TestBed.inject(FilmeService);
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve listar os anos com mais de um vencedor', (done) => {
    const mockResponse = [{ year: 1990, winnerCount: 2 }, { year: 2000, winnerCount: 3 }];
    spyOn(filmeService, 'listarAnosComMaisDeUmVencedor').and.returnValue(of(mockResponse));
    component.listarAnosComMaisDeUmVencedor();

    expect(filmeService.listarAnosComMaisDeUmVencedor).toHaveBeenCalled();
    expect(component.anoContagem).toEqual(mockResponse);
    expect(component.loading).toBeFalse();
    done();
  });
});
