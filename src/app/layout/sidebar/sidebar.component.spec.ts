import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
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

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve alternar isCollapsed quando toggleSidebar é chamado', () => {
    const initialCollapsedState = component.isCollapsed;
    component.toggleSidebar();
    expect(component.isCollapsed).toBe(!initialCollapsedState);
  });

});
