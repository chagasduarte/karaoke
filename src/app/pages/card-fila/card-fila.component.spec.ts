import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilaComponent } from './card-fila.component';

describe('CardFilaComponent', () => {
  let component: CardFilaComponent;
  let fixture: ComponentFixture<CardFilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFilaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
