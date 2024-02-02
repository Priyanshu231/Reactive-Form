import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor-form',
  templateUrl: './name-editor-form.component.html',
  styleUrls: ['./name-editor-form.component.css']
})
export class NameEditorFormComponent {
  name = new FormControl('')

  updateName() {
    this.name.setValue('Surya')
  }
}
