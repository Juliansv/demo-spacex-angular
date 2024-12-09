import { Injectable } from '@angular/core';
import { Launch } from './home';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  private launchData: Launch | null = null;

  setLaunchData(launch: Launch) {
    console.log('setLaunchData called', launch);

    this.launchData = launch;
  }

  getLaunchData(): Launch | null {
    return this.launchData;
  }
}
