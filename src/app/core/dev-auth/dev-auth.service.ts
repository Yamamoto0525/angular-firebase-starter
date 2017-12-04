import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

@Injectable()
export class DevAuthService {

  constructor(private afStore: AngularFirestore) {
  }


  // check dev password
  getDevAuth(): Observable<any> {
    return this.afStore.collection('dev-auth').doc('login').valueChanges();
  }

}
