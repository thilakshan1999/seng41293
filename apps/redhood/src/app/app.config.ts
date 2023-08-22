import { ApplicationConfig,
   importProvidersFrom,
    isDevMode,
  } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './states/app/app.state';
import { provideServiceWorker } from '@angular/service-worker';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import {MatMomentDateModule} from '@angular/material-moment-adapter'
import {getAuth,provideAuth} from '@angular/fire/auth'
import {getFirestore,provideFirestore} from '@angular/fire/firestore'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    importProvidersFrom(
      NgxsModule.forRoot([AppState], {
        developmentMode: true,
    })),
    importProvidersFrom(
      provideFirebaseApp(()=>
        initializeApp({
          apiKey: "AIzaSyAc84oL9ld0_loWGakk7Ijbvir9jWx0Y5g",
          authDomain: "redhoodmobile-fd584.firebaseapp.com",
          projectId: "redhoodmobile-fd584",
          storageBucket: "redhoodmobile-fd584.appspot.com",
          messagingSenderId: "498362182800",
          appId: "1:498362182800:web:e1d09f33660d63cda1bc15"
        })
      )
    ),
    importProvidersFrom(
      AngularFireModule.initializeApp({
        apiKey: "AIzaSyAc84oL9ld0_loWGakk7Ijbvir9jWx0Y5g",
        authDomain: "redhoodmobile-fd584.firebaseapp.com",
        projectId: "redhoodmobile-fd584",
        storageBucket: "redhoodmobile-fd584.appspot.com",
        messagingSenderId: "498362182800",
        appId: "1:498362182800:web:e1d09f33660d63cda1bc15"
      })
    ),
    importProvidersFrom(provideAuth(()=>getAuth())),
    importProvidersFrom(provideFirestore(()=>getFirestore())),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(MatMomentDateModule),
     provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })],
};
