import { Component, OnInit } from '@angular/core'
import { ComponentPageTitle } from 'src/app/shared/page-title'

@Component({
  selector: 'app-homepage',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {
  constructor(public _componentPageTitle: ComponentPageTitle) {}

  ngOnInit(): void {
    this._componentPageTitle.title = ''
  }
}
