import { Injectable, OnDestroy } from '@angular/core';
import {
  NavigationBehaviorOptions,
  NavigationEnd,
  Router,
  UrlTree,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockRouterService implements OnDestroy {
  routerSub: Subscription = Subscription.EMPTY;

  previousUrl: string = '';
  currentUrl: string = '';

  constructor(private router: Router) {
    this.routerSub = this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe((event: NavigationEnd) => {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;

        console.info(`Previous Url: ${this.previousUrl}`);
        console.info(`Current Url: ${this.currentUrl}`);
      });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  navigateByUrl(
    url: string | UrlTree,
    extras?: NavigationBehaviorOptions | undefined
  ): Promise<boolean> {
    return this.router.navigateByUrl(url, extras);
  }

  backToPrevious(): Promise<boolean> {
    return this.navigateByUrl(this.previousUrl);
  }
}
