import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import {of} from "rxjs";
import {ActivatedRoute} from "@angular/router";

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: '123'})
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
