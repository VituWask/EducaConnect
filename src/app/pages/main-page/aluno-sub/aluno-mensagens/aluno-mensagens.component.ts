import { Component } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-aluno-mensagens',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
    ],

  templateUrl: './aluno-mensagens.component.html',
  styleUrls: ['./aluno-mensagens.component.scss']
})
export class AlunoMensagensComponent {
  firstFormGroup = this._formBuilder.group({
  firstCtrl: ['', Validators.required],
});
secondFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
isEditable = false;

constructor(private _formBuilder: FormBuilder) {}
}
