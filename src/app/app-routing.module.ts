import {NgModule} from '@angular/core'
import {Routes} from '@angular/router'
import {NativeScriptRouterModule} from '@nativescript/angular'

import {AppAuthComponent} from '~/app/app-auth/app-auth.component'

const routes: Routes = [
  { path: '', redirectTo: '/app-auth', pathMatch: 'full' },
  { path: 'app-auth', component: AppAuthComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
