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
  private routerSub: Subscription = Subscription.EMPTY;
  private previousUrl: string = '';
  private currentUrl: string = '';
  private previousUrlStack: string[] = [];

  constructor(private router: Router) {
    this.routerSub = this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe((event: NavigationEnd) => {
        if (this.previousUrl !== event.url) {
          this.previousUrl = this.currentUrl;
          this.currentUrl = event.url;
          this.previousUrlStack.push(this.previousUrl);
        }
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
    const previousUrlToNavigate = this.previousUrlStack.pop();
    return this.navigateByUrl(previousUrlToNavigate ?? '');
  }
}
