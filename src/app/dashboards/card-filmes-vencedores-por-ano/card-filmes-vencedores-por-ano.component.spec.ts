import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilmesVencedoresPorAnoComponent } from './card-filmes-vencedores-por-ano.component';

describe('CardFilmesVencedoresPorAnoComponent', () => {
  let component: CardFilmesVencedoresPorAnoComponent;
  let fixture: ComponentFixture<CardFilmesVencedoresPorAnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFilmesVencedoresPorAnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFilmesVencedoresPorAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
