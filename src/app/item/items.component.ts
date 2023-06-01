import {Component, OnInit} from '@angular/core'

import {Item} from './item'
import {ItemService} from './item.service'
import {authorize} from 'react-native-app-auth';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }

  doAuthorize() {
    authorize({
      additionalHeaders: {'a': 'b'},
      additionalParameters: {prompt: 'login'},
      clientAuthMethod: 'basic',
      clientId: '',
      clientSecret: '',
      connectionTimeoutSeconds: 30,
      customHeaders: {register: {'custom1': 'test1'}},
      dangerouslyAllowInsecureHttpRequests: false,
      issuer: '',
      redirectUrl: 'com.test.auth://callback',
      scopes: ['openid', 'profile', 'crmapi', 'serviceapi', 'offline_access'],
      serviceConfiguration: {
        authorizationEndpoint: '',
        endSessionEndpoint: '',
        tokenEndpoint: '',
        revocationEndpoint: ''
      },
      skipCodeExchange: false,
      useNonce: true,
      usePKCE: true,
      warmAndPrefetchChrome: false
    }).then(result => {
      console.log(result.idToken);
    }).catch(error => console.log(error.stack));
  }
}
