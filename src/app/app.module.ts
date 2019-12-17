import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { ServersComponent } from './servers/servers.component';
import { PracticeComponent } from './practice/practice.component';
// import { ServerComponent } from './server/server.component';
import { Section2Component } from './section2/section2.component';
import { Practice2Component } from './section2/practice2/practice2.component';
import { SuccessAlertComponent } from './section2/practice2/success-alert/success-alert.component';
import { WarningAlertComponent } from './section2/practice2/warning-alert/warning-alert.component';
import { Practice2v2Component } from './section2/practice2v2/practice2v2.component';
import { Practice2v3Component } from './section2/practice2v3/practice2v3.component';
import { Section5Component } from './section5/section5.component';
import { CockpitComponent } from './section5/cockpit/cockpit.component';
import { ServerElementComponent } from './section5/server-element/server-element.component';
import { LifecycleComponent } from './section5/lifecycle/lifecycle.component';
import { GameControlComponent } from './section5/practice/game-control/game-control.component';
import { OddComponent } from './section5/practice/odd/odd.component';
import { EvenComponent } from './section5/practice/even/even.component';
import { Section7Component } from './section7/section7.component';
import { Section9Component } from './section9/section9.component';
import { AccountComponent } from './section9/account/account.component';
import { NewAccountComponent } from './section9/new-account/new-account.component';
import { Section11Component } from './section11/section11.component';
// import { HomeComponent } from './section11/home/home.component';
import { ServersComponent } from './section11/servers/servers.component';
import { EditServerComponent } from './section11/servers/edit-server/edit-server.component';
import { ServerComponent } from './section11/servers/server/server.component';
import { UsersComponent } from './section11/users/users.component';
// import { UserComponent } from './section11/users/user/user.component';
import { PageNotFoundComponent } from './section11/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './section11/error-page/error-page.component';
import { Section13Component } from './section13/section13.component';
import { HomeComponent } from './section13/home/home.component';
import { UserComponent } from './section13/user/user.component';
import { Section15Component } from './section15/section15.component';
import { ReactiveFormsComponent } from './section15/reactive-forms/reactive-forms.component';
import { Practice15Component } from './section15/practice15/practice15.component';
import { Section17Component } from './section17/section17.component';
import { Section18Component } from './section18/section18.component';

import { BasicHighlightDirective } from './section7/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './section7/better-highlight/better-highlight.directive';
import { UnlessDirective } from './section7/unless/unless.directive';

import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { ServersService } from './section11/servers/servers.service';
import { AuthService } from './section11/services/auth.service';
import { ServerResolverService } from './section11/services/server-resolver.service';
import { UserService } from './section13/user/user.service';
import { AuthInterceptorService } from './section18/services/auth-interceptor.service';
import { LoggingInterceptorService } from './section18/services/logging-interceptor.service';

import { AuthGuard } from './section11/guards/auth-guard.service';
import { CanDeactiveGuard } from './section11/guards/can-deactive-guard.service';

import { ShortenPipe } from './section17/shorten.pipe';
import { FilterPipe } from './section17/filter.pipe';
import { ReversePipe } from './section17/reverse.pipe';
import { SortPipe } from './section17/sort.pipe';

@NgModule({
   declarations: [
      AppComponent,
      ServersComponent,
      PracticeComponent,
      ServerComponent,
      Section2Component,
      Practice2Component,
      SuccessAlertComponent,
      WarningAlertComponent,
      Practice2v2Component,
      Practice2v3Component,
      Section5Component,
      CockpitComponent,
      ServerElementComponent,
      LifecycleComponent,
      GameControlComponent,
      OddComponent,
      EvenComponent,
      Section7Component,
      Section9Component,
      AccountComponent,
      NewAccountComponent,
      BasicHighlightDirective,
      BetterHighlightDirective,
      UnlessDirective,
      Section11Component,
      HomeComponent,
      EditServerComponent,
      Section13Component,
      UsersComponent,
      UserComponent,
      PageNotFoundComponent,
      ErrorPageComponent,
      Section15Component,
      ReactiveFormsComponent,
      Practice15Component,
      Section17Component,
      ShortenPipe,
      FilterPipe,
      ReversePipe,
      SortPipe,
      Section18Component
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      AccountsService,
      LoggingService,
      ServersService,
      AuthService,
      ServerResolverService,
      AuthGuard,
      CanDeactiveGuard,
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true }
   ],
   bootstrap: [
      AppComponent
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ]
})
export class AppModule { }
