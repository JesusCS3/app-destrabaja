import { AuthService } from './services/auth/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SlideHomeComponent } from './pages/home-page/components/slide-home/slide-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PrivacyPolicyComponent } from './pages/about/privacy-policy/privacy-policy.component';
import { ServiceConditionsComponent } from './pages/about/service-conditions/service-conditions.component';
import { ForgottenPasswordComponent } from './components/forgotten-password/forgotten-password.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { ProfileInformationComponent } from './pages/user/profile/profile-information/profile-information.component';
import { FavoritesComponent } from './pages/user/profile/favorites/favorites.component';
import { ProjectsComponent } from './pages/user/profile/projects/projects.component';
import { ProfileSettingsComponent } from './pages/user/profile/profile-settings/profile-settings/profile-settings.component';
import { FinanceComponent } from './pages/user/profile/finance/finance.component';
import { ReferredComponent } from './pages/user/profile/referred/referred.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesPublishedComponent } from './pages/user/profile/services-published/services-published.component';
import { ServiceCardComponent } from './pages/user/profile/services-published/components/service-card/service-card.component';
import { PublishNowComponent } from './pages/publish-now/publish-now.component';
import { PublishServiceComponent } from './pages/publish-now/publish-service/publish-service.component';
import { PreviewComponent } from './pages/publish-now/publish-service/preview/preview.component';
import { PublishServiceCardComponent } from './pages/publish-now/publish-service/preview/components/publish-service-card/publish-service-card.component';
import { ConfirmComponent } from './pages/publish-now/publish-service/confirm/confirm.component';
import { ServiceScreenComponent } from './pages/publish-now/publish-service/preview/components/service-screen/service-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublishProjectComponent } from './pages/publish-now/publish-project/publish-project.component';
import { GeneralInfoProjectComponent } from './pages/publish-now/publish-project/general-info-project/general-info-project/general-info-project.component';
import { PreviewProjectComponent } from './pages/publish-now/publish-project/preview-project/preview-project.component';
import { PublishProjectCardComponent } from './pages/publish-now/publish-project/preview-project/components/publish-project-card/publish-project-card.component';
import { ProjectScreenComponent } from './pages/publish-now/publish-project/preview-project/components/project-screen/project-screen.component';
import { ConfirmProjectComponent } from './pages/publish-now/publish-project/confirm-project/confirm-project.component';
import { ServiceDescriptionProjectComponent } from './pages/publish-now/publish-project/service-description-project/service-description-project/service-description-project.component';
import { FeaturesProjectComponent } from './pages/publish-now/publish-project/features-project/features-project/features-project.component';
import { RequirementsProjectComponent } from './pages/publish-now/publish-project/requirements-project/requirements-project/requirements-project.component';
import { GeneralInfoServiceComponent } from './pages/publish-now/publish-service/general-info-service/general-info-service/general-info-service.component';
import { DescriptionServiceComponent } from './pages/publish-now/publish-service/description-service/description-service/description-service.component';
import { LevelsServiceComponent } from './pages/publish-now/publish-service/levels-service/levels-service/levels-service.component';
import { ExtrasServiceComponent } from './pages/publish-now/publish-service/extras-service/extras-service/extras-service.component';
import { RequirementsServiceComponent } from './pages/publish-now/publish-service/requirements-service/requirements-service/requirements-service.component';
import { EditAccountComponent } from './pages/user/account/edit-account/edit-account/edit-account.component';
import { EditProfileSettingsComponent } from './pages/user/profile/profile-settings/edit-profile-settings/edit-profile-settings.component';
import { AccountSettingsComponent } from './pages/user/account/account-settings/account-settings/account-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    LandingPageComponent,
    HomePageComponent,
    SlideHomeComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    ServiceConditionsComponent,
    ForgottenPasswordComponent,
    ProfileSettingsComponent,
    ProfileComponent,
    ProfileInformationComponent,
    FavoritesComponent,
    ProjectsComponent,
    FinanceComponent,
    ReferredComponent,
    PageNotFoundComponent,
    ServicesPublishedComponent,
    ServiceCardComponent,
    PublishNowComponent,
    PublishServiceComponent,
    PreviewComponent,
    PublishServiceCardComponent,
    ConfirmComponent,
    ServiceScreenComponent,
    PublishProjectComponent,
    GeneralInfoProjectComponent,
    PreviewProjectComponent,
    PublishProjectCardComponent,
    ProjectScreenComponent,
    ConfirmProjectComponent,
    ServiceDescriptionProjectComponent,
    FeaturesProjectComponent,
    RequirementsProjectComponent,
    GeneralInfoServiceComponent,
    DescriptionServiceComponent,
    LevelsServiceComponent,
    ExtrasServiceComponent,
    RequirementsServiceComponent,
    EditAccountComponent,
    EditProfileSettingsComponent,
    AccountSettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
