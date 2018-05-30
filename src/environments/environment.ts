// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBdvYwjWzagxQ89JhC5XI1pmWipI3XeUL4',
    authDomain: 'storefront-81588.firebaseapp.com',
    databaseURL: 'https://storefront-81588.firebaseio.com',
    projectId: 'storefront-81588',
    storageBucket: 'storefront-81588.appspot.com',
    messagingSenderId: '426782917590'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
