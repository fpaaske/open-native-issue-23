import {platformNativeScript, runNativeScriptAngularApp} from '@nativescript/angular';

import {AppModule} from './app/app.module';
import {Application} from "@nativescript/core";

interface RNAppAuthAuthorizationFlowManager extends NSObjectProtocol {
  authorizationFlowManagerDelegate: RNAppAuthAuthorizationFlowManagerDelegate;
}

declare const RNAppAuthAuthorizationFlowManager: {
  prototype: RNAppAuthAuthorizationFlowManager;
};

interface RNAppAuthAuthorizationFlowManagerDelegate extends NSObjectProtocol {
  resumeExternalUserAgentFlowWithURL(url: NSURL): boolean;
}
declare const RNAppAuthAuthorizationFlowManagerDelegate: {
  prototype: RNAppAuthAuthorizationFlowManagerDelegate;
};

declare const RCTLinkingManager;

if (global.isIOS) {
  @NativeClass()
  @ObjCClass(UIApplicationDelegate, RNAppAuthAuthorizationFlowManager)
  class MyDelegate extends UIResponder implements UIApplicationDelegate, RNAppAuthAuthorizationFlowManager {
    authorizationFlowManagerDelegate: RNAppAuthAuthorizationFlowManagerDelegate;

    get window() {
      return Application.ios.window;
    }

    set window(window) {}

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
      return true;
    }

    applicationDidBecomeActive(application: UIApplication): void {}

    applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean {
      if (this.authorizationFlowManagerDelegate?.resumeExternalUserAgentFlowWithURL(url as NSURL)) {
        return true;
      }
      return RCTLinkingManager.applicationOpenURLOptions(app, url, options);
    }

    public 'setAuthorizationFlowManagerDelegate:'(delegate) {
      this.authorizationFlowManagerDelegate = delegate;
    }

    public static ObjCExposedMethods = {
      'setAuthorizationFlowManagerDelegate:': { returns: interop.types.void, params: [RNAppAuthAuthorizationFlowManagerDelegate] },
    };
  }
  Application.ios.delegate = MyDelegate;
}

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

