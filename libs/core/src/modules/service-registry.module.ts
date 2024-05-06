import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ServiceRegistryModule_CONFIG } from "./serivce-registery-module-config";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgScrollbarModule } from "ngx-scrollbar";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { CustomTranslateLoader } from "../i18n/custom-translate-loader";
import { RouterModule } from '@angular/router';
import { layoutServices } from "../ui/layout/layout-services-list";
import { LayoutComponent } from "../ui/layout/components/layout.component";
import { layoutComponentList, layoutStandAloneComponentList } from "../ui";
import { MaterialModule } from "./material.module";
import { SharedModule } from "./shared.module";
import { CardComponent } from "../ui/layout/components/card/card.component";
import { FooterComponent } from "../ui/layout/components/footer/footer.component";
import { BreadcrumbComponent } from "../ui/layout/components/breadcrumb/breadcrumb.component";
import { ConfigurationComponent } from "../ui/layout/components/configuration/configuration.component";
import { AuthenticationService } from "../ui/auth/services";


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    MaterialModule,
    //SharedModule,
    NgScrollbarModule,
    //CardComponent,
    // FooterComponent,
    // BreadcrumbComponent,
    // ConfigurationComponent,
    RouterModule.forChild([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader
      }
    }),
  ],
  declarations: [LayoutComponent, ...layoutComponentList],
  exports: [LayoutComponent, ...layoutComponentList, MaterialModule],
  providers: [...layoutServices, AuthenticationService]
})
export class ServiceRegistryModule {
  static forRoot(config: ServiceRegistryModule_CONFIG): ModuleWithProviders<ServiceRegistryModule> {
    return {
      ngModule: ServiceRegistryModule,
      providers: [{ provide: ServiceRegistryModule, useValue: config }],
    };
  }
}
