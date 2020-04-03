import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { OsmExploreComponent } from './osm-explore.component'

describe('OsmExploreComponent', () => {
  let component: OsmExploreComponent
  let fixture: ComponentFixture<OsmExploreComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsmExploreComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OsmExploreComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
