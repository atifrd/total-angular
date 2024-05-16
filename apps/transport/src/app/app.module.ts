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
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    StuffTypeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    Modules.ServiceRegistryModule.forRoot({
      sender: Models.Enum.Projects.Transport,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
