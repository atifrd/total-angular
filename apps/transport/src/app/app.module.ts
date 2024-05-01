import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Modules, Models } from '@total/core';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    Modules.ServiceRegistryModule.forRoot({ sender: Models.Enum.Projects.Transport })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
