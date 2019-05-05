import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerProfileCardComponent } from './beer-profile-card.component';

describe('BeerProfileCardComponent', () => {
  let component: BeerProfileCardComponent;
  let fixture: ComponentFixture<BeerProfileCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerProfileCardComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
