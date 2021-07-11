import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialDiaryComponent } from './special-diary.component';

describe('SpecialDiaryComponent', () => {
  let component: SpecialDiaryComponent;
  let fixture: ComponentFixture<SpecialDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialDiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
