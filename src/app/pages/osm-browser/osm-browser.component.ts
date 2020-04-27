import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'

@Component({
  selector: 'app-osm-browser',
  templateUrl: './osm-browser.component.html',
  styleUrls: ['./osm-browser.component.scss']
})
export class OsmBrowserComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

  constructor(private breakpointObserver: BreakpointObserver) {}
}
