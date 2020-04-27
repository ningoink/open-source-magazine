import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { OsmBrowserComponent } from './pages/osm-browser/osm-browser.component'
// import { OsmExploreComponent } from './pages/osm-explore/osm-explore.component'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/app-home.module').then(m => m.HomepageModule)
  },
  {
    path: 'browser',
    loadChildren: () => import('./pages/osm-browser.module').then(m => n.OsmBrowserModule)
  },
  // {
  //   path: 'explore',
  //   loadChildren: () => import('./pages/osm-explore').then(m => n.OsmExploreComponent)
  // },
  // {
  //   path: 'report',
  //   loadChildren: () => import('./pages/osm-report').then(m => n.OsmReportComponent)
  // },
  // {
  //   path: 'history',
  //   loadChildren: () => import('./pages/osm-history').then(m => n.OsmHistoryComponent)
  // },
  // {
  //   path: 'history/:date',
  //   loadChildren: () => import('./pages/osm-history').then(m => n.OsmHistoryComponent)
  // },
  // {
  //   path: 'articles',
  //   loadChildren: () => import('./pages/osm-articles.module').then(m => m.GuideListModule)
  // },
  // {
  //   path: 'article/:id',
  //   loadChildren: () => import('./pages/guide-viewer').then(m => m.GuideViewerModule)
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import {Routes} from '@angular/router';
import {CanActivateComponentSidenav} from './pages/component-sidenav/component-sidenav-can-load-guard';

export const MATERIAL_DOCS_ROUTES: Routes = [
  // {
  //   path: ':section',
  //   canActivate: [CanActivateComponentSidenav],
  //   loadChildren: () =>
  //     import('./pages/component-sidenav/component-sidenav').then(m => m.ComponentSidenavModule)
  // },
  {path: '**', redirectTo: ''},
];
