// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";


export const environment = {
    production: true,
    firebaseConfig : {
      apiKey: "AIzaSyD84WKfDNlwSMw20tFcNDcqnEPbBopo0iA",
      authDomain: "app-sala-de-juegos.firebaseapp.com",
      projectId: "app-sala-de-juegos",
      storageBucket: "app-sala-de-juegos.appspot.com",
      messagingSenderId: "929187839117",
      appId: "1:929187839117:web:47951a81c8178a01e8b6c4",
      databaseURL:"https://app-sala-de-juegos-default-rtdb.firebaseio.com/"
    },
};





//Initialize Firebase
//const app = initializeApp(firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
