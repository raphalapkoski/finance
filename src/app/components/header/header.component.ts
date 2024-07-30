import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private sessionService = inject(SessionService);
  private router = inject(Router);

  executeLogoff() {
    this.sessionService.logout();
    this.router.navigate(['session']);
  }
}
