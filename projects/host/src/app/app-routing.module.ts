import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  // {
  //   path: 'catalog',
  //   loadChildren: () => loadRemoteModule({
  //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //     // remoteName: 'remoteCatalog',
  //     exposedModule: './ItemsModule',
  //     type:'module'
  //   }).then(m => m.AddressModule)
  // },
  {
    path: 'catalog',
    loadChildren: () => import('remoteCatalog/ItemsModule').then(m => m.ItemsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
