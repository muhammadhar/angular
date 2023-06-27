import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'members/dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'add_child',
    loadChildren: () =>
      import('./addchild/addchild.module').then((m) => m.AddChildPageModule),
  },
  {
    path: 'add_school',
    loadChildren: () =>
      import('./addschool/addschool.module').then((m) => m.AddschoolPageModule),
  },
  {
    path: 'forgot_password',
    loadChildren: () =>
      import('./forgetPassword/forget.module').then((m) => m.ForgetPageModule),
  },
  {
    path: 'reset_password',
    loadChildren: () =>
      import('./resetPassword/reset.module').then((m) => m.ResetPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
