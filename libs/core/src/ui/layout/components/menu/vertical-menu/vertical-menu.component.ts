// Angular import
import { Component, Input, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

// project import
import { LayoutService } from '../../../services/layout.service';
import { NavigationItem } from 'libs/core/src/models/layout';
import { LayoutType } from 'libs/core/src/models/enums';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent implements OnInit {
  // public props
  @Input() menus: NavigationItem[];
  showUser: boolean = false;
  showContent = true;

  // Constructor
  constructor(
    private location: Location,
    private locationStrategy: LocationStrategy,
    private layout: LayoutService
  ) {}

  // public method
  fireOutClick() {
    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.location.path();
    }
    const link = "a.nav-link[ href='" + current_url + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const last_parent = up_parent?.parentElement;
      if (parent?.classList.contains('coded-hasmenu')) {
        parent.classList.add('coded-trigger');
        parent.classList.add('active');
      } else if (up_parent?.classList.contains('coded-hasmenu')) {
        up_parent.classList.add('coded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent?.classList.contains('coded-hasmenu')) {
        last_parent.classList.add('coded-trigger');
        last_parent.classList.add('active');
      }
    }
  }

  ngOnInit(): void {
    this.layout.layout.subscribe((res) => {
      if (res == LayoutType.VERTICAL) {
        this.showContent = true;
      }
      if (res == LayoutType.HORIZONTAL) {
        this.showContent = false;
      }
      if (res == LayoutType.COMPACT) {
        this.showContent = false;
      }
    });
  }
}
