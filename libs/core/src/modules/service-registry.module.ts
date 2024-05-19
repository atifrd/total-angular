import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  providers: [],
})
export class ServiceRegistryModule {
  public static forRoot(
    environment: any,
  ): ModuleWithProviders<ServiceRegistryModule> {
    return {
      ngModule: ServiceRegistryModule,
      providers: [
        {
          provide: 'env', // you can also use InjectionToken
          useValue: environment,
        },
      ],
    };
  }
}
