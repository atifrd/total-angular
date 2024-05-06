// angular import
import { Component, OnInit } from '@angular/core';

// project import
import { Models } from '@total/core';
import { LayoutService } from '../../../services/layout.service';

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
      if (res === Models.Enum.LayoutType.VERTICAL) {
        this.showToggleMenu = true;
      }
      if (res == Models.Enum.LayoutType.HORIZONTAL) {
        this.showToggleMenu = false;
      }
      if (res === Models.Enum.LayoutType.COMPACT) {
        this.showToggleMenu = true;
      }
    });
  }

  // public method
  toggleMenu() {
    this.layoutService.toggleSideDrawer();
  }
}
