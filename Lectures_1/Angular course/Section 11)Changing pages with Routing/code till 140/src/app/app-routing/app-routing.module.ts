import { ServerResolverService } from './../servers/server/server-resolver.service';
import { ErrorPageComponent } from './../error-page/error-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../users/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from '../servers/servers.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { ServerComponent } from '../servers/server/server.component';
import { AuthGuardService } from '../auth-guard.service';
import { CanDeactivateGuardService } from '../servers/edit-server/can-deactivate-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
  ]},
  {path: 'servers',
  // canActivate: [AuthGuardService] ,
  canActivateChild: [AuthGuardService],
  component: ServersComponent, children: [
     {path: ':id', component: ServerComponent, resolve: {server: ServerResolverService}},
     { path : ':id/edit' , component: EditServerComponent, canDeactivate: [CanDeactivateGuardService ]}
      ]
  },
  // {path: 'not-found', component: PageNotFoundComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page Not Found'}},
  {path: '**', redirectTo: 'not-found'}
  ];

  @NgModule({
  imports: [
    CommonModule,
  // RouterModule.forRoot(appRoutes, {useHash: true})
    
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
