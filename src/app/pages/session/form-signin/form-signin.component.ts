import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Credentials } from '../../../types/credentials.type';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-signin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './form-signin.component.html',
  styleUrl: './form-signin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSigninComponent {
  @Output() executeFlip = new EventEmitter();
  @Output() executeSignin = new EventEmitter<Credentials>();

  formCredentials = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  executeSigninEmitter() {
    this.executeSignin.emit(this.formCredentials.value as Credentials);
  }

  executeFlipEmitter() {
    this.executeFlip.emit();
  }
}
