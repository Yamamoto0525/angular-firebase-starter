import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevAuthGuard } from './core/guard/dev-auth.guard';

import { DevAuthComponent } from './core/dev-auth/dev-auth.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {
    path: '',
    component: TopComponent,
    canActivate: [DevAuthGuard],
    pathMatch: 'full',
  },
  {
    path: 'dev-auth',
    component: DevAuthComponent,
    canActivate: [DevAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
