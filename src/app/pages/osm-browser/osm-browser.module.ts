import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { OsmBrowserComponent } from './osm-browser.component'

const routes: Routes = [ {path: '', component: OsmBrowserComponent}]

@NgModule({
  imports: [CommonModule],
  exports: [OsmBrowserComponent],
  declarations: [OsmBrowserComponent],
})
export class OsmBrowserModule { }