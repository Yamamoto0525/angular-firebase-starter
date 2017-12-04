import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';
import { DevAuthComponent } from './dev-auth/dev-auth.component';
import { DevAuthService } from './dev-auth/dev-auth.service';
import { DevAuthGuard } from './guard/dev-auth.guard';
import { ServiceWorkerService } from './service/service-worker.service';
import { SessionStorageService } from './service/session-storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('/ngsw-worker.js'),
  ],
  declarations: [
    DevAuthComponent,
  ],
  providers: [
    DevAuthGuard,
    DevAuthService,
    ServiceWorkerService,
    SessionStorageService,
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
