import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayingComponent } from './card-playing.component';

describe('CardPlayingComponent', () => {
  let component: CardPlayingComponent;
  let fixture: ComponentFixture<CardPlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPlayingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
