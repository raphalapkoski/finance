import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register } from '../../../types/register.type';

@Component({
  selector: 'app-form-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './form-signup.component.html',
  styleUrl: './form-signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSignupComponent {
  @Output() executeFlip = new EventEmitter();
  @Output() executeRegister = new EventEmitter<Register>();

  formRegister = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  executeFlipEmitter() {
    this.formRegister.reset();
    this.executeFlip.emit();
  }

  executeRegisterEmitter() {
    this.formRegister.reset();
    this.executeRegister.emit(this.formRegister.value as Register);
  }
}
