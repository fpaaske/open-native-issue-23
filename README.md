# open-native-issue-23
Example repo for bug report https://github.com/OpenNative/open-native/issues/23

As discussed on [Discord](https://discord.com/channels/603595811204366337/1039972742868500522/1106634064041103450) I'm having issues with react-native-app-auth.

After setting up open-native and adding react-native-app-auth, I get the following error on Android when calling authorize():
```
  JS: CONSOLE LOG: Error: �����
  JS:     at file: src/webpack:/ns-ng-open-native/node_modules/@open-native/core/src/android/converter.js:278:0
  JS:     at new ZoneAwarePromise (file: src/webpack:/ns-ng-open-native/node_modules/zone.js/fesm2015/zone.js:1411:0)
  JS:     at promisify (file: src/webpack:/ns-ng-open-native/node_modules/@open-native/core/src/android/converter.js:276:0)
  JS:     at <computed> [as authorize] (file: src/webpack:/ns-ng-open-native/node_modules/@open-native/core/src/android/nativemodules.js:87:36)
  JS:     at authorize (file: src/webpack:/ns-ng-open-native/node_modules/react-native-app-auth/index.js:246:19)
  JS:     at ItemsComponent.doAuthorize (file: src/webpack:/ns-ng-open-native/src/app/item/items.component.ts:14:17)
  JS:     at ItemsComponent_Template_Button_tap_2_listener (file: src/webpack:/ns-ng-open-native/src/app/item/items.component.ts:45:88)
  JS:     at executeListenerWithErrorHandling (file: src/webpack:/ns-ng-open-native/node_modules/@angular/core/fesm2015/core.mjs:13956:0)
  JS:     at Object.wrapListenerIn_markDirtyAndPreventDefault (file:///data/data/org.nativescript.nsngopennative/files/app/...
```

On iOS I get this this error:
```
  ***** Fatal JavaScript exception - application has been terminated. *****
  NativeScript encountered a fatal error: Uncaught Error: Unexpected type 'other' at index 10 - the autolinker must have failed to parse the native module.
  at
  toNativeArguments(file: src/webpack:/ns-ng-open-native/node_modules/@open-native/core/src/ios/converter.js:45:22)
  at (file: src/webpack:/ns-ng-open-native/node_modules/@open-native/core/src/ios/converter.js:206:42)
```

The log output when starting the app looks OK:
```
[@open-native/core/hooks/before-prepare.js] Autolinking React Native ios native modules...
[@open-native/core/hooks/prepare-ios.js] Unable to extract any methods from RCTBridgeModule named "EventDispatcher".
[@open-native/core/hooks/prepare-ios.js]: Writing RNPodspecs.h
[@open-native/core/hooks/prepare-ios.js]: Writing Podfile
[@open-native/core/hooks/prepare-ios.js]: Writing React-Native-Podspecs.podspec
[@open-native/core/hooks/prepare-ios.js]: Writing modulemap.json
[@open-native/core/hooks/before-prepare.js] Autolinked @open-native/core!
[@open-native/core/hooks/before-prepare.js] Autolinked react-native-app-auth!
[@open-native/core/hooks/before-prepare.js] ... Finished autolinking React Native ios native modules.
```
