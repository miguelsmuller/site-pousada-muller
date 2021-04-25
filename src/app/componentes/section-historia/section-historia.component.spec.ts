import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHistoriaComponent } from './section-historia.component';

describe('SectionHistoriaComponent', () => {
  let component: SectionHistoriaComponent;
  let fixture: ComponentFixture<SectionHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
