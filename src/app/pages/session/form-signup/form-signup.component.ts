import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-signup',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './form-signup.component.html',
  styleUrl: './form-signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSignupComponent {
  @Output() executeFlip = new EventEmitter();

  executeFlipEmitter() {
    this.executeFlip.emit();
  }
}
