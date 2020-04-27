import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { OsmBrowserComponent } from './pages/osm-browser/osm-browser.component'
// import { OsmExplorerComponent } from './pages/osm-explorer/osm-explorer.component'

const routes: Routes = [
  { path: '', component: OsmBrowserComponent },
  // { path: 'explore', component: OsmExplorerComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
