import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIntroducaoComponent } from './section-introducao.component';

describe('SectionIntroducaoComponent', () => {
  let component: SectionIntroducaoComponent;
  let fixture: ComponentFixture<SectionIntroducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionIntroducaoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionIntroducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
