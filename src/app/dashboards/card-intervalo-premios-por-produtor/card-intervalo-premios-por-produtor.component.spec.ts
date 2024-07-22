import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIntervaloPremiosPorProdutorComponent } from './card-intervalo-premios-por-produtor.component';

describe('CardIntervaloPremiosPorProdutorComponent', () => {
  let component: CardIntervaloPremiosPorProdutorComponent;
  let fixture: ComponentFixture<CardIntervaloPremiosPorProdutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardIntervaloPremiosPorProdutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardIntervaloPremiosPorProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
