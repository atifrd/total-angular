import { Component, ViewChild } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LayoutSettings } from 'libs/core/src/models/configs';
import { LayoutDIR, LayoutType, LayoutWidth, Projects } from 'libs/core/src/models/enums';
import { NavigationItem } from 'libs/core/src/models/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  layoutSettings: LayoutSettings = new LayoutSettings();
  modeValue: MatDrawerMode = 'side';
  windowWidth: number;
  layoutType = LayoutType;
  menus: NavigationItem[] = []
  @ViewChild('sidebar') sidebar: MatDrawer;

  constructor(private readonly layoutService: LayoutService,
    private readonly breakpointObserver: BreakpointObserver
  ) {
    this.menus = layoutService.getMenuList(Projects.Transport);
  }

  // life cycle event
  ngOnInit() {
    this.breakpointObserver.observe([LayoutWidth.MIN_WIDTH_1025PX, LayoutWidth.MAX_WIDTH_1024PX]).subscribe((result) => {
      if (result.breakpoints[LayoutWidth.MAX_WIDTH_1024PX]) {
        this.modeValue = 'over';
      } else if (result.breakpoints[LayoutWidth.MIN_WIDTH_1025PX]) {
        this.modeValue = 'side';
      }
    });

    /**
     * Dashboard menu sidebar toggle listener
     */
    this.layoutService.dashBoardMenuState.subscribe(() => {
      this.sidebar.toggle();
    });

    this.manageLayout(this.layoutSettings.layout);

    /**
     * Listen to Theme direction change. RTL/LTR
     */
    this.layoutService.directionChange.subscribe((direction: LayoutDIR) => {
      // here direction layout subscribing according on click event in configuration
      this.layoutSettings.dir = direction;
      this.manageLayout(this.layoutSettings.layout);
    });

    /**
     * Listen to theme layout changes
     */
    this.layoutService.layout.subscribe((layout: LayoutType) => {
      // here direction layout subscribing according on click event in configuration
      this.layoutSettings.layout = layout;
      this.manageLayout(layout);
    });
  }


  /**
   * Manage layout of theme
   */
  private manageLayout(layout: LayoutType) {
    const drawerContent = document.querySelector('.mat-drawer-content') as HTMLElement;
    if (drawerContent) {
      if (layout === LayoutType.VERTICAL) {
        if (this.windowWidth > 1025) {
          drawerContent.style.marginLeft = this.layoutSettings.dir === LayoutDIR.RTL ? '0px' : '280px';
          drawerContent.style.marginRight = this.layoutSettings.dir === LayoutDIR.RTL ? '280px' : '0px';
        }
      } else if (layout === LayoutType.COMPACT) {
        if (this.windowWidth > 1025) {
          drawerContent.style.marginLeft = this.layoutSettings.dir == LayoutDIR.RTL ? '0px' : '90px';
          drawerContent.style.marginRight = this.layoutSettings.dir == LayoutDIR.RTL ? '90px' : '0px';
        }
      } else if (layout == LayoutType.HORIZONTAL) {
        drawerContent.style.marginLeft = '0px';
      }
    }
  }
}
