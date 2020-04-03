import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { OsmBrowseComponent } from './osm-browse/osm-browse.component'
import { OsmExploreComponent } from './osm-explore/osm-explore.component'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'

// import { MatSliderModule } from '@angular/material/slider'
// import { LayoutModule } from '@angular/cdk/layout'
// import { MatSidenavModule } from '@angular/material/sidenav'
// import { MatIconModule } from '@angular/material/icon'
// import { MatListModule } from '@angular/material/list'
// import { MatGridListModule } from '@angular/material/grid-list'
// import { MatCardModule } from '@angular/material/card'
// import { MatMenuModule } from '@angular/material/menu'

@NgModule({
  declarations: [
    AppComponent,
    OsmBrowseComponent,
    OsmExploreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
