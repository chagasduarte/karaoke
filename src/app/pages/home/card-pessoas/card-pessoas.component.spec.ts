import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPessoasComponent } from './card-pessoas.component';

describe('CardPessoasComponent', () => {
  let component: CardPessoasComponent;
  let fixture: ComponentFixture<CardPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPessoasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
