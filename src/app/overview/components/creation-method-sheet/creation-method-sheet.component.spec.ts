import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationMethodSheetComponent } from './creation-method-sheet.component';

describe('CreationMethodSheetComponent', () => {
  let component: CreationMethodSheetComponent;
  let fixture: ComponentFixture<CreationMethodSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationMethodSheetComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationMethodSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
