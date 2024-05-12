import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ServiceRegistryModule_CONFIG } from './serivce-registery-module-config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { layoutServices } from '../ui/layout/layout-services-list';
import { LayoutComponent } from '../ui/layout/components/layout.component';
import { FooterComponent } from '../ui/layout/components/footer/footer.component';
import { BreadcrumbComponent } from '../ui/layout/components/breadcrumb/breadcrumb.component';
import { ConfigurationComponent } from '../ui/layout/components/configuration/configuration.component';
import { AuthenticationService } from '../ui/auth/services';
import { SharedModule } from './shared.module';
import { NavBarModule } from '../ui/layout/components/toolbar';
import {
  CompactMenuModule,
  HorizontalMenuModule,
  VerticalMenuModule,
} from '../ui/layout/components/menu';
import { materialComp } from '../material-components';

@NgModule({
  imports: [
    ConfigurationComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NavBarModule,
    SharedModule,
    RouterModule,
    VerticalMenuModule,
    HorizontalMenuModule,
    CompactMenuModule,
    BreadcrumbComponent,
    FooterComponent,
    ...materialComp,
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent, ...materialComp],
  providers: [...layoutServices, AuthenticationService],
})
export class ServiceRegistryModule {
  static forRoot(
    config: ServiceRegistryModule_CONFIG,
  ): ModuleWithProviders<ServiceRegistryModule> {
    return {
      ngModule: ServiceRegistryModule,
      providers: [{ provide: ServiceRegistryModule, useValue: config }],
    };
  }
}
