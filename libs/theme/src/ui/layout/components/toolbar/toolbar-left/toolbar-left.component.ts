// angular import
import { Component, OnInit } from '@angular/core';

// project import
import { LayoutService } from '../../../services/layout.service';
import { LayoutType } from 'libs/theme/src/models/enums';

@Component({
  selector: 'app-nav-left',
  templateUrl: './toolbar-left.component.html',
  styleUrls: ['./toolbar-left.component.scss']
})
export class NavLeftComponent implements OnInit {
  showToggleMenu: boolean = true;
  // constructor
  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.layout.subscribe((res) => {
      if (res === LayoutType.VERTICAL) {
        this.showToggleMenu = true;
      }
      if (res == LayoutType.HORIZONTAL) {
        this.showToggleMenu = false;
      }
      if (res === LayoutType.COMPACT) {
        this.showToggleMenu = true;
      }
    });
  }

  // public method
  toggleMenu() {
    this.layoutService.toggleSideDrawer();
  }
}
