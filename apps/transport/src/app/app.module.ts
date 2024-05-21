import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { Modules, Models } from '@total/theme';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StuffTypeComponent } from './components/def/stuff/stuff-type/stuff-type.component';
import { CoreModules } from '@total/core';
import { environment } from '../environments';
import { CargoInfoComponent } from './components/transport/cargo/cargo-info/cargo-info.component';
import { CargoPortageComponent } from './components/transport/cargo/cargo-portage/cargo-portage.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    StuffTypeComponent,
    CargoInfoComponent,
    CargoPortageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),

    Modules.ServiceRegistryModule.forRoot({
      sender: Models.Enum.Projects.Transport,
    }),
    CoreModules.ServiceRegistryModule.forRoot({
      environment,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
