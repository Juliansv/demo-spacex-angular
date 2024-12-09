import { Component, inject, Input } from '@angular/core';
import { Launch } from '../home';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launchDetail.component.html',
  styleUrls: ['./launchDetail.component.css'],
})
export class LaunchDetailComponent {
  @Input() launch!: Launch;
  launchService = inject(LaunchService);

  defaultImage = '/spacex-launch-default.webp';

  defaultDetail =
    'Details about this missions are not available at the moment. Please check back later.';

  ngOnInit() {
    const launchData = this.launchService.getLaunchData();
    if (launchData) {
      this.launch = launchData;
    } else {
      console.error('Launch data is null');
    }
  }
}
