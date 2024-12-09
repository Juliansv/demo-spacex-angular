import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
import { Launch } from '../home';
import { LaunchService } from '../launch.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-home',
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homeService = inject(HomeService);
  launchService = inject(LaunchService);
  router = inject(Router);

  latestLaunches: Launch | undefined;
  upcomingLaunches: Launch[] | undefined;
  pastLaunches: Launch[] | undefined;

  isLoading = false;

  defaultImage = '/spacex-launch-default.webp';

  selectedType = signal('all');

  ngOnInit() {
    this.isLoading = true;
    this.homeService.getMissionsData().subscribe({
      next: (data) => {
        this.latestLaunches = data.latest;
        this.upcomingLaunches = data.upcoming;
        this.pastLaunches = data.past;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  selectType(type: string) {
    this.selectedType.set(type);
  }

  viewLaunch(launch: Launch) {
    this.launchService.setLaunchData(launch);
    this.router.navigate(['/launch', launch.id]);
  }

  //   array for skeleton loader
  repeatArray = Array(6).fill(0);
}
