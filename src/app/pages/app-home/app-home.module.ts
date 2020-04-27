const routes: Routes = [ {path: '', component: Homepage}]

@NgModule({
  imports: [
    SvgViewerModule,
    MatButtonModule,
    FooterModule,
    RouterModule.forChild(routes),
    NavigationFocusModule
  ],
  exports: [Homepage],
  declarations: [Homepage],
})
export class HomepageModule { }