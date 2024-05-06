import { Component, ViewChild } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Models } from '@total/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { ConfigurationComponent } from './configuration/configuration.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  layoutSettings: Models.Configs.LayoutSettings = new Models.Configs.LayoutSettings();
  modeValue: MatDrawerMode = 'side';
  windowWidth: number;
  layoutType = Models.Enum.LayoutType;
  menus: Models.Layout.NavigationItem[] = []
  @ViewChild('sidebar') sidebar: MatDrawer;

  constructor(private readonly layoutService: LayoutService,
    private readonly breakpointObserver: BreakpointObserver
  ) { }

  // life cycle event
  ngOnInit() {
    this.breakpointObserver.observe([Models.Enum.LayoutWidth.MIN_WIDTH_1025PX, Models.Enum.LayoutWidth.MAX_WIDTH_1024PX]).subscribe((result) => {
      if (result.breakpoints[Models.Enum.LayoutWidth.MAX_WIDTH_1024PX]) {
        this.modeValue = 'over';
      } else if (result.breakpoints[Models.Enum.LayoutWidth.MIN_WIDTH_1025PX]) {
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
    this.layoutService.directionChange.subscribe((direction: Models.Enum.LayoutDIR) => {
      // here direction layout subscribing according on click event in configuration
      this.layoutSettings.dir = direction;
      this.manageLayout(this.layoutSettings.layout);
    });

    /**
     * Listen to theme layout changes
     */
    this.layoutService.layout.subscribe((layout: Models.Enum.LayoutType) => {
      // here direction layout subscribing according on click event in configuration
      this.layoutSettings.layout = layout;
      this.manageLayout(layout);
    });
  }


  /**
   * Manage layout of theme
   */
  private manageLayout(layout: Models.Enum.LayoutType) {
    const drawerContent = document.querySelector('.mat-drawer-content') as HTMLElement;
    if (drawerContent) {
      if (layout === Models.Enum.LayoutType.VERTICAL) {
        if (this.windowWidth > 1025) {
          drawerContent.style.marginLeft = this.layoutSettings.dir === Models.Enum.LayoutDIR.RTL ? '0px' : '280px';
          drawerContent.style.marginRight = this.layoutSettings.dir === Models.Enum.LayoutDIR.RTL ? '280px' : '0px';
        }
      } else if (layout === Models.Enum.LayoutType.COMPACT) {
        if (this.windowWidth > 1025) {
          drawerContent.style.marginLeft = this.layoutSettings.dir == Models.Enum.LayoutDIR.RTL ? '0px' : '90px';
          drawerContent.style.marginRight = this.layoutSettings.dir == Models.Enum.LayoutDIR.RTL ? '90px' : '0px';
        }
      } else if (layout == Models.Enum.LayoutType.HORIZONTAL) {
        drawerContent.style.marginLeft = '0px';
      }
    }
  }
}
