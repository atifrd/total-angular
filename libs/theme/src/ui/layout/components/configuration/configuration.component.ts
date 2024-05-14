// angular import
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { Models } from '@total/theme';
import { LayoutService } from '../../services/layout.service';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'libs/theme/src/modules/shared.module';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CommonModule,SharedModule],
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  // public props
  styleSelectorToggle!: boolean; // open configuration menu
  // layoutType!: string; // layouts type
  // layout!: string; // vertical, horizontal, compact
  // bodyColor!: string; // theme color
  // contrast!: boolean; // theme contrast
  // caption!: boolean; // menu title hide
  // rtlLayout!: boolean; // rtl theme
  // boxLayouts!: boolean; // content is box-container
  resetLayoutType!: string; // reset layouts

  // constructor
  constructor(
    private renderer: Renderer2,
    private layoutService: LayoutService
  ) {
    this.layoutConfig = layoutService.getLayoutSettings();
  }

  layoutConfig: Models.Configs.LayoutSettings = new Models.Configs.LayoutSettings();
  layoutDIR = Models.Enum.LayoutDIR;
  layoutMode = Models.Enum.LayoutMode;
  layoutType = Models.Enum.LayoutType;

  // life cycle event
  ngOnInit() {
    this.setMenuOrientation(this.layoutConfig.layout);
    this.SetLayouts(this.layoutConfig.mode);
    this.SetBodyColor(this.layoutConfig.color);
    this.setThemeContrast(this.layoutConfig.themeContrast);
    this.setMenuCaption(this.layoutConfig.menuCaption);
    this.setRtlLayout(this.layoutConfig.dir === Models.Enum.LayoutDIR.RTL);
    this.setBoxLayouts(this.layoutConfig.isBoxContainer);
  }

  // public method

  // Reset Layouts
  setResetLayout(layout: string) {
    if (layout === 'reset') {
      this.ngOnInit();
    }
  }

  // customs layouts
  removeAllLayouts() {
    const layouts = ['light-mode', 'dark-mode'];
    layouts.forEach((layout) => {
      this.renderer.removeClass(document.body, layout);
      document.querySelector('.auto-button')?.classList.remove('active');
    });
  }

  SetLayouts(layout: Models.Enum.LayoutMode) {
    this.removeAllLayouts();
    this.renderer.addClass(document.body, layout);
  }

  layout_change_default(layout: Models.Enum.LayoutMode) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      layout = Models.Enum.LayoutMode.DARK;
    } else {
      layout = Models.Enum.LayoutMode.LIGHT;
    }
    this.SetLayouts(layout);
    document.querySelector('.auto-button')?.classList.add('active');
  }

  // customs theme
  removeAllThemes() {
    const themes = [
      'blue-theme',
      'indigo-theme',
      'purple-theme',
      'pink-theme',
      'red-theme',
      'orange-theme',
      'yellow-theme',
      'green-theme',
      'teal-theme',
      'cyan-theme'
    ];
    themes.forEach((theme) => {
      this.renderer.removeClass(document.body, theme);
    });
  }

  SetBodyColor(theme: string) {
    this.removeAllThemes();
    this.renderer.addClass(document.body, theme);
    this.layoutService.color.next(theme);
  }

  // theme body menu and header background color change
  setThemeContrast(contrast: boolean) {
    if (contrast) {
      this.renderer.addClass(document.body, 'theme-contrast');
    } else {
      this.renderer.removeClass(document.body, 'theme-contrast');
    }
  }

  // menu title hide and show
  setMenuCaption(caption: boolean) {
    if (caption) {
      document.querySelector('.pc-sidebar')?.classList.add('caption-hide');
    } else {
      document.querySelector('.pc-sidebar')?.classList.remove('caption-hide');
    }
  }

  // box container layouts
  setBoxLayouts(boxLayouts: boolean) {
    if (boxLayouts) {
      document.querySelector('.app-container')?.classList.add('container');
    } else {
      document.querySelector('.app-container')?.classList.remove('container');
    }
  }

  // rtl theme layout
  setRtlLayout(rtl: boolean) {
    if (rtl) {
      this.renderer.addClass(document.body, 'able-pro-rtl');
      this.layoutService.directionChange.next(Models.Enum.LayoutDIR.RTL);
    } else {
      this.renderer.removeClass(document.body, 'able-pro-rtl');
      this.layoutService.directionChange.next(Models.Enum.LayoutDIR.LTR);
    }
  }

  setMenuOrientation(layout: Models.Enum.LayoutType) {
    document.querySelector('.pc-sidebar')?.classList.remove(Models.Enum.LayoutType.HORIZONTAL);
    document.querySelector('.pc-sidebar')?.classList.remove(Models.Enum.LayoutType.COMPACT);
    document.querySelector('.pc-sidebar')?.classList.remove(Models.Enum.LayoutType.VERTICAL);
    document.querySelector('.pc-sidebar')?.classList.add(layout);
    this.layoutService.layout.next(layout);
  }
}
