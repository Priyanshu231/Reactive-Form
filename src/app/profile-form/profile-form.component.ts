import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address : new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      pinCode: new FormControl('')
    })
  })

  onSubmit() {
    alert(JSON.stringify(this.profileForm.value))
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName: 'Pinky',
      address: {
        city: 'Delhi'
      }
    })
    // this.profileForm.setValue({
    //   firstName: 'Bruce',
    //   lastName: 'Wayne',
    //   address: {
    //     street: '1234 Main St',
    //     city: 'Gotham',
    //     state: 'NY',
    //     pinCode: '10458'
    //   }
    // })
  }
}
