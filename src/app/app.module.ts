import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core'
import {NativeScriptModule} from '@nativescript/angular'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AppAuthComponent} from '~/app/app-auth/app-auth.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, AppAuthComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
