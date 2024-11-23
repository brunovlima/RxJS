import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  formGroup: FormGroup<any> = new FormGroup({});
  @ViewChild('form') formElement!: ElementRef;
  submittedValues: any = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initObservable();
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      numberInput: ['', Validators.required],
      stringInput: ['', Validators.required],
      booleanInput: [false, Validators.required]
    });
  }

  initObservable() {
    const observable = new Observable((subscriber_param) => {
      subscriber_param.next(10);
      subscriber_param.next('Bruno');
      subscriber_param.next(true);
      subscriber_param.next({ name: 'Bruno', age: 36 });
      subscriber_param.next([1,2,3,4]);
      subscriber_param.complete();
    });

    observable.subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      },
      () => {
        console.log('compleat the OBSERVABLE');
      }
    );
  }

  submitForm() {
    const values = {
      number: this.formGroup.get('numberInput')?.value || null,
      string: this.formGroup.get('stringInput')?.value || null,
      boolean: this.formGroup.get('booleanInput')?.value || false
    };

    this.submittedValues = values;

    const observableForms = new Observable((form_params) => {
      form_params.next(values);
      form_params.complete();
    });

    observableForms.subscribe(
      (respostaForms) => { console.log(respostaForms); },
      (error) => { console.error(error); },
      () => { console.log('compleat the OBSERVABLE FORMS'); }
    );
  }
}
