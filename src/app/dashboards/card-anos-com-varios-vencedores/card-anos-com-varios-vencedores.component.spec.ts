import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnosComVariosVencedoresComponent } from './card-anos-com-varios-vencedores.component';

describe('CardAnosComVariosVencedoresComponent', () => {
  let component: CardAnosComVariosVencedoresComponent;
  let fixture: ComponentFixture<CardAnosComVariosVencedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAnosComVariosVencedoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAnosComVariosVencedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
