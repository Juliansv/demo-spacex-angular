import {
  Component,
  inject,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { HomeService } from '../home.service';
import { AuthService } from '../auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  authService = inject(AuthService);
  homeService = inject(HomeService);

  missionData = signal('');

  ngOnInit(): void {
    this.homeService.getMissionsData().subscribe({
      next: (data) => {
        this.missionData.set(data.name);
        console.log('data', data);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
