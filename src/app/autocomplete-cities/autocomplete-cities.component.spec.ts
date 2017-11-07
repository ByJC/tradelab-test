import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteCitiesComponent } from './autocomplete-cities.component';

describe('AutocompleteCitiesComponent', () => {
  let component: AutocompleteCitiesComponent;
  let fixture: ComponentFixture<AutocompleteCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
