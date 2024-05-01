import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ServiceRegistryModule_CONFIG } from "./serivce-registery-module-config";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
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
