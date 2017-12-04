import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { DevAuthService } from '../dev-auth/dev-auth.service';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SessionStorageService } from '../service/session-storage.service';

@Injectable()
export class DevAuthGuard implements CanActivate {

  constructor(private devAuth: DevAuthService,
              private router: Router,
              private storage: SessionStorageService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {
    const url: string = state.url;
    return this.checkElseAuth(url);
  }

  private checkElseAuth(url: string): Observable<boolean> | boolean {
    const auth_path = this.storage.fetch('auth_pass') || {value: null};
    if (url === '/dev-auth') {
      // For Dev Auth Component
      if (environment.production) {
        this.router.navigate(['/']);
        return false;
      } else {
        return this.devAuth.getDevAuth().take(1).map((val: { pass: string }) => {
          if (val.pass === auth_path.value) {
            this.router.navigate(['/']);
            return false;
          } else {
            return true;
          }
        });
      }
    } else {
      // For Else Auth Component
      if (environment.production) {
        return true;
      } else {
        return this.devAuth.getDevAuth().take(1).map((val: { pass: string }) => {
          if (val.pass === auth_path.value) {
            return true;
          } else {
            this.router.navigate(['dev-auth']);
            return false;
          }
        });
      }
    }
  }

}
