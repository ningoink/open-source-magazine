import {Component, NgModule} from '@angular/core'
import {osmVersion} from '../../configs/version'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class Footer {
  version = osmVersion
}
