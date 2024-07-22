import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTop3EstudiosVencedoresComponent } from './card-top3-estudios-vencedores.component';

describe('CardTop3EstudiosVencedoresComponent', () => {
  let component: CardTop3EstudiosVencedoresComponent;
  let fixture: ComponentFixture<CardTop3EstudiosVencedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTop3EstudiosVencedoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTop3EstudiosVencedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
