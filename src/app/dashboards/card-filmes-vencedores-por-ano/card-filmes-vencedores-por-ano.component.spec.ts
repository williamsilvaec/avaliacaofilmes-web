import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardFilmesVencedoresPorAnoComponent} from './card-filmes-vencedores-por-ano.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {FilmeService} from "../../filmes/filme.service";
import {MsgToastService} from "../../shared/msg-toast-service";
import {MessageService} from "primeng/api";
import {provideHttpClient} from "@angular/common/http";
import {Filme} from "../../filmes/filme";
import {of} from "rxjs";

describe('CardFilmesVencedoresPorAnoComponent', () => {
  let component: CardFilmesVencedoresPorAnoComponent;
  let fixture: ComponentFixture<CardFilmesVencedoresPorAnoComponent>;
  let filmeService: FilmeService;
  let msgToastService: MsgToastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardFilmesVencedoresPorAnoComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        FilmeService,
        MsgToastService,
        MessageService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilmesVencedoresPorAnoComponent);
    component = fixture.componentInstance;
    filmeService = TestBed.inject(FilmeService);
    msgToastService = TestBed.inject(MsgToastService);
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve pesquisar e atualizar filmesVencedoresPorAno corretamente', (done) => {
    const mockFilmes: Filme[] = [
      {id: 1, ano: 2020, titulo: 'Filme Teste 1', estudio: "Warner bros", vencedor: true},
      {id: 2, ano: 2020, titulo: 'Filme Teste 2', estudio: "Paramont", vencedor: true}
    ];

    spyOn(filmeService, 'filtrar').and.returnValue(of({filmes: mockFilmes, totalElements: 2}));
    spyOn(msgToastService, 'info');

    component.vencedoresPorAnoForm.controls['ano'].setValue(2020);
    component.pesquisar();

    setTimeout(() => {
      expect(filmeService.filtrar).toHaveBeenCalled();
      expect(component.filmesVencedoresPorAno).toEqual(mockFilmes);
      expect(component.loading).toBeFalse();
      done();
    }, 500);
  });


  it('deve exibir mensagem quando não encontrar filmes', (done) => {
    spyOn(filmeService, 'filtrar').and.returnValue(of({filmes: [], totalElements: 0}));
    spyOn(msgToastService, 'info');

    component.vencedoresPorAnoForm.controls['ano'].setValue(1999);
    component.pesquisar();

    expect(filmeService.filtrar).toHaveBeenCalled();
    expect(component.filmesVencedoresPorAno.length).toBe(0);
    expect(msgToastService.info).toHaveBeenCalledWith('Nenhum filme encontrado.');
    expect(component.loading).toBeFalse();
    done();

  });

  // todo, implementar teste de erro
  // it('deve lidar com erro no serviço de filmes', (done) => {
  //   spyOn(filmeService, 'filtrar').and.returnValue(throwError(() => new Error('Erro de serviço')));
  //   spyOn(msgToastService, 'info');
  //
  //   component.vencedoresPorAnoForm.controls['ano'].setValue(2020);
  //   component.pesquisar();
  //
  //   setTimeout(() => {
  //     expect(filmeService.filtrar).toHaveBeenCalled();
  //     expect(component.loading).toBeFalse();
  //     // Verificar se alguma mensagem de erro é exibida
  //     done();
  //   }, 500);
  // });

});
