import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BranchselectionPage } from './branchselection/branchselection.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardPage } from './dashboard/dashboard.page';
import { TaskselectionPage } from './taskselection/taskselection.page';
import { LoginPage } from './login/login.page';
import { dataService } from './dashboard/dashboard.page.service';

@NgModule({
  declarations: [AppComponent, BranchselectionPage, DashboardPage, TaskselectionPage, LoginPage],
  entryComponents: [AppComponent, BranchselectionPage, DashboardPage, TaskselectionPage, LoginPage],
  imports: [BrowserModule, IonicModule.forRoot(), CommonModule, AppRoutingModule,
    SuperTabsModule.forRoot(), FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    dataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
