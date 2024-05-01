import { InjectionToken } from "@angular/core";
import { Enum } from "../models";

const ServiceRegistryModule_CONFIG = new InjectionToken(
  "This is a configuration object for our ServiceRegistryModule Module"
);

export interface ServiceRegistryModule_CONFIG {
  sender: Enum.Projects;
}
