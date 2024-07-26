import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { FormSigninComponent } from "./form-signin/form-signin.component";
import { FormSignupComponent } from "./form-signup/form-signup.component";
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Credentials } from '../../types/credentials.type';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [FormSigninComponent, FormSignupComponent],
  templateUrl: './session.component.html',
  styleUrl: './session.component.scss',
  animations: [
    trigger("cardFlip", [
      state(
        "true",
        style({
          transform: "none"
        })
      ),
      state(
        "false",
        style({
          transform: "rotateY(180deg)"
        })
      ),
      transition("true => false", [animate("500ms")]),
      transition("false => true", [animate("500ms")]),
    ])
  ]
})
export class SessionComponent {
  private sessionSerrvice = inject(SessionService);
  private router = inject(Router);
  protected isFlip = true;

  redirectToSignUp() {
    this.isFlip = !this.isFlip;
  }

  executeSignin(credentials: Credentials) {
    this.sessionSerrvice.authenticate(credentials)
      .subscribe({
        next: () => this.router.navigate(['home']),
        error: (error) => console.log(error)
      })
  }
}
