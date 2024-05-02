import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ServiceRegistryModule_CONFIG } from "./serivce-registery-module-config";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgScrollbarModule } from "ngx-scrollbar";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "./material.module";
import { CustomTranslateLoader } from "../i18n/custom-translate-loader";
import { RouterModule } from '@angular/router';
import { layoutComponents } from "../ui";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    MaterialModule,
    NgScrollbarModule,
    RouterModule.forChild([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader
      }
    }),

  ],
  declarations: [...layoutComponents],
  exports: [...layoutComponents],
  providers: []
})
export class ServiceRegistryModule {
  static forRoot(config: ServiceRegistryModule_CONFIG): ModuleWithProviders<ServiceRegistryModule> {
    return {
      ngModule: ServiceRegistryModule,
      providers: [{ provide: ServiceRegistryModule, useValue: config }],
    };
  }
}
