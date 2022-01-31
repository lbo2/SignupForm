import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupDetailsComponent } from './components/signup-details/signup-details.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

const routes: Routes = [
  { path: 'signup-details', component: SignupDetailsComponent },
  { path: 'signup-form', component: SignupFormComponent },
  { path: '', redirectTo: 'signup-form', pathMatch: 'full' },
  { path: '/signup-details', redirectTo: 'signup-details', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
