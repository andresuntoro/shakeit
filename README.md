# shakeit
Sebuah tugas UAS..

## Build

Clone the repository and follow the steps based on the platform of your device.

#### iOS

1. `npm install`
2. `cordova platform add ios`
3. `ionic cordova build ios`
4. Connect your iOS device and run the application, either by
  1. Opening up the relevant `.xcodeproj` on `Xcode` and clicking the run button (making sure your device is selected)
  2. Running `ionic cordova run ios --device` on your CLI - this requires that the npm package `ios-deploy` is installed globally (`npm install -g ios-deploy`)

### Android

1. `npm install`
2. `cordova platform add android`
3. `ionic cordova build android`
4. Connect your Android device and run the application with `ionic cordova run android` (make sure USB debugging is enabled on your device)

