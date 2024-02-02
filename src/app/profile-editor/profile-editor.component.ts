import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  maxDate = new Date()
  constructor(private formBuilder: FormBuilder) {
    this.maxDate.setDate(this.maxDate.getDate() - 1)
  }
  //control() method of FormBuilder class returns a FormControl instance.
  //group() method of FormBuilder class returns a FormGroup instance.
  //password must be at least 8 characters long, with at least 1 special symbol, 1 uppercase letter, 1 lowercase letter, and 1 number.
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['', [Validators.required,
      // Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    ]],
    gender: [''],
    dateOfBirth: [''],
    phone: ['', [Validators.required, Validators.pattern(/[789]\d{9,9}$/)]],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      pinCode: ['']
    })
  },
  {
    validators: [this.confirmPasswordValidator('password', 'confirmPassword')]
  }
  )

  get firstName() {
    return this.profileForm.get('firstName')
  }

  get lastName() {
    return this.profileForm.get('lastName')
  }

  get password() {
    return this.profileForm.get('password')
  }

  get confirmPassword() {
    return this.profileForm.get('confirmPassword')
  }

  get phone() {
    return this.profileForm.get('phone')
  }

  confirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName]
      const matchingControl = formGroup.controls[matchingControlName]

      if(matchingControl.errors && !matchingControl.errors?.['confirmPasswordValidator']) {
        return
      }

      if(control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true })
      }
      else {
        matchingControl.setErrors(null)
      }
    }
  }
}
