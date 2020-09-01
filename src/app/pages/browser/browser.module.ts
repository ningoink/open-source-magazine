import { Routes, RouterModule } from '@angular/router'
import { BrowserComponent } from './browser.component'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { NavigationFocusModule } from 'src/app/shared/navigation-focus'
import { FooterModule } from 'src/app/shared/components/footer/footer.module'

const routes: Routes = [ { path: '', component: BrowserComponent }]

@NgModule({
  imports: [
    MatButtonModule,
    FooterModule,
    RouterModule.forChild(routes),
    NavigationFocusModule
  ],
  exports: [BrowserComponent],
  declarations: [BrowserComponent],
})
export class BrowserModule { }