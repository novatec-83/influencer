import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {LoaderModule} from './loader/loader.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import {CommonModule} from '@angular/common';
import {NgTemplateOutlet} from '@angular/common';
import {OutletContext} from '@angular/router';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './_guards/index';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {App_service} from './app.service';
import { HttpClientModule } from '@angular/common/http';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');

}
import {AuthServiceConfig, SocialLoginModule, LinkedinLoginProvider, GoogleLoginProvider, FacebookLoginProvider} from 'ng4-social-login';
const config= new AuthServiceConfig([
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider('86pmxhblr5nk3j')
  },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('275856928145-q1oilas7eb0oils1rnr8u14l04ik60nq.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2076488752606610')
  }
], false);
export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
            // AccountSettingComponent,

    // PostSignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LoaderModule,
    HttpClientModule,
    MatButtonModule, MatFormFieldModule, MatInputModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
  ],


  providers: [
    {provide: AuthServiceConfig,  useFactory: provideConfig},
    AuthGuard, App_service],
  bootstrap: [AppComponent]
})
export class AppModule { }
