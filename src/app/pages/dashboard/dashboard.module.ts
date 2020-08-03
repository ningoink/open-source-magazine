import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './dashboard.component'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { NavigationFocusModule } from 'src/app/shared/navigation-focus'
import { FooterModule } from 'src/app/shared/components/footer/footer.module'

const routes: Routes = [ { path: '', component: DashboardComponent }]

@NgModule({
  imports: [
    MatButtonModule,
    FooterModule,
    RouterModule.forChild(routes),
    NavigationFocusModule
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent],
})
export class AppHomeModule { }