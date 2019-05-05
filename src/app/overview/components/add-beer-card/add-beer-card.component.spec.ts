import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeerCardComponent } from './add-beer-card.component';

describe('AddBeerCardComponent', () => {
  let component: AddBeerCardComponent;
  let fixture: ComponentFixture<AddBeerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
