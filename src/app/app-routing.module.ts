import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { OsmBrowseComponent } from './osm-browse/osm-browse.component'
import { OsmExploreComponent } from './osm-explore/osm-explore.component'

const routes: Routes = [
  { path: '', component: OsmBrowseComponent },
  { path: 'explore', component: OsmExploreComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
