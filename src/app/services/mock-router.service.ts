import { Injectable, OnDestroy } from '@angular/core';
import {
  NavigationBehaviorOptions,
  NavigationEnd,
  Router,
  UrlTree,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MockRouterService implements OnDestroy {
  private routerSub: Subscription = Subscription.EMPTY;
  private previousUrlStack: string[] = [];

  private previousUrl: string = '';
  private currentUrl: string = '';
  private counter: number = 0;

  constructor(private router: Router) {
    console.info(`Instance of Router created: ${this.counter}`);
    this.counter++;

    this.routerSub = this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe((event: NavigationEnd) => {
        if (this.previousUrl != event.url) {
          this.previousUrl = this.currentUrl;
          this.currentUrl = event.url;
          this.previousUrlStack.push(this.previousUrl);
          console.info(this.previousUrlStack);
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

  backToPrevious(): void {
    if (this.previousUrlStack.length) {
      const previousUrlToNavigate = this.previousUrlStack.pop() as string;
      console.info(`Previous Url: ${previousUrlToNavigate}`);
      this.navigateByUrl(previousUrlToNavigate);
    }
  }
}
