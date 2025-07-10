import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getStorage, provideStorage} from '@angular/fire/storage';
import {environment} from '../environments/environments';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ]
};
