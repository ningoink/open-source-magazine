import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { OsmBrowseComponent } from './osm-browse.component'

describe('OsmBrowseComponent', () => {
  let component: OsmBrowseComponent
  let fixture: ComponentFixture<OsmBrowseComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsmBrowseComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OsmBrowseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
