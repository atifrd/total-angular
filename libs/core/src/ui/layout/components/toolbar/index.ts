import { NavLeftComponent } from './toolbar-left/toolbar-left.component';
import { NavRightComponent } from './toolbar-right/toolbar-right.component';
import { NavBarComponent } from './toolbar.component';

export * from './toolbar.component';
export * from './toolbar-left/toolbar-left.component';
export * from './toolbar-right/toolbar-right.component';

export const toolbarComponents = [
  NavBarComponent, NavRightComponent, NavLeftComponent
]
