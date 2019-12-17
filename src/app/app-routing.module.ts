import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './section13/home/home.component';
import { UserComponent } from './section13/user/user.component';

const appRoutes: Routes = [
   {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
   },
   {
      path: 'user/:id',
      component: UserComponent
   }
];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true}) // localhost/#/user
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

// Section 11
/*import { PageNotFoundComponent } from './section11/page-not-found/page-not-found.component';
import { EditServerComponent } from './section11/servers/edit-server/edit-server.component';
import { ServerComponent } from './section11/servers/server/server.component';
import { ServersComponent } from './section11/servers/servers.component';
import { UserComponent } from './section11/users/user/user.component';
import { UsersComponent } from './section11/users/users.component';

import { AuthGuard } from './section11/guards/auth-guard.service';
import { CanDeactiveGuard } from './section11/guards/can-deactive-guard.service';
import { ErrorPageComponent } from './section11/error-page/error-page.component';
import { ServerResolverService } from './section11/services/server-resolver.service';

const appRoutes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full' },
   {
      path: 'users',
      component: UsersComponent,
      children: [
          { path: ':id/:name', component: UserComponent }
      ]
   },
   {
      path: 'servers',
       // canActivate: [AuthGuard],
      canActivateChild: [AuthGuard],
      component: ServersComponent,
      children: [
         { path: ':id', component: ServerComponent, resolve: {serverResolver: ServerResolverService} },
         { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactiveGuard] }
      ]
   },
   { path: '404', component: ErrorPageComponent, data: {message: 'Page not found!'} },
   { path: '**', redirectTo: '404'} // This needs to be last unless every other page redirects to 404
]; */
