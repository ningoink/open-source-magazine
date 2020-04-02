import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsmContentComponent } from './osm-content.component';

describe('OsmContentComponent', () => {
  let component: OsmContentComponent;
  let fixture: ComponentFixture<OsmContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsmContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsmContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
