import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesComponent } from './filmes.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {FilmeService} from "./filme.service";
import {of} from "rxjs";
import {provideHttpClient} from "@angular/common/http";

describe('FilmesComponent', () => {
  let component: FilmesComponent;
  let fixture: ComponentFixture<FilmesComponent>;
  let filmeService: FilmeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmesComponent],
      providers: [FilmeService, provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesComponent);
    component = fixture.componentInstance;
    filmeService = TestBed.inject(FilmeService); // Injeta o FilmeService
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve realizar a pesquisa inicial', () => {
    spyOn(filmeService, 'filtrar').and.returnValue(of({filmes: [], totalElements: 0}));
    component.pesquisar();
    expect(filmeService.filtrar).toHaveBeenCalled();
  });

  it('Deve mudar de página', () => {
    spyOn(component, 'pesquisar');
    component.aoMudarPagina({first: 10, rows: 5});
    expect(component.pesquisar).toHaveBeenCalledWith(2);
  });

  it('Deve filtrar por vencedor', () => {
    spyOn(component, 'pesquisar');
    component.aoFiltrarVencedor();
    expect(component.pesquisar).toHaveBeenCalled();
  });

  it('Deve realizar a pesquisa com a ordenação correta', () => {
    const spyFiltrar = spyOn(filmeService, 'filtrar')
      .and.returnValue(of({filmes: [], totalElements: 0}));

    component.aoMudarPagina({first: 0, rows: 5});

    const filtroEsperado = {pagina: 0};

    expect(spyFiltrar).toHaveBeenCalledWith(jasmine.objectContaining(filtroEsperado));
  });

});
