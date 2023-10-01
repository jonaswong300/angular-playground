import { Component } from '@angular/core';
import { MockRouterService } from 'src/app/services/mock-router.service';

@Component({
  selector: 'app-lazyloaded3',
  templateUrl: './lazyloaded3.component.html',
  styleUrls: ['./lazyloaded3.component.scss'],
})
export class Lazyloaded3Component {
  constructor(private mockRouterService: MockRouterService) {}

  navigate(module: '1' | '2'): void {
    const url = module === '1' ? '/lazyloaded1' : '/lazyloaded2';
    this.mockRouterService.navigateByUrl(url);
  }

  backToPrevious(): void {
    this.mockRouterService.backToPrevious();
  }
}
