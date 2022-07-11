import { Component, ContentChild, Input } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @ContentChild(IonInput) input: IonInput;

  @Input() isInvalid = false;
  @Input() label: string;
  @Input() required = false;

  constructor() { }

}
