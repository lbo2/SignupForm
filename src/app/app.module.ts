import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupDetailsComponent } from './components/signup-details/signup-details.component';
import { FieldmatchesDirective } from './validators/fieldmatches.directive';
import { AppRoutingModule } from './app-routing.module';
import { PasswordPatternDirective } from './validators/password-pattern.directive';
import { PhoneValidationDirective } from './validators/phone-validation.directive';

enum RoutePaths {
  SignupForm = 'signup-form',
  SignupDetails = '',
}

export const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SignupDetailsComponent,
    FieldmatchesDirective,
    PasswordPatternDirective,
    PhoneValidationDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
