import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CargoInfoComponent } from './components/transport/cargo/cargo-info/cargo-info.component';
import { MatTreeChecklistComponent } from 'libs/theme/src/material-components/mat-tree-checklist/mat-tree-checklist.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },

  ////
  { path: 'cargo-info', component: CargoInfoComponent },
  { path: 'tree', component: MatTreeChecklistComponent }
];
