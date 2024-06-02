import { Component, ContentChild, Input, Signal, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from './loading-service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'lib-loading',
  standalone: true,
  imports: [CommonModule, MatProgressSpinner],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  loading: Signal<boolean>;

  @Input()
  detectRouteTransitions = false; //possibility  to show the loading indicator during route transitions.

  @ContentChild("loading")
  customLoadingIndicator: TemplateRef<any> | null = null; //possibility of providing a custom UI for loading component


  loadingService = inject(LoadingService);
  router = inject(Router);

  constructor() {
    this.loading = this.loadingService.loading;
  }

  ngOnInit() {
    if (this.detectRouteTransitions) {
      this.router.events
        .pipe(
          tap((event) => {
            if (event instanceof RouteConfigLoadStart) {
              this.loadingService.loadingOn();
            } else if (event instanceof RouteConfigLoadEnd) {
              this.loadingService.loadingOff();
            }
          })
        )
        .subscribe();
    }
  }


}
