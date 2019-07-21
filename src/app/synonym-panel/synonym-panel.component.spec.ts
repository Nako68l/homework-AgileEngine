import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymPanelComponent } from './synonym-panel.component';

describe('SynonymPanelComponent', () => {
  let component: SynonymPanelComponent;
  let fixture: ComponentFixture<SynonymPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynonymPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynonymPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
