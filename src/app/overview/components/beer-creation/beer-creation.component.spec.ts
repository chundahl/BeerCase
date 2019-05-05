import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCreationComponent } from './beer-creation.component';

describe('BeerCreationComponent', () => {
  let component: BeerCreationComponent;
  let fixture: ComponentFixture<BeerCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
