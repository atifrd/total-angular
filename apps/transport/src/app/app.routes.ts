import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CargoInfoComponent } from './components/transport/cargo/cargo-info/cargo-info.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },

  ////
  { path: 'cargo-info', component: CargoInfoComponent }
];
