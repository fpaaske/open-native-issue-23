import {Component} from '@angular/core'
import {authorize, logout} from 'react-native-app-auth';

@Component({
  selector: 'ns-app-auth',
  templateUrl: './app-auth.component.html',
})
export class AppAuthComponent {
  authorized: boolean;

  private issuer = process.env.ISSUER;
  private clientId = process.env.CLIENT_ID;
  private redirectUrl = process.env.REDIRECT_URL;
  private postLogoutRedirectUrl = process.env.POST_LOGOUT_REDIRECT_URL;
  private scopes = process.env.SCOPES.split(',');
  private idToken: string;

  constructor() {
  }

  doAuthorize() {
    authorize({
      clientId: this.clientId,
      issuer: this.issuer,
      redirectUrl: this.redirectUrl,
      scopes: this.scopes,
      useNonce: true,
      usePKCE: true,
      warmAndPrefetchChrome: false
    }).then(result => {
      console.log(result);
      this.authorized = true;
      this.idToken = result.idToken;
    }).catch(error => {
      this.authorized = false;
      console.log(error.stack);
    });
  }

  doLogout() {
    logout({
      clientId: this.clientId,
      issuer: this.issuer
    }, {
      idToken: this.idToken,
      postLogoutRedirectUrl: this.postLogoutRedirectUrl
    }).then(result => {
      console.log(result);
      this.authorized = false;
    }).catch(error => {
      console.log(error.stack);
    });
  }
}
