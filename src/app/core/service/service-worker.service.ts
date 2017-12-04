import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../../../environments/environment';

@Injectable()
export class ServiceWorkerService {

  constructor(private swUpdate: SwUpdate) { }

  checkSWUpdate(): void {
    if (environment.production) {
      // Subscribe new worker is available
      this.swUpdate.available.subscribe(() => {
        if (window.confirm('A new version has been released. Do you want to update?')) {
          window.location.reload(true);
        }
      });
      // Check for new version
      this.swUpdate.checkForUpdate();
    }
  }

}
