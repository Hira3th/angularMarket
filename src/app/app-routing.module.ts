import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FabLabComponent } from './fab-lab/fab-lab.component';

import { LoginComponent } from './login/login.component';
import { MyStuffComponent } from './my-stuff/my-stuff.component';
import { NewStuffComponent } from './new-stuff/new-stuff.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'fablab',component:FabLabComponent,canActivate:[AuthGuard]},
  {path:'mystuff',component:MyStuffComponent,canActivate:[AuthGuard]},
  {path:'newstuff',component:NewStuffComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
