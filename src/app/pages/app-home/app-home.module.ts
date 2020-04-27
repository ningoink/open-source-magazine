import { Routes, RouterModule } from '@angular/router'
import { AppHomeComponent } from './app-home.component'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { SvgViewerModule } from 'src/app/shared/svg-viewer'
import { NavigationFocusModule } from 'src/app/shared/navigation-focus'
import { FooterModule } from 'src/app/shared/components/footer/footer.module'

const routes: Routes = [ { path: '', component: AppHomeComponent }]

@NgModule({
  imports: [
    SvgViewerModule,
    MatButtonModule,
    FooterModule,
    RouterModule.forChild(routes),
    NavigationFocusModule
  ],
  exports: [AppHomeComponent],
  declarations: [AppHomeComponent],
})
export class AppHomeModule { }