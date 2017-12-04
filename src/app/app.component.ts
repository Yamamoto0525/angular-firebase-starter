import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ServiceWorkerService } from './core/service/service-worker.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnInit {

  constructor(private sw: ServiceWorkerService) {
  }

  ngOnInit() {
    // Check service worker update
    this.sw.checkSWUpdate();
  }
}
