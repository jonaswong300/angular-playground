import { Component } from '@angular/core';
import { MockRouterService } from 'src/app/services/mock-router.service';

@Component({
  selector: 'app-lazyloaded1',
  templateUrl: './lazyloaded1.component.html',
  styleUrls: ['./lazyloaded1.component.scss'],
})
export class Lazyloaded1Component {
  constructor(private mockRouterService: MockRouterService) {}

  navigate(module: '2' | '3'): void {
    const url = module === '2' ? '/lazyloaded2' : '/lazyloaded3';
    this.mockRouterService.navigateByUrl(url);
  }
}
