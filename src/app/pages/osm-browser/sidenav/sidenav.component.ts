import {
  Component,
  Input,
  NgModule,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core'
import {animate, state, style, transition, trigger} from '@angular/animations'
import { Routes } from '@angular/router'
import {
  ComponentCategoryList,
  ComponentCategoryListModule
} from '../component-category-list/component-category-list'
import {ComponentList, ComponentListModule} from '../component-list'
import {
  ComponentOverview,
  ComponentChapter,
  ComponentViewer,
  ComponentViewerModule
} from '../viewer/viewer.component'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ComponentSidenav implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.")
  }
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({height: '0px', display: 'none'})),
      state('expanded', style({height: '*', display: 'block'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
})
export class ComponentNav implements OnInit, OnDestroy {
  ngOnInit(): void {
    throw new Error("Method not implemented.")
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.")
  }
}

const routes: Routes = [ {
  path : '',
  component : ComponentSidenav,
  children : [
    {path : '', redirectTo : 'categories', pathMatch : 'full'},
    {
      path : 'categories',
      children : [
        {path : '', component : ComponentCategoryList},
        {path : ':id', component : ComponentList},
      ],
    },
    {
      path : ':id',
      component : ComponentViewer,
      children : [
        {path : '', redirectTo : 'overview', pathMatch : 'full'},
        {path : 'overview', component : ComponentOverview, pathMatch : 'full'}, // 全文
        {path : 'api', component : ComponentChapter, pathMatch : 'full'}, // 序言
        {path : '**', redirectTo : 'overview'},
      ],
    },
  ]
} ]

@NgModule({
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterModule,
    CommonModule,
    ComponentCategoryListModule,
    ComponentHeaderModule,
    ComponentListModule,
    ComponentViewerModule,
    DocViewerModule,
    FooterModule,
    FormsModule,
    HttpClientModule,
    CdkAccordionModule,
    MatIconModule,
    MatSidenavModule,
    StackBlitzButtonModule,
    SvgViewerModule,
    RouterModule.forChild(routes),
    NavigationFocusModule
  ],
  exports: [ComponentSidenav],
  declarations: [ComponentSidenav, ComponentNav],
  providers: [DocumentationItems],
})
export class ComponentSidenavModule {}
