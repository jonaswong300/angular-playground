import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lazyloaded1', pathMatch: 'full' },
  {
    path: 'lazyloaded1',
    loadChildren: () =>
      import('./module/lazyloaded1/lazyloaded1.module').then(
        (m) => m.Lazyloaded1Module
      ),
  },
  {
    path: 'lazyloaded2',
    loadChildren: () =>
      import('./module/lazyloaded2/lazyloaded2.module').then(
        (m) => m.Lazyloaded2Module
      ),
  },
  {
    path: 'lazyloaded3',
    loadChildren: () =>
      import('./module/lazyloaded3/lazyloaded3.module').then(
        (m) => m.Lazyloaded3Module
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
