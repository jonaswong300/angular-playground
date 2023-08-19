import { Component } from '@angular/core';
import { MockRouterService } from 'src/app/services/mock-router.service';

@Component({
  selector: 'app-lazyloaded2',
  templateUrl: './lazyloaded2.component.html',
  styleUrls: ['./lazyloaded2.component.scss'],
})
export class Lazyloaded2Component {
  constructor(private mockRouterService: MockRouterService) {}

  navigate(module: '1' | '3'): void {
    const url = module === '1' ? '/lazyloaded1' : '/lazyloaded3';
    this.mockRouterService.navigateByUrl(url);
  }
}
