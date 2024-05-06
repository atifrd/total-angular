import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { CardComponent } from "./components/card/card.component";
import { ConfigurationComponent } from "./components/configuration/configuration.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CompactMenuComponent, HorizontalMenuComponent, MenuCollapseCompactComponent, MenuCollapseComponent, MenuCollapseVerticalComponent, MenuGroupCompactComponent, MenuGroupHorizontalComponent, MenuGroupVerticalComponent, MenuItemCompactComponent, MenuItemComponent, MenuItemHorizontalComponent, VerticalMenuComponent } from "./components/menu";
import { toolbarComponents } from "./components/toolbar";

export const layoutComponentList = [
  VerticalMenuComponent,
  MenuItemComponent,
  MenuGroupVerticalComponent,
  MenuCollapseComponent,
  HorizontalMenuComponent,
  MenuItemHorizontalComponent,
  MenuGroupHorizontalComponent,
  MenuCollapseVerticalComponent,
  MenuItemCompactComponent,
  CompactMenuComponent,
  MenuGroupCompactComponent,
  MenuCollapseCompactComponent,
  ...toolbarComponents
];


export const layoutStandAloneComponentList = [
  CardComponent,
  FooterComponent,
  BreadcrumbComponent,
  ConfigurationComponent,
];
