import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevAuthService } from './dev-auth.service';
import { SessionStorageService } from '../service/session-storage.service';

@Component({
  selector: 'app-dev-auth',
  templateUrl: './dev-auth.component.html',
  styleUrls: ['./dev-auth.component.scss']
})
export class DevAuthComponent implements OnInit {

  public AuthPass = {num: 0, flag: false, value: ''};
  public ErrorTxt = '';

  constructor(private devAuth: DevAuthService,
              private router: Router,
              private storage: SessionStorageService) {
  }

  ngOnInit() {
    this.AuthPass = this.storage.fetch ( 'auth_pass') || this.AuthPass;
    if (this.AuthPass.flag) {
      this.ErrorTxt = 'Too much login error. Retry after a few minutes';
    }
  }

  submitPassword(pass: string): void {
    this.devAuth.getDevAuth().take(1)
      .subscribe((val: { pass: string }) => {
        if (val.pass === pass) {
          this.storage.add(this.AuthPass, 'auth_pass');
          this.router.navigate(['/']);
        } else {
          this.ErrorTxt = 'Input the valid password.';
          this.AuthPass.value = '';
          this.AuthPass.num++;
          this.checkDisable();
        }
      }, (err: any) => {
        console.log(err);
        this.ErrorTxt = 'Network Error.';
      });
  }

  // If failed more than 5 times, lock for 3 minutes
  private checkDisable(): void {
    if (this.AuthPass.num > 5) {
      this.AuthPass.flag = true;
      this.ErrorTxt = 'Too much login error. Retry after a few minutes';
      this.storage.add(this.AuthPass, 'auth_pass');
      setTimeout(() => {
        this.AuthPass.num = 0;
        this.AuthPass.flag = false;
        this.ErrorTxt = '';
        this.storage.add(this.AuthPass, 'auth_pass');
      }, 180000);
    }
  }

}
