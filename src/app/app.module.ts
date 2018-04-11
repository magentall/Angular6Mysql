import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import { HttpClientModule } from '@angular/common/http'

import { RecordsService } from './records.service';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component'
import { AuthGuard } from './auth.guard'
import { UserService } from './user.service'


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'data',
        component: DataComponent
      },
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [RecordsService, AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
